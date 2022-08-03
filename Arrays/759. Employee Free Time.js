/**
 *  O(n*m) time O(p) space
 *  Link : https://leetcode.com/problems/employee-free-time/
 */
 var employeeFreeTime = function(schedule) {
    let start = [];
    let end = [];
    for(let employee of schedule) {
        for(let interval of employee) {
            start.push(interval.start);
            end.push(interval.end);
        }
    }
    start.sort((a, b) => a - b);
    end.sort((a, b) => a - b);
    let preEnd = Infinity;
    let freeTime = [];
    for(let i = 0; i < start.length; i++) {
        if(start[i] > preEnd) {
            freeTime.push(new Interval(preEnd, start[i]));
        }
        preEnd = end[i];
    }
    return freeTime;
};