/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/valid-anagram/
 */
var isAnagram = function(s, t) {
    const transform = str => str.split('').sort().join('');
    return transform(s) === transform(t);
};