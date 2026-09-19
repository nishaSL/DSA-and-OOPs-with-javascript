//frequency pattern
//Input: [1, 2, 2, 3, 1, 2]
// Output frequency:
// 1 → 2
// 2 → 3
// 3 → 1

function frequencyCount(arr) {
    let map = new Map();

    for (let num of arr) {
        // map.set(num, (map.get(num) || 0) + 1);
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    return map;
}

console.log(frequencyCount([1, 2, 2, 3, 1, 2]));