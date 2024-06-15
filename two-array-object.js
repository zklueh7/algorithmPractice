function twoArrayObject(arr1, arr2) {
    let obj = {};

    for (let i=0; i<arr1.length; i++) {
        obj[arr1[i]] = arr2[i] ? arr2[i] : null;
        // if (arr2[i]) {
        //     obj[arr1[i]] = arr2[i];
        // }
        // else {
        //     obj[arr1[i]] = null;
        // }
    }

    return obj;
}

module.exports = twoArrayObject;