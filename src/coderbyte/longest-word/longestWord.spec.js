/* global describe, it */

(function () {
    'use strict';

    describe('longestWord', function () {
        it('should be a function', function () {
            expect(longestWord).to.be.a('function');
        });

        it('"this is an example" => "example"', function () {
            var expected = longestWord('this is an example');
            var actual = 'example';
            expect(actual).to.equal(expected);
        });

        it('"long longer longest" => "longest"', function () {
            var expected = longestWord('long longer longest');
            var actual = 'longest';
            expect(actual).to.equal(expected);
        });


        it('"long longest longer" => "longest"', function () {
            var expected = longestWord('long longest longer');
            var actual = 'longest';
            expect(actual).to.equal(expected);
        });


        it('"longest longer long" => "longest"', function () {
            var expected = longestWord('longest longer long');
            var actual = 'longest';
            expect(actual).to.equal(expected);
        });

        describe('ignore punctiation', function () {
            it('"one abandoned elephant@?$!" => "abandoned"', function () {
                var expected = longestWord('one abandoned elephant@?$!');
                var actual = 'abandoned';
                expect(actual).to.equal(expected);
            });

            it('"quickly arena quickly!!" => "quickly"', function () {
                var expected = longestWord('quickly arena quickly!!');
                var actual = 'quickly';
                expect(actual).to.equal(expected);
            });

            it('"a maximized /:language:/[ else do var!!!!???~" => "quickly"', function () {
                var expected = longestWord('a maximized /:language:/[ else do var!!!!???~');
                var actual = 'maximized';
                expect(actual).to.equal(expected);
            });
        });

        describe('if there is more than one "longest" word, return the first one', function () {
            it('"a be are can one was" => "are"', function () {
                var expected = longestWord('a be are can one was');
                var actual = 'are';
                expect(actual).to.equal(expected);
            });

            it('"be a can are was one" => "can"', function () {
                var expected = longestWord('be a can are was one');
                var actual = 'can';
                expect(actual).to.equal(expected);
            });

            it('"be was are one can a" => "was"', function () {
                var expected = longestWord('be was are one can a');
                var actual = 'was';
                expect(actual).to.equal(expected);
            });
        });

        describe('numbers', function () {
            it('"123456789 98765432" => "123456789"', function () {
                var expected = longestWord('123456789 98765432');
                var actual = '123456789';
                expect(actual).to.equal(expected);
            });
        });
    });
}());

// FOUR  letters:  area, aloe, else, idea, were,
// THREE letters:  one, ate, are, can, was,
// FOUR  letters:  area, aloe, else, idea, were,
// FIVE  letters:  arena, erase, opera, enter, alone,
// SIX   letters:  estate, stereo, enamel, puzzle, jumble,
// SEVEN letters:  quickly, eternal, essence, inertia, abandon,
// EIGHT letters:  research, oratorio, language, favorite, elephant,
// NINE  letters:  maximized, accordian, abandoned, accordian, accordian,
