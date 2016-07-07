QUnit.test('diff21(19) should return 2', function (assert) {
    assert.equal(diff21(19), 2);
});

QUnit.test('diff21(10) should return 11', function (assert) {
    assert.equal(diff21(10), 11);
});

QUnit.test('diff21(21) should return 0', function (assert) {
    assert.equal(diff21(21), 0);
});

QUnit.test('diff21(22) should return 2', function (assert) {
    assert.equal(diff21(22), 2);
});

QUnit.test('diff21(25) should return 8', function (assert) {
    assert.equal(diff21(25), 8);
});

QUnit.test('diff21(30) should return 18', function (assert) {
    assert.equal(diff21(30), 18);
});

QUnit.test('diff21(0) should return 21', function (assert) {
    assert.equal(diff21(0), 21);
});

QUnit.test('diff21(1) should return 20', function (assert) {
    assert.equal(diff21(1), 20);
});

QUnit.test('diff21(2) should return 19', function (assert) {
    assert.equal(diff21(2), 19);
});

QUnit.test('diff21(-1) should return 22', function (assert) {
    assert.equal(diff21(-1), 22);
});

QUnit.test('diff21(-2) should return 23', function (assert) {
    assert.equal(diff21(-2), 23);
});

QUnit.test('diff21(50) should return 58', function (assert) {
    assert.equal(diff21(50), 58);
});
