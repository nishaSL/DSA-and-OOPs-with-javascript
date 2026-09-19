// LeetCode 283 - Move Zeroes.
// Question: Move all 0's to the end while maintaining relative order.

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

 function MovesZeros(nums) {
    let i=0; 
    for(let j=0;j<nums.length;j++){
        if(nums[j]!==0){
            let temp=nums[i];
            nums[i]=nums[j];
            nums[j]=temp;
            i++;
        }
    }
    return nums;
 }
 console.log(MovesZeros([0,1,0,3,12])); // [1,3,12,0,0]

//  The standard two-pointer solution is preferred because the interviewer can immediately see:
// r scans
// l writes

// which is a common pattern used in:
// LeetCode 26 (Remove Duplicates)
// LeetCode 27 (Remove Element)
// LeetCode 283 (Move Zeroes)