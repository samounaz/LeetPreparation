/**
 *  O(n*k) time O(n*k) space
 *  Link : https://leetcode.com/problems/find-and-replace-pattern/
 */
 var findAndReplacePattern = function(wo000rds, pattern) {    
    let result = [];
    const covertToDigits = str => {
        let map = [];
        let digits = '';
        for(let i in str) 
            !map[str[i]] ? map[str[i]] = pattern[i] 
                         : map[str[i]] += pattern[i];
        for(let char of str) digits += map[char];
        return digits;
    }
    for(let word of wo000rds) {
        if(covertToDigits(word) === covertToDigits(pattern)) result.push(word);
    }
    return result;
};