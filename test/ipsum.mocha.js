var should = require('should');

require('./fixture');

var bonesTest = require('bones-test');
var server = bonesTest.server();

var config = server.plugin.config;

describe('Ipsum model using a mixin that alters the prototype.', function() {
    bonesTest.testModel(server, 'Ipsum');
    bonesTest.testModelCRUD(server, 'Ipsum', {
        id: 'ipsum',
        name: 'Ipsum'
    }, {
        another: 'Dolor'
    });
    bonesTest.testModelCRUDHTTP(server, 'Ipsum', {
        id: 'ipsum',
        name: 'Ipsum'
    }, {
        another: 'Dolor'
    });
});
