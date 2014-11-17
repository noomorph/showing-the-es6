function calculateAverageWordLength(str) {
    var it = iterateWords(s),
        len = 0, count = 0,
        step;

    while (!(step = it.next()).done) {
        len += step.value.length;
        count += 1;
    }

    return len / count;
}
