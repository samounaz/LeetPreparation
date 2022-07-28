/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/defuse-the-bomb/
 */
var decrypt = function(code, k) {
    let n = code.length; 
    let arr = new Array(code.length).fill(0);
    if(k > 0) {
       for(let i = 0; i < n; i++) {
           for(let j = 1; j <= k; j++) arr[i] += code[(i + j) % n];
       }
    } else {  
       for(let i = 0; i < n; i++) {
           for(let j = -1; j >= k; j--) arr[i] += code[(i + j + n) % n];
       } 
    }
    
    return arr; 
 };