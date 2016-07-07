QUnit.test('makeBricks(3, 1, 8) should return true',
    function (assert) {
        assert.equal(makeBricks(3, 1, 8), true);
    });

QUnit.test('makeBricks(3, 1, 9) should return false',
    function (assert) {
        assert.equal(makeBricks(3, 1, 9), false);
    });

QUnit.test('makeBricks(3, 2, 10) should return true',
    function (assert) {
        assert.equal(makeBricks(3, 2, 10), true);
    });

QUnit.test('makeBricks(3, 2, 8) should return true',
    function (assert) {
        assert.equal(makeBricks(3, 2, 8), true);
    });

QUnit.test('makeBricks(3, 2, 9) should return false',
    function (assert) {
        assert.equal(makeBricks(3, 2, 9), false);
    });

QUnit.test('makeBricks(6, 1, 11) should return true',
    function (assert) {
        assert.equal(makeBricks(6, 1, 11), true);
    });

QUnit.test('makeBricks(6, 0, 11) should return false',
    function (assert) {
        assert.equal(makeBricks(6, 0, 11), false);
    });

QUnit.test('makeBricks(1, 4, 11) should return true',
    function (assert) {
        assert.equal(makeBricks(1, 4, 11), true);
    });

QUnit.test('makeBricks(0, 3, 10) should return true',
    function (assert) {
        assert.equal(makeBricks(0, 3, 10), true);
    });

QUnit.test('makeBricks(1, 4, 12) should return false',
    function (assert) {
        assert.equal(makeBricks(1, 4, 12), false);
    });

QUnit.test('makeBricks(3, 1, 7) should return true',
    function (assert) {
        assert.equal(makeBricks(3, 1, 7), true);
    });

QUnit.test('makeBricks(1, 1, 7) should return false',
    function (assert) {
        assert.equal(makeBricks(1, 1, 7), false);
    });

QUnit.test('makeBricks(2, 1, 7) should return true',
    function (assert) {
        assert.equal(makeBricks(2, 1, 7), true);
    });

QUnit.test('makeBricks(7, 1, 11) should return true',
    function (assert) {
        assert.equal(makeBricks(7, 1, 11), true);
    });

QUnit.test('makeBricks(7, 1, 8) should return true',
    function (assert) {
        assert.equal(makeBricks(7, 1, 8), true);
    });

QUnit.test('makeBricks(7, 1, 13) should return false',
    function (assert) {
        assert.equal(makeBricks(7, 1, 13), false);
    });

QUnit.test('makeBricks(43, 1, 46) should return true',
    function (assert) {
        assert.equal(makeBricks(43, 1, 46), true);
    });

QUnit.test('makeBricks(40, 1, 46) should return false',
    function (assert) {
        assert.equal(makeBricks(40, 1, 46), false);
    });

QUnit.test('makeBricks(40, 2, 47) should return true',
    function (assert) {
        assert.equal(makeBricks(40, 2, 47), true);
    });

QUnit.test('makeBricks(40, 2, 50) should return true',
    function (assert) {
        assert.equal(makeBricks(40, 2, 50), true);
    });

QUnit.test('makeBricks(40, 2, 52) should return false',
    function (assert) {
        assert.equal(makeBricks(40, 2, 52), false);
    });

QUnit.test('makeBricks(22, 2, 33) should return false',
    function (assert) {
        assert.equal(makeBricks(22, 2, 33), false);
    });

QUnit.test('makeBricks(0, 2, 10) should return true',
    function (assert) {
        assert.equal(makeBricks(0, 2, 10), true);
    });

QUnit.test('makeBricks(1000000, 1000, 1000100) should return true',
    function (assert) {
        assert.equal(makeBricks(1000000, 1000, 1000100), true);
    });

QUnit.test('makeBricks(2, 1000000, 100003) should return false',
    function (assert) {
        assert.equal(makeBricks(2, 1000000, 100003), false);
    });

QUnit.test('makeBricks(20, 0, 19) should return true',
    function (assert) {
        assert.equal(makeBricks(20, 0, 19), true);
    });

QUnit.test('makeBricks(20, 0, 21) should return false',
    function (assert) {
        assert.equal(makeBricks(20, 0, 21), false);
    });

QUnit.test('makeBricks(20, 4, 51) should return false',
    function (assert) {
        assert.equal(makeBricks(20, 4, 51), false);
    });

QUnit.test('makeBricks(20, 4, 39) should return true',
    function (assert) {
        assert.equal(makeBricks(20, 4, 39), true);
    });
