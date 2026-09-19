// LeetCode 125 — Valid Palindrome

// Question:
// Determine whether a string is a palindrome,
// considering only alphanumeric characters.

// Example:
// Input: "A man, a plan, a canal: Panama"
// Output: true

function isPalindrome(s) {
    
    //console.log(s);
    // Remove non-alphanumeric characters and lowercase the string  
    const string = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    //console.log(string); 
    //Convert to an array of characters
    const charArray = string.split('');
    //console.log(charArray); 
    let left = 0;
    let right = charArray.length - 1;
    while (left < right) {
       
        if (charArray[left] !== charArray[right]) {
            return false;
        }   
        else{
        left++;
        right--;
        }
    }   
    return true;
}

console.log(isPalindrome("A man, a plan a canal: Panama")); // true


