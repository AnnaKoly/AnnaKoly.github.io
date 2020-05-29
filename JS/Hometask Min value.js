function min(arr) {
    var _min = arr [0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < _min) {
            _min = arr[i];
        }
    }
    return _min;
}
