module.exports = function (a, b) {
    var defeaters = {
        rock: ['paper', 'Spock'],
        paper: ['scissors', 'lizard'],
        scissors: ['rock', 'Spock'],
        lizard: ['scissors', 'rock'],
        Spock: ['lizard', 'paper']
    };

    // or a is first or second defeater of b
    if (a === defeaters[b][0] || a === defeaters[b][1]) {
        return 1; // player A wins
    }

    // if b is the first or second defeater of a
    if (b === defeaters[a][0] || b === defeaters[a][1]) {
        return -1; // player B wins
    }

    // tie
    return 0;
};
