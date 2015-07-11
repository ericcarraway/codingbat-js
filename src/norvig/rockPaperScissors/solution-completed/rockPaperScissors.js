function rockPaperScissors(a, b) {
    if (a === b) {
        return 0;
    }
    if ((a === 'rock'     && b === 'scissors') ||
        (a === 'paper'    && b === 'rock') ||
        (a === 'scissors' && b === 'paper')) {
        return 1;
    }
    return -1;
}
