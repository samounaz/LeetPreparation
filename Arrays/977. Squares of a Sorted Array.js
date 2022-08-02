/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/squares-of-a-sorted-array/
 */
var sortedSquares = function(nums) {
    let l = 0, r = nums.length - 1;
    let i = 2*r;
    while(l <= r) {
        if(nums[l]**2 > nums[r]**2) {
            nums[i--] = nums[l++]**2;
        } else {
            nums[i--] = nums[r--]**2;
        }
    }
    return nums.slice(i+1);
};