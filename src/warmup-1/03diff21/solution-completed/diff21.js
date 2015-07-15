function diff21(n) {
  var diff = n - 21;
  if (diff < 0) {
    diff = diff * -1;
  }
  if (n > 21) {
    return 2 * diff;
  }
  return diff;
}

//  another solution:
// public int diff21(int n) {
//   if (n <= 21) {
//     return 21 - n;
//   } else {
//     return (n - 21) * 2;
//   }
// }
