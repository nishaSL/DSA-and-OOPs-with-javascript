// LeetCode 18 – 4Sum

// Given an integer array nums and an integer target, return all unique quadruplets:
// [a, b, c, d]
// a + b + c + d == target

// Example
// Input: nums = [1,0,-1,0,-2,2] , target = 0

// Output:
// [
// [-2,-1,1,2],
// [-2,0,0,2],
// [-1,0,0,1]
// ]

var fourSum = function(nums, target) {

    nums.sort((a, b) => a - b);

    const result = [];
    const n = nums.length;

    for (let i = 0; i < n - 3; i++) {

        // Skip duplicate first number
        if (i > 0 && nums[i] === nums[i - 1])
            continue;

        for (let j = i + 1; j < n - 2; j++) {

            // Skip duplicate second number
            if (j > i + 1 && nums[j] === nums[j - 1])
                continue;

            let left = j + 1;
            let right = n - 1;

            while (left < right) {

                const sum = nums[i] + nums[j] + nums[left] + nums[right];

                if (sum === target) {

                    result.push([
                        nums[i],
                        nums[j],
                        nums[left],
                        nums[right]
                    ]);

                    left++;
                    right--;

                    // Skip duplicate left
                    while (left < right && nums[left] === nums[left - 1])
                        left++;

                    // Skip duplicate right
                    while (left < right && nums[right] === nums[right + 1])
                        right--;

                }
                else if (sum < target) {
                    left++;
                }
                else {
                    right--;
                }
            }
        }
    }

    return result;
};

console.log(fourSum([1,0,-1,0,-2,2], 0)); // [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]