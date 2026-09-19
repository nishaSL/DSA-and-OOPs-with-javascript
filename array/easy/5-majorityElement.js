//leetcode-169 //frequency pattern
// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:
// Input: nums = [3,2,3]
// Output: 3

// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majorityElement(nums) {
    let map = new Map();

    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);

        if (map.get(num) > nums.length / 2) {
            return num;
        }
    }
}

// why Boyer-Moore solves Majority Element without Map (O(1) space)