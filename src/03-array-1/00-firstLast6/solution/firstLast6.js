// Given an array of numbers,
// return true if 6 appears as either the first or last element in the array.
// The array will be length 1 or more.

function firstLast6(nums) {
    return (nums[0] === 6 || nums[nums.length - 1] === 6);
}

// Run unit tests by viewing index.html
