var rockPaperScissors = require('./rockPaperScissors.js');
var expect = require('chai').expect;

describe.only('rockPaperScissors', function () {
    describe('smoke tests', function () {
        it('should exist', function () {
            expect(rockPaperScissors).to.exist;
        });

        it('should be a function', function () {
            expect(rockPaperScissors).to.be.a('function');
        });
    });

    describe('tie conditions', function () {
        it('should return "tie" on "rock", "rock"', function () {
            expect(rockPaperScissors('rock', 'rock')).to.equal('tie');
        });

        it('should return "tie" on "paper", "paper"', function () {
            expect(rockPaperScissors('paper', 'paper')).to.equal('tie');
        });

        it('should return "tie" on "scissors", "scissors"', function () {
            expect(rockPaperScissors('scissors', 'scissors')).to.equal('tie');
        });
    });

    describe('player "a" winning', function () {
        it('should return "a" on "rock", "scissors"', function () {
            expect(rockPaperScissors('rock', 'scissors')).to.equal('a');
        });

        it('should return "a" on "paper", "rock"', function () {
            expect(rockPaperScissors('paper', 'rock')).to.equal('a');
        });

        it('should return "a" on "scissors", "paper"', function () {
            expect(rockPaperScissors('scissors', 'paper')).to.equal('a');
        });
    });

    describe('player "b" winning', function () {
        it('should return "b" on "rock", "paper"', function () {
            expect(rockPaperScissors('rock', 'paper')).to.equal('b');
        });

        it('should return "b" on "paper", "scissors"', function () {
            expect(rockPaperScissors('paper', 'scissors')).to.equal('b');
        });

        it('should return "b" on "scissors", "rock"', function () {
            expect(rockPaperScissors('scissors', 'rock')).to.equal('b');
        });
    });
});
