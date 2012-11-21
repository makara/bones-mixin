var should = require('should');

require('./fixture');

var bonesTest = require('bones-test');
var server = bonesTest.server();

var config = server.plugin.config;

describe('Lorem model using a mixin that alters the model.', function() {
    bonesTest.testModel(server, 'Lorem');
    bonesTest.testModelCRUD(server, 'Lorem', {
        id: 'lorem',
        name: 'Lorem'
    }, {
        another: 'Ipsum'
    });
    bonesTest.testModelCRUDHTTP(server, 'Lorem', {
        id: 'lorem',
        name: 'Lorem'
    }, {
        another: 'Ipsum'
    });
});
