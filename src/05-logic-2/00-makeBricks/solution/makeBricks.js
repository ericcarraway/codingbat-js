// We want to make a row of bricks that is goal inches long.
// We have a number of small bricks (1 inch each)
// and big bricks (5 inches each).
// Return true if it is possible to make the goal
// by choosing from the given bricks.
// This is a little harder than it looks
// and can be done without any loops.

function makeBricks(small, big, goal) {
    var minSmalls, pseudoBigs;

    // not enough bricks
    if (small + big * 5 < goal) {
        return false;
    }

    // exact number of bricks
    if (small + big * 5 === goal) {
        return true;
    }

    // not enough one-inch-bricks
    minSmalls = goal % 5;
    if (small < minSmalls) {
        return false;
    }

    // refactor this

    // repurpose leftover one-inch-bricks
    pseudoBigs = (small - minSmalls) / 5;
    return goal <= ((big + pseudoBigs) * 5) + minSmalls;
}


}

// Run unit tests by viewing index.html
