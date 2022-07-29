/**
 *  O(n + m) time O(n + m) space
 *  Link : https://leetcode.com/problems/intersection-of-two-arrays/
 */
 var intersection = function(nums1, nums2) {
    let map = [];
    let set = new Set();
    let nums, arr;
    nums1.length < nums2.length ? (nums = nums1, arr = nums2) : (nums = nums2, arr = nums1);
    for(let num of nums) map[num] = 1;
    for(let num of arr) {
        if(map[num]) set.add(num);
    }
    return [...set];
};