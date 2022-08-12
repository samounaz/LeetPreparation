/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/find-the-duplicate-number/
 */
var findDuplicate = function(nums) {
    for(let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if(nums[index] < 0) return index + 1;
        nums[index] = -nums[index];
    }
    return -1;
};