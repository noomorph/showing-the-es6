function calculateAverageWordLength(str) {
    var words = str.split(' '),
        wordsCount = words.length;

    var sumLength = words.reduce(function (len, word) {
        return len + word.length;
    }, 0);

    return sumLength / wordsCount;
}
