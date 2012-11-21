// Demonstrate using a mixin that alters a model instance (only for server
// side).
models['Ipsum'].augment({
    initialize: function(parent, attributes) {
        parent && parent.call(this, attributes);

        this.mixin('backends', 'ipsum', {
            lorem: 'some options'
        });
    }
});
