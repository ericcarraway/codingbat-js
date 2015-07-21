QUnit.test('firstLast6([1, 2, 6]) should return true', function(assert) {
  assert.equal(firstLast6([1, 2, 6]), true);
});

QUnit.test('firstLast6([6, 1, 2, 3]) should return true', function(assert) {
  assert.equal(firstLast6([6, 1, 2, 3]), true);
});

QUnit.test('firstLast6([13, 6, 1, 2, 3]) should return false', function(assert) {
  assert.equal(firstLast6([13, 6, 1, 2, 3]), false);
});

QUnit.test('firstLast6([13, 6, 1, 2, 3]) should return false', function(assert) {
  assert.equal(firstLast6([13, 6, 1, 2, 3]), false);
});

QUnit.test('firstLast6([13, 6, 1, 2, 6]) should return true', function(assert) {
  assert.equal(firstLast6([13, 6, 1, 2, 6]), true);
});

QUnit.test('firstLast6([3, 2, 1]) should return false', function(assert) {
  assert.equal(firstLast6([3, 2, 1]), false);
});

QUnit.test('firstLast6([3, 6, 1]) should return false', function(assert) {
  assert.equal(firstLast6([3, 6, 1]), false);
});

QUnit.test('firstLast6([3, 6]) should return true', function(assert) {
  assert.equal(firstLast6([3, 6]), true);
});

QUnit.test('firstLast6([6]) should return true', function(assert) {
  assert.equal(firstLast6([6]), true);
});

QUnit.test('firstLast6([3]) should return false', function(assert) {
  assert.equal(firstLast6([3]), false);
});

QUnit.test('firstLast6([5, 6]) should return true', function(assert) {
  assert.equal(firstLast6([5, 6]), true);
});

QUnit.test('firstLast6([5, 5]) should return false', function(assert) {
  assert.equal(firstLast6([5, 5]), false);
});

QUnit.test('firstLast6([1, 2, 3, 4, 6]) should return true', function(assert) {
  assert.equal(firstLast6([1, 2, 3, 4, 6]), true);
});

QUnit.test('firstLast6([1, 2, 3, 4]) should return false', function(assert) {
  assert.equal(firstLast6([1, 2, 3, 4]), false);
});
