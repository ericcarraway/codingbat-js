module.exports = function (a, b) {
    // both players play the same thing
    if (a === b) {
        return 'tie';
    }

    // conditions where a wins
    if ((a === 'rock' && b === 'scissors') ||
        (a === 'paper' && b === 'rock') ||
        (a === 'scissors' && b === 'paper')) {
        return 'a';
    }

    // b wins
    return 'b';
};
