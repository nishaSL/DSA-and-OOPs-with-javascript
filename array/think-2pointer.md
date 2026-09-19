# 2️⃣ Can Two Pointers Help?

### Used when:
Array is sorted
Comparing elements from both ends
Pair sum problems
Removing duplicates
Reversing/traversing efficiently

### Trigger Words
sorted array
pair sum
two numbers
remove duplicates
palindrome
opposite ends
closest pair
container

# When Should You Think Two Pointers?
"Can I solve this by moving pointers instead of using nested loops?"
```js
for(int i = 0; i < n; i++)
{
    for(int j = i + 1; j < n; j++)
    {
     // logic
    }
}
```
```js
while(left < right)
{
    // logic
    left++;
    right--;
}
```

#### Types of Two Pointer Problems

1. Opposite Direction Pointers
##### Used for:
Pair Sum
Palindrome
Container Problems
##### Examples
Two Sum II (Sorted Array)
Valid Palindrome
Container With Most Water

2. Same Direction Pointers
##### Used when:
Remove duplicates
Slow/Fast pointer
Compact array
##### Examples
Remove Duplicates from Sorted Array
Move Zeroes

3. Fast & Slow Pointer
##### Used when:
Linked List cycles
Middle node
Duplicate movement rates
##### Examples:
Linked List Cycle
Middle of Linked List


## Two Pointers vs Hashing

Pair Sum (Unsorted) -> Input:[3,2,4]
Use: Map; Because not sorted.

Pair Sum (Sorted) -> Input:[2,7,11,15]
Use: Two Pointers; Because sorted.

*Sorted Array? → Two Pointers
Need Pair? → Two Pointers
Compare Ends? → Two Pointers
Remove Duplicates? → Two Pointers
Palindrome? → Two Pointers
Not Sorted + Pair Sum? → HashMap*

## Examples
### Easy
Two Sum II
4-twoSumII.js - mid

Valid Palindrome
7-validPalindrome.js- eassy

Remove Duplicates from Sorted Array
8-removeDuplicates.js -eassy 

Move Zeroes
9-MoveZeros.js -easy

Reverse String 


### Medium
Container With Most Water 
5-MaxArea.js -med

3Sum
6-threeSum.js -med

4Sum
8-fourSum.js -med

Sort Colors
7-sortColors.js -med


