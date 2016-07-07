QUnit.test("rockPaperScissors('rock', 'rock') should return 0", function (assert) {
    assert.equal(rockPaperScissors('rock', 'rock'), 0);
});

QUnit.test("rockPaperScissors('rock', 'paper') should return -1", function (assert) {
    assert.equal(rockPaperScissors('rock', 'paper'), -1);
});

QUnit.test("rockPaperScissors('rock', 'scissors') should return 1", function (assert) {
    assert.equal(rockPaperScissors('rock', 'scissors'), 1);
});

QUnit.test("rockPaperScissors('paper', 'rock') should return 1", function (assert) {
    assert.equal(rockPaperScissors('paper', 'rock'), 1);
});

QUnit.test("rockPaperScissors('paper', 'paper') should return 0", function (assert) {
    assert.equal(rockPaperScissors('paper', 'paper'), 0);
});

QUnit.test("rockPaperScissors('paper', 'scissors') should return -1", function (assert) {
    assert.equal(rockPaperScissors('paper', 'scissors'), -1);
});

QUnit.test("rockPaperScissors('scissors', 'rock') should return -1", function (assert) {
    assert.equal(rockPaperScissors('scissors', 'rock'), -1);
});

QUnit.test("rockPaperScissors('scissors', 'paper') should return 1", function (assert) {
    assert.equal(rockPaperScissors('scissors', 'paper'), 1);
});

QUnit.test("rockPaperScissors('scissors', 'scissors') should return 0", function (assert) {
    assert.equal(rockPaperScissors('scissors', 'scissors'), 0);
});
