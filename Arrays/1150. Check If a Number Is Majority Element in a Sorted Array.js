/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/check-if-a-number-is-majority-element-in-a-sorted-array
 */
 var isMajorityElement = function(nums, target) {
    let maj = nums.length / 2;
    let map = [];
    for(let num of nums) {
        !map[num] ? map[num] = 1 : map[num]++;        
    }
    return map[target] > maj;
};