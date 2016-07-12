var should = require('chai').should();
var rockPaperScissors = require('../rockPaperScissorsLizardSpock.js');

describe.only('rockPaperScissorsLizardSpock', function () {
    describe('smoke tests', function () {
        it('should exist', function () {
            rockPaperScissors.should.exist;
        });

        it('should be a function', function () {
            rockPaperScissors.should.be.a('function');
        });
    });
});
