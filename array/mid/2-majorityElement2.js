//leetcode-229 //frequency
// Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.
// Example 1:
// Input: nums = [3,2,3]
// Output: [3]

// Example 2:
// Input: nums = [1]
// Output: [1]

// Example 3:
// Input: nums = [1,2]
// Output: [1,2]

function majorityElement(nums) {
    let map = new Map();
    let result = [];
    let threshold = Math.floor(nums.length / 3);
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
        if (map.get(num) > threshold && !result.includes(num)) {
            result.push(num);
        }
    }
    return result;
}
console.log(majorityElement([3,2,3])); // [3]
console.log(majorityElement([1])); // [1]
console.log(majorityElement([1,2])); // [1,2]