QUnit.test('sleepIn(false, false) should return true', function(assert) {
  assert.equal(sleepIn(false, false), true, 'Passed!');
});

QUnit.test('sleepIn(true, false) should return false', function(assert) {
  assert.equal(sleepIn(true, false), false, 'Passed!');
});

QUnit.test('sleepIn(false, true) should return true', function(assert) {
  assert.equal(sleepIn(false, true), true, 'Passed!');
});

QUnit.test('sleepIn(true, true) should return true', function(assert) {
  assert.equal(sleepIn(true, true), true, 'Passed!');
});
