// Demonstrate using a mixin that alters an Express application.
servers['Core'].augment({
    initialize: function(parent, app) {
        parent.call(this, app);

        this.mixin('applications', 'dolor');
    }
});
