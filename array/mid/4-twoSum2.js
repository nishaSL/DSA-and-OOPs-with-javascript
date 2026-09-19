// LeetCode 167 — Two Sum II (Input Array Is Sorted)
// Given a 1-indexed sorted array of integers numbers,
// find two numbers such that they add up to target.
// Return their indices.
// Example:
// Input:
// numbers = [2,7,11,15]
// target = 9
// Output:[1,2]

// Why Two Pointers?

// Array is sorted.
// If sum is small → move left.
// If sum is large → move right.

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        const sum = numbers[left] + numbers[right];
        if (sum === target) {
            return [left + 1, right + 1]; // 1-indexed
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return []; // No solution found
}
console.log(twoSum([2,7,11,15], 9)); // [1,2]

//what is different between two sum and two sum 2