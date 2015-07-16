QUnit.test('nearHundred(93) should return true', function(assert) {
    assert.equal(nearHundred(93), true, 'Passed!');
});

QUnit.test('nearHundred(90) should return true', function(assert) {
    assert.equal(nearHundred(90), true, 'Passed!');
});

QUnit.test('nearHundred(89) should return false', function(assert) {
    assert.equal(nearHundred(89), false, 'Passed!');
});

QUnit.test('nearHundred(110) should return true', function(assert) {
    assert.equal(nearHundred(110), true, 'Passed!');
});

QUnit.test('nearHundred(111) should return false', function(assert) {
    assert.equal(nearHundred(111), false, 'Passed!');
});

QUnit.test('nearHundred(121) should return false', function(assert) {
    assert.equal(nearHundred(121), false, 'Passed!');
});

QUnit.test('nearHundred(0) should return false', function(assert) {
    assert.equal(nearHundred(0), false, 'Passed!');
});

QUnit.test('nearHundred(5) should return false', function(assert) {
    assert.equal(nearHundred(5), false, 'Passed!');
});

QUnit.test('nearHundred(191) should return true', function(assert) {
    assert.equal(nearHundred(191), true, 'Passed!');
});

QUnit.test('nearHundred(189) should return false', function(assert) {
    assert.equal(nearHundred(189), false, 'Passed!');
});

QUnit.test('nearHundred(190) should return true', function(assert) {
    assert.equal(nearHundred(190), true, 'Passed!');
});

QUnit.test('nearHundred(200) should return true', function(assert) {
    assert.equal(nearHundred(200), true, 'Passed!');
});

QUnit.test('nearHundred(210) should return true', function(assert) {
    assert.equal(nearHundred(210), true, 'Passed!');
});

QUnit.test('nearHundred(211) should return false', function(assert) {
    assert.equal(nearHundred(211), false, 'Passed!');
});

QUnit.test('nearHundred(290) should return false', function(assert) {
    assert.equal(nearHundred(290), false, 'Passed!');
});
