QUnit.test("stringTimes('Hi', 2) should return 'HiHi'", function(assert) {
    assert.equal(stringTimes('Hi', 2), 'HiHi', 'Passed!');
});

QUnit.test("stringTimes('Hi', 3) should return 'HiHiHi'", function(assert) {
    assert.equal(stringTimes('Hi', 3), 'HiHiHi', 'Passed!');
});

QUnit.test("stringTimes('Hi', 1) should return 'Hi'", function(assert) {
    assert.equal(stringTimes('Hi', 1), 'Hi', 'Passed!');
});

QUnit.test("stringTimes('Hi', 0) should return ''", function(assert) {
    assert.equal(stringTimes('Hi', 0), '', 'Passed!');
});

QUnit.test("stringTimes('Hi', 5) should return 'HiHiHiHiHi'", function(assert) {
    assert.equal(stringTimes('Hi', 5), 'HiHiHiHiHi', 'Passed!');
});

QUnit.test("stringTimes('Oh Boy!', 2) should return 'Oh Boy!Oh Boy!'", function(assert) {
    assert.equal(stringTimes('Oh Boy!', 2), 'Oh Boy!Oh Boy!', 'Passed!');
});

QUnit.test("stringTimes('x', 4) should return 'xxxx'", function(assert) {
    assert.equal(stringTimes('x', 4), 'xxxx', 'Passed!');
});

QUnit.test("stringTimes('', 4) should return ''", function(assert) {
    assert.equal(stringTimes('', 4), '', 'Passed!');
});

QUnit.test("stringTimes('code', 2) should return 'codecode'", function(assert) {
    assert.equal(stringTimes('code', 2),'codecode', 'Passed!');
});

QUnit.test("stringTimes('code', 3) should return 'codecodecode'", function(assert) {
    assert.equal(stringTimes('code', 3), 'codecodecode', 'Passed!');
});
