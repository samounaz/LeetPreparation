/**
 *  O(n + m) time O(n + m) space
 *  Link : https://leetcode.com/problems/count-common-words-with-one-occurrence/
 */
 var countWords = function(words1, words2) {
    let result = [];
    let map = {};
    for(let word of words1) !map[word] ? map[word] = 1 : map[word] = -1;
    for(let word of words2) (map[word] == 1) ? map[word] = 2 : map[word] = -1;
    let words = words1.length < words2.length ? words1 : words2;
    for(let char of words) {
        if(map[char] == 2) result.push(char);
    }
    return result.length;
};