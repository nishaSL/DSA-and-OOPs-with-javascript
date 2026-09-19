Whenever brute force uses nested loops on arrays, one of the first questions should be:
Can I trade space for time? 🔁

In this problem:
Brute force: nested loop → O(n²)
Using extra space (Dictionary / HashSet): O(n)

# When you see: nested loops because comparing elements

1️⃣ Can hashing help? (Dictionary / HashSet)

Used when:
duplicates
frequency
lookup
seen before
complement exists

Typical trigger words:
duplicate
pair exists
frequency count
first repeating
common elements

Examples:
Two Sum
Contains Duplicate
Duplicate within K distance
Frequency count

✅ 2️⃣ Can two pointers help?

Used when:
sorted array
pair sum
removing duplicates
opposite direction scan

Examples:
Two Sum sorted
Remove duplicates
Container with most water

✅ 3️⃣ Sliding Window

Used when:
contiguous subarray
substring
fixed window size
max/min in window

Trigger words:
subarray
substring
window size k

Example:
For your duplicate problem, sliding window version:
Keep only k elements in HashSet.

✅ 4️⃣ Prefix Sum

Used when:
sum repeatedly asked
subarray sum
range queries

✅ 5️⃣ Sorting first

Used when:
order not important
grouping duplicates helps

Sometimes:
O(n²) brute force → sort O(n log n)
then solve easier.

✅ Quick Array Optimization Checklist 🧠

Whenever you see brute force nested loop:

Ask:

Are we searching previous values? → HashSet / Dictionary

Sorted? → Two pointers 

Continuous range? → Sliding window 

Sum repeatedly? → Prefix sum 

Nearby elements? → Sliding window / Hashing

Frequency needed? → Map/Dictionary

✅ Easy Memory Trick 🎯
# Compare values globally → HashMap

# Compare nearby values → Sliding Window

# Compare ends → Two Pointers

# Compare sums → Prefix Sum