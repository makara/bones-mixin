// Demonstrate mixin a model.
var store = {};

module.exports = function(_options) {
    _options || (_options = {});

    return function(model) {
        model.prototype.sync = function(method, model, options) {
            options || (options = {});
            var success = options.success, error = options.error;

            var id = model.get('id') || null;
            if (!id) return error('ID is required');

            switch (method) {
            case 'read':
                if (!store[id]) return error('Model not found.');
                break;
            case 'create':
            case 'update':
                store[id] = model.toJSON();
                break;
            case 'delete':
                if (!store[id]) return error('Model not found.');
                delete store[id];
                break;
            }
            success(store[id] || {});
        };
    };
};
