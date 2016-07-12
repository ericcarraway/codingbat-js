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

    describe('ties', function () {
        it('rock', function () {
            rockPaperScissors('rock', 'rock').should.equal(0);
        });

        it('paper', function () {
            rockPaperScissors('paper', 'paper').should.equal(0);
        });

        it('scissors', function () {
            rockPaperScissors('scissors', 'scissors').should.equal(0);
        });

        it('lizard', function () {
            rockPaperScissors('lizard', 'lizard').should.equal(0);
        });

        it('Spock', function () {
            rockPaperScissors('Spock', 'Spock').should.equal(0);
        });
    });

    describe('a winning', function () {
        it('scissors cut paper', function () {
            rockPaperScissors('scissors', 'paper').should.equal(1);
        });

        it('paper covers rock', function () {
            rockPaperScissors('paper', 'rock').should.equal(1);
        });

        it('rock crushes lizard', function () {
            rockPaperScissors('rock', 'lizard').should.equal(1);
        });

        it('lizard poisons Spock', function () {
            rockPaperScissors('lizard', 'Spock').should.equal(1);
        });

        it('Spock smashes scissors', function () {
            rockPaperScissors('Spock', 'scissors').should.equal(1);
        });

        it('scissors decapitates lizard', function () {
            rockPaperScissors('scissors', 'lizard').should.equal(1);
        });

        it('lizard eats paper', function () {
            rockPaperScissors('lizard', 'paper').should.equal(1);
        });

        it('paper disproves Spock', function () {
            rockPaperScissors('paper', 'Spock').should.equal(1);
        });

        it('Spock vaporizes rock', function () {
            rockPaperScissors('Spock', 'rock').should.equal(1);
        });

        it('rock crushes scissors', function () {
            rockPaperScissors('rock', 'scissors').should.equal(1);
        });
    });
});
