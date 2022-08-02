/**
 *  O(n+m) time O(n+m) space
 *  Link : https://leetcode.com/problems/interval-list-intersections/
 */
 var intervalIntersection = function(A, B) {
    let Ai = 0, Bi = 0;
    let res = [];
    while(Ai < A.length && Bi < B.length) {
        let maxStart = Math.max(A[Ai][0], B[Bi][0]);
        let minEnd = Math.min(A[Ai][1], B[Bi][1]);
        if(maxStart <= minEnd) res.push([maxStart, minEnd]);
        if(A[Ai][1] < B[Bi][1]) Ai++;
        else Bi++;
    }
    return res;
};