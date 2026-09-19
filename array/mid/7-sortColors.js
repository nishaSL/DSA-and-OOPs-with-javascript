// You are given an array containing only:

// 0-red
// 1-white
// 2-blue

// Sort it in-place without using the built-in sort function.

// Example
// Input [2,0,2,1,1,0]
// Output [0,0,1,1,2,2]

var sortColors = function(nums) {

    let low = 0;
    let mid = 0;
    let high = nums.length - 1;

    while(mid <= high)
    {
        if(nums[mid] == 0)
        {
            [nums[low], nums[mid]] =
            [nums[mid], nums[low]];

            low++;
            mid++;
        }

        else if(nums[mid] == 1)
        {
            mid++;
        }

        else
        {
            [nums[mid], nums[high]] =
            [nums[high], nums[mid]];

            high--;
        }
    }
};

const nums = [2,0,2,1,1,0];
sortColors(nums);