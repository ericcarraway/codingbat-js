var rockPaperScissors = require('./rockPaperScissorsLizardSpock.js');
var expect = require('chai').expect;

describe.only('rockPaperScissorsLizardSpock', function () {
    describe('smoke tests', function () {
        it('should exist', function () {
            expect(rockPaperScissors).to.exist;
        });

        it('should be a function', function () {
            expect(rockPaperScissors).to.be.a('function');
        });
    });

    describe('tie conditions', function () {
        it('rock, rock', function () {
            expect(rockPaperScissors('rock', 'rock')).to.equal('tie');
        });

        it('paper, paper', function () {
            expect(rockPaperScissors('paper', 'paper')).to.equal('tie');
        });

        it('scissors, scissors', function () {
            expect(rockPaperScissors('scissors', 'scissors')).to.equal('tie');
        });

        it('lizard, lizard', function () {
            expect(rockPaperScissors('lizard', 'lizard')).to.equal('tie');
        });

        it('spock, spock', function () {
            expect(rockPaperScissors('spock', 'spock')).to.equal('tie');
        });
    });

    describe('player a wins', function () {
        describe('when player a chooses rock', function () {
            it('and player b chooses scissors', function () {
                expect(rockPaperScissors('rock', 'scissors')).to.equal('a');
            });

            it('and player b chooses lizard', function () {
                expect(rockPaperScissors('rock', 'lizard')).to.equal('a');
            });
        });

        describe('when player a chooses paper', function () {
            it('and player b chooses rock', function () {
                expect(rockPaperScissors('paper', 'rock')).to.equal('a');
            });

            it('and player b chooses spock', function () {
                expect(rockPaperScissors('paper', 'spock')).to.equal('a');
            });
        });

        describe('when player a chooses scissors', function () {
            it('and player b chooses paper', function () {
                expect(rockPaperScissors('scissors', 'paper')).to.equal('a');
            });

            it('and player b chooses lizard', function () {
                expect(rockPaperScissors('scissors', 'lizard')).to.equal('a');
            });
        });

        it('should return a on lizard, spock', function () {
            expect(rockPaperScissors('lizard', 'spock')).to.equal('a');
        });

        it('should return a on lizard, paper', function () {
            expect(rockPaperScissors('lizard', 'paper')).to.equal('a');
        });

        it('should return a on spock, scissors', function () {
            expect(rockPaperScissors('spock', 'scissors')).to.equal('a');
        });

        it('should return a on spock, rock', function () {
            expect(rockPaperScissors('spock', 'rock')).to.equal('a');
        });
    });

    describe('player b winning', function () {
        it('should return b on rock, paper', function () {
            expect(rockPaperScissors('rock', 'paper')).to.equal('b');
        });

        it('should return b on spock, paper', function () {
            expect(rockPaperScissors('spock', 'paper')).to.equal('b');
        });

        it('should return b on paper, scissors', function () {
            expect(rockPaperScissors('paper', 'scissors')).to.equal('b');
        });

        it('should return b on lizard, scissors', function () {
            expect(rockPaperScissors('lizard', 'scissors')).to.equal('b');
        });

        it('should return b on scissors, rock', function () {
            expect(rockPaperScissors('scissors', 'rock')).to.equal('b');
        });

        it('should return b on lizard, rock', function () {
            expect(rockPaperScissors('lizard', 'rock')).to.equal('b');
        });

        it('should return b on spock, lizard', function () {
            expect(rockPaperScissors('spock', 'lizard')).to.equal('b');
        });

        it('should return b on paper, lizard', function () {
            expect(rockPaperScissors('paper', 'lizard')).to.equal('b');
        });

        it('should return b on scissors, spock', function () {
            expect(rockPaperScissors('scissors', 'spock')).to.equal('b');
        });

        it('should return b on rock, spock', function () {
            expect(rockPaperScissors('rock', 'spock')).to.equal('b');
        });
    });
});
