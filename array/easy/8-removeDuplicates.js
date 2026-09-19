// LeetCode 26 — Remove Duplicates from Sorted Array

// Question:
// Remove duplicates in-place and return
// the number of unique elements.

// Example:
// Input:[1,1,2]
// Output:2 , Array:[1,2,_]

function removeDuplicates(nums) {
    if (nums.length === 0 )
        return 0;
    let i=0;
    for(j=1;j<nums.length;j++){
        if(nums[i]!=nums[j]){
            i++;
            nums[i]=nums[j];
        }
    }
    return i+1;
}
const nums = [1,1,2];
const k = removeDuplicates(nums);

console.log(k);               // 2
console.log(nums);            // [1,2,2]
console.log(nums.slice(0,k)); // [1,2]

// Whenever you see: sorted array, remove duplicates, in-place
// Two Pointers (Slow/Fast)
// left  -> unique position
// right -> scanning position