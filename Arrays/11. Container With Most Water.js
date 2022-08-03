/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/container-with-most-water/
 */
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
     let _maxArea = 0;
     while(left <= right) {
         let width = right - left;
         let _height = height[height[left] < height[right] ? left++ : right--];
         _maxArea = Math.max(_maxArea, width * _height);
     }
     return _maxArea;
 };