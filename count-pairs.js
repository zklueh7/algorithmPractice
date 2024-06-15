function countPairs(arr, num) {
    let count = 0;
    let s = new Set(arr);

    for (let i=0; i<arr.length; i++) {
        s.delete(arr[i]);
        if (s.has(num-arr[i])) {
            count++;
        }
    }
    
    return count;
}

module.exports = countPairs;