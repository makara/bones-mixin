// Demonstrate using a mixin that alters a model (only for server side).
models['Lorem'].mixin('backends', 'lorem', {
    lorem: 'some options'
});
