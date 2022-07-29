/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/contains-duplicate/
 */
var containsDuplicate = function(nums) {
    let arr = [...new Set(nums)];
    return arr.length < nums.length;
};