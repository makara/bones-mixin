// Demonstrate mixin an Express application.
module.exports = function(_options) {
    _options || (_options = {});

    return function(otherApp) {
        otherApp.get('/dolor', function(req, res, next) {
            res.send('Lorem ipsum dolor sit amet');
        });
    };
};
