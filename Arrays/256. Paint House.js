/**
 *  O(n) time O(1) space
 *  Link : https://leetcode.com/problems/paint-house/
 */
var minCost = function(costs) {
    if(!costs.length) return 0;
    let n = costs.length;
    
    for(let i = 1; i < n; i++) {
        costs[i][0] += Math.min(costs[i - 1][1], costs[i - 1][2]);
        costs[i][1] += Math.min(costs[i - 1][0], costs[i - 1][2]);
        costs[i][2] += Math.min(costs[i - 1][0], costs[i - 1][1]);
    }
    return  Math.min(costs[n - 1][0], costs[n - 1][1], costs[n - 1][2]);
};