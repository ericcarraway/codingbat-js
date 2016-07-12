module.exports = function (a, b) {
    var defeaters = {
        rock: ['paper', 'spock'],
        paper: ['scissors', 'lizard'],
        scissors: ['rock', 'spock'],
        lizard: ['scissors', 'rock'],
        spock: ['lizard', 'paper']
    };

    // or a is first or second defeater of b
    if (a === defeaters[b][0] || a === defeaters[b][1]) {
        return 'a';
    }

    // if b is the first or second defeater of a
    if (b === defeaters[a][0] || b === defeaters[a][1]) {
        return 'b';
    }

    return 'tie';
};
