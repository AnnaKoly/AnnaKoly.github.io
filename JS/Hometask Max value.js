function max(arr) {
    var _max = arr [0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > _max) {
            _max = arr[i];
        }
    }
    return _max;
}
