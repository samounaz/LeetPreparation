/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/remove-element/
 */
 var removeElement = function(nums, val) {
    let i = 0;
    for(let num of nums) {
        if(num !== val) nums[i++] = num;
    }
    return i;
};