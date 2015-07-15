function makeChocolate(small, big, goal) {
    if(goal % 5 > small) {
        return -1;
    }
    if(goal > big * 5 + small) {
        return -1;
    }
    if(goal - big * 5 <= 0) {
        return goal % 5;
    }
    return goal - big * 5;
}
