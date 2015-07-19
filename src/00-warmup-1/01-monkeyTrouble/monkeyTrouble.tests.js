QUnit.test('monkeyTrouble(true, true) should return true', function(assert) {
    assert.equal(monkeyTrouble(true, true), true);
});

QUnit.test('monkeyTrouble(false, false) should return true', function(assert) {
    assert.equal(monkeyTrouble(false, false), true);
});

QUnit.test('monkeyTrouble(true, false) should return false', function(assert) {
    assert.equal(monkeyTrouble(true, false), false);
});

QUnit.test('monkeyTrouble(false, true) should return false', function(assert) {
    assert.equal(monkeyTrouble(false, true), false);
});
