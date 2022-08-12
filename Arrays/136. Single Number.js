/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/single-number/
 */
var singleNumber = function(nums) {
    let val = 0;
    for(let num of nums) {
        val ^= num;
    }
    return val;
};