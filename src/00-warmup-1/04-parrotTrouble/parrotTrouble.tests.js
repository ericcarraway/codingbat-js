QUnit.test('parrotTrouble(true, 6) should return true', function(assert) {
    assert.equal(parrotTrouble(true, 6), true);
});

QUnit.test('parrotTrouble(true, 7) should return false', function(assert) {
    assert.equal(parrotTrouble(true, 7), false);
});

QUnit.test('parrotTrouble(false, 6) should return false', function(assert) {
    assert.equal(parrotTrouble(false, 6), false);
});

QUnit.test('parrotTrouble(true, 21) should return true', function(assert) {
    assert.equal(parrotTrouble(true, 21), true);
});

QUnit.test('parrotTrouble(false, 21) should return false', function(assert) {
    assert.equal(parrotTrouble(false, 21), false);
});

QUnit.test('parrotTrouble(false, 20) should return false', function(assert) {
    assert.equal(parrotTrouble(false, 20), false);
});

QUnit.test('parrotTrouble(true, 23) should return true', function(assert) {
    assert.equal(parrotTrouble(true, 23), true);
});

QUnit.test('parrotTrouble(false, 23) should return false', function(assert) {
    assert.equal(parrotTrouble(false, 23), false);
});

QUnit.test('parrotTrouble(true, 20) should return false', function(assert) {
    assert.equal(parrotTrouble(true, 20), false);
});

QUnit.test('parrotTrouble(false, 12) should return false', function(assert) {
    assert.equal(parrotTrouble(false, 12), false);
});
