QUnit.test('nearHundred(93) should return true', function(assert) {
    assert.equal(nearHundred(93), true);
});

QUnit.test('nearHundred(90) should return true', function(assert) {
    assert.equal(nearHundred(90), true);
});

QUnit.test('nearHundred(89) should return false', function(assert) {
    assert.equal(nearHundred(89), false);
});

QUnit.test('nearHundred(110) should return true', function(assert) {
    assert.equal(nearHundred(110), true);
});

QUnit.test('nearHundred(111) should return false', function(assert) {
    assert.equal(nearHundred(111), false);
});

QUnit.test('nearHundred(121) should return false', function(assert) {
    assert.equal(nearHundred(121), false);
});

QUnit.test('nearHundred(0) should return false', function(assert) {
    assert.equal(nearHundred(0), false);
});

QUnit.test('nearHundred(5) should return false', function(assert) {
    assert.equal(nearHundred(5), false);
});

QUnit.test('nearHundred(191) should return true', function(assert) {
    assert.equal(nearHundred(191), true);
});

QUnit.test('nearHundred(189) should return false', function(assert) {
    assert.equal(nearHundred(189), false);
});

QUnit.test('nearHundred(190) should return true', function(assert) {
    assert.equal(nearHundred(190), true);
});

QUnit.test('nearHundred(200) should return true', function(assert) {
    assert.equal(nearHundred(200), true);
});

QUnit.test('nearHundred(210) should return true', function(assert) {
    assert.equal(nearHundred(210), true);
});

QUnit.test('nearHundred(211) should return false', function(assert) {
    assert.equal(nearHundred(211), false);
});

QUnit.test('nearHundred(290) should return false', function(assert) {
    assert.equal(nearHundred(290), false);
});
