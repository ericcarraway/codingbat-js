QUnit.test('sumDouble(1, 2) should return 3', function(assert) {
    assert.equal(sumDouble(1, 2), 3, 'Passed!');
});

QUnit.test('sumDouble(3, 2) should return 5', function(assert) {
    assert.equal(sumDouble(3, 2), 5, 'Passed!');
});

QUnit.test('sumDouble(2, 2) should return 8', function(assert) {
    assert.equal(sumDouble(2, 2), 8, 'Passed!');
});

QUnit.test('sumDouble(-1, 0) should return -1', function(assert) {
    assert.equal(sumDouble(-1, 0), -1, 'Passed!');
});

QUnit.test('sumDouble(3, 3) should return 12', function(assert) {
    assert.equal(sumDouble(3, 3), 12, 'Passed!');
});

QUnit.test('sumDouble(0, 0) should return 0', function(assert) {
    assert.equal(sumDouble(0, 0), 0, 'Passed!');
});

QUnit.test('sumDouble(0, 1) should return 1', function(assert) {
    assert.equal(sumDouble(0, 1), 1, 'Passed!');
});

QUnit.test('sumDouble(3, 4) should return 7', function(assert) {
    assert.equal(sumDouble(3, 4), 7, 'Passed!');
});
