/**
 *  O(n) time O(n) space
 *  Link : https://leetcode.com/problems/number-of-pairs-of-interchangeable-rectangles/
 */
var interchangeableRectangles = function(rectangles) {
    let counter = 0;
    let map = {};
    for(let [w, h] of rectangles) {
        let ratio = w / h;
        if(map[ratio]) {
            counter += map[ratio];
            map[ratio]++;
        } else {
            map[ratio] = 1;
        }
    }
    return counter;
};