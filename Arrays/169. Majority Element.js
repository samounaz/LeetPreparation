/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/majority-element/
 */
var majorityElement = function(nums) {
    let half = (nums.length / 2);
    let map = [];
    let max = 0;
    for(let num of nums) {
       !map[num] ? map[num] = 1 : map[num]++;
       if(map[num] >= half && max < map[num])  max = num;
    }
    return max;
};