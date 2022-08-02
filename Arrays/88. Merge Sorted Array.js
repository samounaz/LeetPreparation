/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/merge-sorted-array/
 */
var merge = function(nums1, m, nums2, n) {
    let idx = m + n - 1, idx1 = m - 1, idx2 = n - 1;
    while(idx2 >= 0) {
        if(nums1[idx1] > nums2[idx2]) {
            nums1[idx--] = nums1[idx1--];
        } else {
            nums1[idx--] = nums2[idx2--];
        }
    }
    return nums1;
};
