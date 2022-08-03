/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/merge-intervals/
 */
 var merge = function(intervals) {
    if(!intervals) return intervals;
    intervals.sort((a, b) => a[0] - b[0]);
    let prev = intervals[0];
    let res = [prev];
    for(let cur of intervals.slice(1)) {
        if(cur[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], cur[1]);
        } else {
            res.push(cur);
            prev = cur;
        }
    }
    return res;
};