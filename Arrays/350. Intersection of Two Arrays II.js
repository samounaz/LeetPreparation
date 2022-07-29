/*
 * O(n + m) time O(n + m) space
 */
var intersect = function(nums1, nums2) {
    let result = [];
    let map = [];
    for(let num of nums1) !map[num] ? map[num] = 1 : map[num]++;
    for(let num of nums2) {
        if(map[num]) {
            result.push(num);
            map[num]--;
        }
    }
    return result;
};