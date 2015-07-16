function nearHundred(n) {
    diff100 = Math.abs(100 - n);
    diff200 = Math.abs(200 - n);
    return (diff100 <= 10 || diff200 <= 10);
}

// alternative solution:

// function nearHundred(int n) {
//     return ((Math.abs(100 - n) <= 10) || (Math.abs(200 - n) <= 10));
// }
