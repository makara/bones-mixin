var should = require('should');
var request = require('request');

require('./fixture');

var bonesTest = require('bones-test');
var server = bonesTest.server();

describe('Dolor, a mixin that alters a Bones server.', function() {
    before(function(done) {
        server.start(done);
    });

    after(function(done) {
        server.on('close', done);
        server.close();
    });

    describe('Get /dolor', function() {
        it('should return the text', function(done) {
            request.get({
                uri: 'http://127.0.0.1:3000/dolor'
            }, function(err, res, body) {
                should.not.exist(err);
                res.should.be.a('object');
                res.should.have.property('statusCode', 200);
                res.should.have.property('body', 'Lorem ipsum dolor sit amet');
                setTimeout(done, 1);
            });
        });
    });
});
