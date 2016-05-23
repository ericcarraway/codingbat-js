/* global describe, it */

(function () {
    'use strict';

    describe('outer context wrapper', function () {
        describe('inner context wrapper', function () {
            it('should run a test', function () {
                expect('example').to.equal('example');
            });

            it('should run another test', function () {
                expect(1).to.equal(1);
            });
        });
    });
}());
