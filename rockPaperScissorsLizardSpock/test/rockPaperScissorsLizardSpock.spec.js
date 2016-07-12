var should = require('chai').should();
var rockPaperScissorsLizardSpock = require('../rockPaperScissorsLizardSpock.js');

describe('rockPaperScissorsLizardSpock', function () {
    describe('smoke tests', function () {
        it('should exist', function () {
            rockPaperScissorsLizardSpock.should.exist;
        });

        it('should be a function', function () {
            rockPaperScissorsLizardSpock.should.be.a('function');
        });
    });

    describe('ties', function () {
        it('rock', function () {
            rockPaperScissorsLizardSpock('rock', 'rock').should.equal(0);
        });

        it('paper', function () {
            rockPaperScissorsLizardSpock('paper', 'paper').should.equal(0);
        });

        it('scissors', function () {
            rockPaperScissorsLizardSpock('scissors', 'scissors').should.equal(0);
        });

        it('lizard', function () {
            rockPaperScissorsLizardSpock('lizard', 'lizard').should.equal(0);
        });

        it('Spock', function () {
            rockPaperScissorsLizardSpock('Spock', 'Spock').should.equal(0);
        });
    });

    describe('a winning', function () {
        it('scissors cut paper', function () {
            rockPaperScissorsLizardSpock('scissors', 'paper').should.equal(1);
        });

        it('paper covers rock', function () {
            rockPaperScissorsLizardSpock('paper', 'rock').should.equal(1);
        });

        it('rock crushes lizard', function () {
            rockPaperScissorsLizardSpock('rock', 'lizard').should.equal(1);
        });

        it('lizard poisons Spock', function () {
            rockPaperScissorsLizardSpock('lizard', 'Spock').should.equal(1);
        });

        it('Spock smashes scissors', function () {
            rockPaperScissorsLizardSpock('Spock', 'scissors').should.equal(1);
        });

        it('scissors decapitates lizard', function () {
            rockPaperScissorsLizardSpock('scissors', 'lizard').should.equal(1);
        });

        it('lizard eats paper', function () {
            rockPaperScissorsLizardSpock('lizard', 'paper').should.equal(1);
        });

        it('paper disproves Spock', function () {
            rockPaperScissorsLizardSpock('paper', 'Spock').should.equal(1);
        });

        it('Spock vaporizes rock', function () {
            rockPaperScissorsLizardSpock('Spock', 'rock').should.equal(1);
        });

        it('rock crushes scissors', function () {
            rockPaperScissorsLizardSpock('rock', 'scissors').should.equal(1);
        });
    });

    describe('b winning', function () {
        it('scissors cut paper', function () {
            rockPaperScissorsLizardSpock('paper', 'scissors').should.equal(-1);
        });

        it('paper covers rock', function () {
            rockPaperScissorsLizardSpock('rock', 'paper').should.equal(-1);
        });

        it('rock crushes lizard', function () {
            rockPaperScissorsLizardSpock('lizard', 'rock').should.equal(-1);
        });

        it('lizard poisons Spock', function () {
            rockPaperScissorsLizardSpock('Spock', 'lizard').should.equal(-1);
        });

        it('Spock smashes scissors', function () {
            rockPaperScissorsLizardSpock('scissors', 'Spock').should.equal(-1);
        });

        it('scissors decapitates lizard', function () {
            rockPaperScissorsLizardSpock('lizard', 'scissors').should.equal(-1);
        });

        it('lizard eats paper', function () {
            rockPaperScissorsLizardSpock('paper', 'lizard').should.equal(-1);
        });

        it('paper disproves Spock', function () {
            rockPaperScissorsLizardSpock('Spock', 'paper').should.equal(-1);
        });

        it('Spock vaporizes rock', function () {
            rockPaperScissorsLizardSpock('rock', 'Spock').should.equal(-1);
        });

        it('rock crushes scissors', function () {
            rockPaperScissorsLizardSpock('scissors', 'rock').should.equal(-1);
        });
    });
});
