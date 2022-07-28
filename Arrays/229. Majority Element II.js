/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/majority-element-ii/
 */
var majorityElement = function(nums) {
    let map = [];
    let freq = nums.length / 3;
    let result = [];
    for(let num of nums) {
        !map[num] ? map[num] = 1 : map[num]++;
        if(map[num] > freq) result.push(num);
    }
    return [...new Set(result)];
};