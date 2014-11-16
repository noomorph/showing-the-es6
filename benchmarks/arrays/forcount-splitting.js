function calculateAverageWordLength(str) {
    var len = 0, count = 0,
        avg, i;
        
    for (i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count += 1;
        } else {
            len += 1;
        }
    }
    return len / count;
}
