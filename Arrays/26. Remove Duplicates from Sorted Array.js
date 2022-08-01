/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/remove-duplicates-from-sorted-array/
 */
 var removeDuplicates = function(nums) {
    let i = 0;
    for(let num of nums) {
        if(i == 0 || num > nums[i - 1]) nums[i++] = num;
    }
    return i;
};
