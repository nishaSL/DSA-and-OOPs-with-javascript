// LeetCode 11 — Container With Most Water

// Question: Find two lines that hold, the maximum amount of water.

// Example:
// Input:[1,8,6,2,5,4,8,3,7]
// Output:49

// Why Two Pointers?
// Area depends on:
// min(height[left], height[right])× width
// Move smaller height.

function maxArea(height) {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;
    while (left < right) {
        let cur;
        let start= height[left];
        let end= height[right];
        if(start<end){
            cur= start*(right-left);
            left++;
        }
        else{
            cur= end*(right-left);
            right--;
        }

        if(cur>maxArea){
            maxArea=cur;
        }
    }
    return maxArea;
}