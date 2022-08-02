/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/move-zeroes/
 */
 var moveZeroes = function(nums) {
    let i = 0;
    for(let num of nums) {
        if(num !== 0) nums[i++] = num; 
    }
    while(i < nums.length) {
        nums[i] = 0;
        i++;
    }
    return nums ;
};