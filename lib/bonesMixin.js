var path = require('path');
var fs = require('fs');

var Bones = require('bones');
var _ = Bones._;

// The lib itself can be used to mixin some helper functions on a given object.
var bonesMixin = module.exports = function(target) {
    _.extend(target, bonesMixin.helpers);
};

// Register a factory.
// TODO: register a given factory function into Bones.plugin directly.
bonesMixin.register = function(namespace, title, factory) {};

// Register every file in a dir + a namespace.
// @see Bones.plugin
bonesMixin.registerDir = function(dir, namespace) {
    namespace || (namespace = 'mixins');
    Bones.plugin[namespace] || (Bones.plugin[namespace] = {});
    Bones.plugin.require(dir, namespace);
};

// Get a factory.
bonesMixin.get = function(namespace, title) {
    if (!Bones.plugin[namespace] || !Bones.plugin[namespace][title] ||
        !_(Bones.plugin[namespace][title]).isFunction()) {
        return false;
    }
    return Bones.plugin[namespace][title];
};

// Some helper functions that another object can use to use a mixin.
bonesMixin.helpers = {
    mixinPlugin: function(plugin) {
        plugin(this);
        return this;
    },
    mixin: function(namespace, title, options) {
        var factory = bonesMixin.get(namespace, title);
        if (factory) {
            this.mixinPlugin(factory(options));
        }
        return this;
    }
};
