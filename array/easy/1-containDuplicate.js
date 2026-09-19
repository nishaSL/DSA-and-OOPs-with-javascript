//leetcode -217 
//Duplicate Pattern
// Given an array: [1,2,3,1]
// Return:
// true if any duplicate exists
// false otherwise

function containsDuplicate(nums) {
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }

        set.add(num);
    }

    return false;
}

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3])); // true

// We only need:
// "Has this number appeared before?"
// We do not need index, count, or metadata.
// So Set is enough 