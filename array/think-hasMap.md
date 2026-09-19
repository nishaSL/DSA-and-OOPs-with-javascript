**1️⃣** Can hashing help? (Dictionary / HashSet)

##  Used when:
duplicates
frequency
lookup
seen before
complement exists

##  trigger words:
duplicate
pair exists
frequency count
first repeating
common elements

## Examples:
Two Sum
Contains Duplicate
Duplicate within K distance
Frequency count

 1) **duplicate**

*If asking: duplicate,already seen, repeated value
Think immediately: HashSet
*

set vs map
Use Set when you only care whether a value exists.
Use Map when you need extra information about that value.

✅ Rule to remember 🧠
*Use Set when: existence only, unique values, duplicate detection
Use Map when: count needed,index needed,frequency needed,extra info needed*

### Example for Reference/clarity:
1-containDuplicate.js -easy
2-conatainDuplicate2.js -easy 
3-twoSum.js -easy
1-groupAnagrams.js -mid

2) **frequency**
*
Frequency means: Count how many times each element appears
This immediately suggests: Use Map / Dictionary
Because now we need: value → count
not just existence.
*
### Trigger words:
count occurrences
most frequent
first unique
majority element
anagram
duplicates count

### Example for Reference/clarity:
4-frequencyCount.js -easy
5-majorityElement.js -easy
6-vaildAngaram.js -easy
2-majorityElement.js -mid
3-topKfreqElement.js -mid
1-firstUniqueChar.js -string -easy


3) **Loopup**
*
Instead of repeatedly searching:
"Can I find this value quickly?"*

we store information so lookup becomes O(1).
That storage can be:
Set
Map
Dictionary
fixed array

### Whenever question says:
find quickly
already seen
exists
duplicate
complement
previous occurrence

Think: Lookup

### Example for Reference/clarity:
Two Sum
Contains Duplicate
Contains Duplicate II
Valid Anagram
First Unique Character in a String
