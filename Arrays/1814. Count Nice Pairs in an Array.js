/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/count-nice-pairs-in-an-array/
 */
//num[i] - rev(num[i]) = num[j] - rev(num[j])
var countNicePairs = function(nums) {
    let count = 0;
    let mod = 1e9 + 7;
    let hash = {};
    
    const rev = num => parseInt(num.toString().split('').reverse().join(''));
    
    for (let i = 0; i < nums.length; i++) {
        let diff = nums[i] - rev(nums[i]);
        if(!hash[diff]) hash[diff] = 0;
        count += hash[diff];
        hash[diff]++;
    }
    
    return count % mod;
};