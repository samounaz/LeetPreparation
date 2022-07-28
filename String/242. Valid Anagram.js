var isAnagram = function(s, t) {
    const transform = str => str.split('').sort().join('');
    return transform(s) === transform(t);
};