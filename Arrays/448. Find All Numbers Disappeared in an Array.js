/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
 var findDisappearedNumbers = function(nums) {
    let map = new Array(nums.length + 1).fill(0);
    let result = [];
    for(let num of nums) map[num] = 1;
    for(let i = 1; i < map.length; i++) {
        if(!map[i]) result.push(i);
    }
    return result;
};
/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/
 */
var findDisappearedNumbers = function(nums) {
    let result = [];
    for(let i = 0; i < nums.length; i++) {
        let id = Math.abs(nums[i]) - 1;
        nums[id] = Math.abs(nums[id]) * -1;
    }
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] > 0) result.push(i + 1);
    }
    return result;
};