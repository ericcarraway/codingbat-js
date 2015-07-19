QUnit.test("stringTimes('Hi', 2) should return 'HiHi'", function(assert) {
    assert.equal(stringTimes('Hi', 2), 'HiHi');
});

QUnit.test("stringTimes('Hi', 3) should return 'HiHiHi'", function(assert) {
    assert.equal(stringTimes('Hi', 3), 'HiHiHi');
});

QUnit.test("stringTimes('Hi', 1) should return 'Hi'", function(assert) {
    assert.equal(stringTimes('Hi', 1), 'Hi');
});

QUnit.test("stringTimes('Hi', 0) should return ''", function(assert) {
    assert.equal(stringTimes('Hi', 0), '');
});

QUnit.test("stringTimes('Hi', 5) should return 'HiHiHiHiHi'", function(assert) {
    assert.equal(stringTimes('Hi', 5), 'HiHiHiHiHi');
});

QUnit.test("stringTimes('Oh Boy!', 2) should return 'Oh Boy!Oh Boy!'", function(assert) {
    assert.equal(stringTimes('Oh Boy!', 2), 'Oh Boy!Oh Boy!');
});

QUnit.test("stringTimes('x', 4) should return 'xxxx'", function(assert) {
    assert.equal(stringTimes('x', 4), 'xxxx');
});

QUnit.test("stringTimes('', 4) should return ''", function(assert) {
    assert.equal(stringTimes('', 4), '');
});

QUnit.test("stringTimes('code', 2) should return 'codecode'", function(assert) {
    assert.equal(stringTimes('code', 2),'codecode');
});

QUnit.test("stringTimes('code', 3) should return 'codecodecode'", function(assert) {
    assert.equal(stringTimes('code', 3), 'codecodecode');
});
