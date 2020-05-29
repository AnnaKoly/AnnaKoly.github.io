function amountOfPositAndNegat(arr) {
    var pos = 0;
    var neg = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            pos += 1;}

            if (arr[i] < 0) { 
            neg += 1}
        
        }
    
    return {pos, neg}
    }