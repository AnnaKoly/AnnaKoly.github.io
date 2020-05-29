function multNeg(arr) {
    var mult = 1;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            mult *= arr[i];
        }
    }
    return mult;
}

