/**
 *  O(n+m) time O(n+m) space
 *  Link : https://leetcode.com/problems/find-the-difference-of-two-arrays/
 */
 var findDifference = function(nums1, nums2) {
    let res1 = [];
    let res2 = [];
    let map = [];
    let distNums1 = [...new Set(nums1)];
    let distNums2 = [...new Set(nums2)];
    
    for(let num of distNums1) !map[num] ? map[num] = 1 : map[num]++;
    for(let num of distNums2) !map[num] ? map[num] = 1 : map[num]++;
    
    for(let num of distNums1) {
       if(map[num] == 1) res1.push(num);
    }
    for(let num of distNums2) {
       if(map[num] == 1) res2.push(num);
    }
    return [res1, res2];
};