// Given a string and a non-negative int n,
// return a larger string that is n copies
// of the original string.

function stringTimes(str, n) {
    var returnStr = '';
    var i = 0;
    while (i < n) {
        returnStr += str;
        i++;
    }
    return returnStr;
}

// Run unit tests by viewing index.html
