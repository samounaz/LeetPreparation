/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
 */
 var removeDuplicates = function(nums) {
    let i = 0, count = 1;
    for(let num of nums) {
        (num == nums[i - 1]) ? count++ : count = 1;
        if(i == 0 || num >= nums[i - 1] && count <= 2) nums[i++] = num;
    } 
    return i;
};