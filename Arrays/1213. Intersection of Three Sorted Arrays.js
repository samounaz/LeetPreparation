/**
 *  O(n+m+p) time O(n+m+p) space
 *  Link : https://leetcode.com/problems/intersection-of-three-sorted-arrays/
 */
 var arraysIntersection = function(arr1, arr2, arr3) {
    let result = [];
    let map = [];
    for(let num of arr1) !map[num] ? map[num] = 1 : map[num]++;
    for(let num of arr2) !map[num] ? map[num] = 1 : map[num]++;
    for(let num of arr3) !map[num] ? map[num] = 1 : map[num]++;
    
    for(let num of map.keys()) {
        if(map[num] == 3) result.push(num);
    }
    return result;
};