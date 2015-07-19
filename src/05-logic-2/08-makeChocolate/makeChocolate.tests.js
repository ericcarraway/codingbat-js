QUnit.test('makeChocolate(4, 1, 9) should return 4', function(assert) {
  assert.equal(makeChocolate(4, 1, 9), 4);
});

QUnit.test('makeChocolate(4, 1, 10) should return -1', function(assert) {
  assert.equal(makeChocolate(4, 1, 10), -1);
});

QUnit.test('makeChocolate(4, 1, 7) should return 2', function(assert) {
  assert.equal(makeChocolate(4, 1, 7), 2);
});

QUnit.test('makeChocolate(6, 2, 7) should return 2', function(assert) {
  assert.equal(makeChocolate(6, 2, 7), 2);
});

QUnit.test('makeChocolate(4, 1, 5) should return 0', function(assert) {
  assert.equal(makeChocolate(4, 1, 5), 0);
});

QUnit.test('makeChocolate(4, 1, 4) should return 4', function(assert) {
  assert.equal(makeChocolate(4, 1, 4), 4);
});

QUnit.test('makeChocolate(5, 4, 9) should return 4', function(assert) {
  assert.equal(makeChocolate(5, 4, 9), 4);
});

QUnit.test('makeChocolate(9, 3, 18) should return 3', function(assert) {
  assert.equal(makeChocolate(9, 3, 18), 3);
});

QUnit.test('makeChocolate(3, 1, 9) should return -1	', function(assert) {
  assert.equal(makeChocolate(3, 1, 9), -1);
});

QUnit.test('makeChocolate(1, 2, 7) should return -1	', function(assert) {
  assert.equal(makeChocolate(1, 2, 7), -1);
});

QUnit.test('makeChocolate(1, 2, 6) should return 1', function(assert) {
  assert.equal(makeChocolate(1, 2, 6), 1);
});

QUnit.test('makeChocolate(1, 2, 5) should return 0', function(assert) {
  assert.equal(makeChocolate(1, 2, 5), 0);
});

QUnit.test('makeChocolate(6, 1, 10) should return 5', function(assert) {
  assert.equal(makeChocolate(6, 1, 10), 5);
});

QUnit.test('makeChocolate(6, 1, 11) should return 6', function(assert) {
  assert.equal(makeChocolate(6, 1, 11), 6);
});

QUnit.test('makeChocolate(6, 1, 12) should return -1', function(assert) {
  assert.equal(makeChocolate(6, 1, 12), -1);
});

QUnit.test('makeChocolate(6, 1, 13) should return -1', function(assert) {
  assert.equal(makeChocolate(6, 1, 13), -1);
});

QUnit.test('makeChocolate(6, 2, 10) should return 0', function(assert) {
  assert.equal(makeChocolate(6, 2, 10), 0);
});

QUnit.test('makeChocolate(6, 2, 11) should return 1', function(assert) {
  assert.equal(makeChocolate(6, 2, 11), 1);
});

QUnit.test('makeChocolate(6, 2, 12) should return 2', function(assert) {
  assert.equal(makeChocolate(6, 2, 12), 2);
});

QUnit.test('makeChocolate(60, 100, 550) should return 50', function(assert) {
  assert.equal(makeChocolate(60, 100, 550), 50);
});

QUnit.test('makeChocolate(1000, 1000000, 5000006) should return 6', function(assert) {
  assert.equal(makeChocolate(1000, 1000000, 5000006), 6);
});

QUnit.test('makeChocolate(7, 1, 12) should return 7', function(assert) {
  assert.equal(makeChocolate(7, 1, 12), 7);
});

QUnit.test('makeChocolate(7, 1, 13) should return -1', function(assert) {
  assert.equal(makeChocolate(7, 1, 13), -1);
});

QUnit.test('makeChocolate(7, 2, 13) should return 3', function(assert) {
  assert.equal(makeChocolate(7, 2, 13), 3);
});
