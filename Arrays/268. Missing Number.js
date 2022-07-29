/**
 *  O(1) time O(1) space
 *  Link : https://leetcode.com/problems/missing-number/
 */
 var missingNumber = function(nums) {
    let n = nums.length;
    let total = n * (n + 1) / 2
    let sum = nums.reduce((cum, cur) => cum + cur, 0);
    return total - sum;
}

/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/missing-number/
 */
 var missingNumber = function(nums) {
    let map = [];
    for(let num of nums) map[num] = 1;
    let i = 0;
    while(map[i]) i++;
    return i;
};