/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/3sum-closest/
 */
var threeSumClosest = function(nums, target) {
    let closest = Infinity;
    let sum = 0;
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        while(j < k) {
            sum = nums[i] + nums[j] + nums[k];
            if(Math.abs(sum - target) < Math.abs(closest - target)) closest = sum;
            if(sum < target) j++;
            else k--;
        }
    }
    return closest;
};