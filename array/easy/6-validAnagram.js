//frequency pattern
// Check whether:
// s = "anagram"
// t = "nagaram"
// are anagrams.
// Means same characters with same frequency.

function isAnagram(s, t) {
    if (s.length !== t.length) return false;

    let map = new Map();

    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    for (let ch of t) {
        if (!map.has(ch) || map.get(ch) === 0) {
            return false;
        }

        map.set(ch, map.get(ch) - 1);
    }

    return true;
}

console.log(isAnagram("anagram", "nagaram")); // true

// Build frequency → reduce frequency?
// array[26] optimization