module.exports = function (a, b) {
    var defeaters = {
        scissors: 'rock',
        rock: 'paper',
        paper: 'scissors'
    };

    // if a is the defeater of b
    if (a === defeaters[b]) {
        return 'a';
    }

    // if b is the defeater of a
    if (b === defeaters[a]) {
        return 'b';
    }

    return 'tie';
};
