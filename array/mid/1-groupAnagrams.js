//leetcode-49 //duplicate with string
// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Example 2:
// Input: strs = [""]
// Output: [[""]] 

// Example 3:
// Input: strs = ["a"]
// Output: [["a"]]

function GroupAnagrams(strs) {
    let map = new Map();
    for (let str of strs) {
        let key = str.split('').sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    return Array.from(map.values());
}
console.log(GroupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["bat"],["nat","tan"],["ate","eat","tea"]]
console.log(GroupAnagrams([""]));

//Array.from creates a new, shallow-copied Array instance from an iterable or array-like object.