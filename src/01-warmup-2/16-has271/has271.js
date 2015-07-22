function has271(nums) {
  var val;
  // Iterate < length-2, so can use i+1 and i+2 in the loop.
  // Return true immediately when seeing 271.
  for (i=0; i < (nums.length-2); i++) {
    val = nums[i];
    if (nums[i+1] === (val + 5) &&
      Math.abs(nums[i+2] - (val-1)) <= 2)  return true;
  }

  // If we get here ... none found.
  return false;
}
