var bonesMixin = module.exports = require('./lib/bonesMixin');

var Bones = require('bones');

// Apply to Bones classes.
bonesMixin(Bones.Router);
bonesMixin(Bones.Model);
bonesMixin(Bones.Collection);
bonesMixin(Bones.View);
bonesMixin(Bones.Server);
bonesMixin(Bones.Command);

// Apply to Bones prototypes.
bonesMixin(Bones.Router.prototype);
bonesMixin(Bones.Model.prototype);
bonesMixin(Bones.Collection.prototype);
bonesMixin(Bones.View.prototype);
bonesMixin(Bones.Server.prototype);
bonesMixin(Bones.Command.prototype);
