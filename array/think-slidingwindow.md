
---

# 3️⃣ Can Sliding Window Help?

## Used when:

* Contiguous subarray
* Substring
* Fixed window size
* Variable window size
* Maximum/Minimum in a window

---

## Trigger Words

```text
subarray
substring
contiguous
window
length k
at most k
longest
smallest
maximum
minimum
```

> **Rule #1:** If the problem says **subarray** or **substring**, your first thought should be:
>
> **Can I use a Sliding Window?**

---

# Why Sliding Window?

Brute force often looks like:

```js
for(let i = 0; i < n; i++)
{
    for(let j = i; j < n; j++)
    {
        // calculate something
    }
}
```

Time:

```text
O(n²)
```

Instead of recalculating everything, **reuse the previous window**.

Example:

```
Window Size = 3

[1 2 3] 4 5
```

Next window isn't:

```
Calculate 2+3+4 from scratch ❌
```

Instead:

```
Old Sum = 1+2+3

New Sum

= Old Sum
- 1
+ 4

✅ O(1)
```

---

# Two Types of Sliding Window

## 1️⃣ Fixed Size Window

Window size never changes.

Examples:

* Maximum Average Subarray I (LC 643)
* Maximum Sum Subarray of Size K
* Find All Anagrams in a String (LC 438)

Pattern:

```text
Window size = k

Grow

↓

When size > k

Shrink
```

---

### Generic Template

```javascript
let left = 0;
let sum = 0;

for(let right = 0; right < nums.length; right++)
{
    sum += nums[right];

    if(right - left + 1 > k)
    {
        sum -= nums[left];
        left++;
    }

    if(right - left + 1 == k)
    {
        // process window
    }
}
```

---

## 2️⃣ Variable Size Window

Window grows and shrinks depending on a condition.

Examples:

* Longest Substring Without Repeating Characters (LC 3)
* Minimum Size Subarray Sum (LC 209)
* Fruit Into Baskets (LC 904)
* Longest Repeating Character Replacement (LC 424)

Pattern:

```text
Expand

↓

Condition breaks

↓

Shrink

↓

Continue
```

---

### Generic Template

```javascript
let left = 0;

for(let right = 0; right < nums.length; right++)
{
    // expand window

    while(condition is invalid)
    {
        // shrink window
        left++;
    }

    // update answer
}
```

---

# Recognition Chart

## Fixed Window

Trigger Words

```text
window size k
exactly k
length k
fixed size
```

Examples:

| LeetCode | Problem                                                 |
| -------- | ------------------------------------------------------- |
| 643      | Maximum Average Subarray I                              |
| 1456     | Maximum Number of Vowels in a Substring of Given Length |
| 438      | Find All Anagrams in a String                           |

---

## Variable Window

Trigger Words

```text
longest
smallest
at most k
at least k
without repeating
```

Examples:

| LeetCode | Problem                                        |
| -------- | ---------------------------------------------- |
| 3        | Longest Substring Without Repeating Characters |
| 209      | Minimum Size Subarray Sum                      |
| 904      | Fruit Into Baskets                             |
| 424      | Longest Repeating Character Replacement        |

---

# Sliding Window vs Two Pointers

Many beginners confuse these.

## Two Pointers

Purpose:

```text
Compare elements
```

Example:

```text
L         R
```

Problems:

* Two Sum II
* Container With Most Water
* Remove Duplicates

---

## Sliding Window

Purpose:

```text
Maintain a continuous range
```

Example:

```text
L----Window----R
```

Problems:

* Longest Substring
* Maximum Sum Subarray
* Minimum Window

---

# Mental Shortcut 🧠

```text
Pair?
→ Two Pointers

Sorted?
→ Two Pointers

Subarray?
→ Sliding Window

Substring?
→ Sliding Window

Window Size K?
→ Fixed Sliding Window

Longest/Smallest?
→ Variable Sliding Window
```

---

# DSA Notebook Entry

| Trigger                   | Pattern                 | Reference Problem |
| ------------------------- | ----------------------- | ----------------- |
| Duplicate                 | HashSet                 | LC 217            |
| Frequency                 | Dictionary              | LC 242            |
| Pair in Sorted Array      | Two Pointers            | LC 167            |
| Remove Duplicates         | Two Pointers            | LC 26             |
| Move Zeroes               | Two Pointers            | LC 283            |
| Container With Most Water | Two Pointers            | LC 11             |
| 3Sum                      | Sort + Two Pointers     | LC 15             |
| Window Size K             | Fixed Sliding Window    | LC 643            |
| Longest Substring         | Variable Sliding Window | LC 3              |

---

## Recommended Learning Order

Don't jump to the hardest sliding window problems. Learn them in this order:

### Fixed Window

1. **LeetCode 643** – Maximum Average Subarray I ⭐ (Best first problem)
2. **LeetCode 1456** – Maximum Number of Vowels in a Substring of Given Length
3. **LeetCode 438** – Find All Anagrams in a String

### Variable Window

4. **LeetCode 3** – Longest Substring Without Repeating Characters ⭐⭐⭐ (Most important)
5. **LeetCode 209** – Minimum Size Subarray Sum
6. **LeetCode 904** – Fruit Into Baskets
7. **LeetCode 424** – Longest Repeating Character Replacement
8. **LeetCode 76** – Minimum Window Substring (advanced)

