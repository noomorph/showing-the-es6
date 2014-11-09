/*global readline, print*/

function* indexesOf(substr, str){
    var i = -1;

    while((i = str.indexOf(substr, i+1)) >= 0) {
        yield i;
    }
}

function* split(str, delim) {
    var prevIndex = 0,
        word;

    for (var index of indexesOf(delim, str)) {
        word = str.substr(prevIndex, index - prevIndex);

        if (word !== delim) {
            yield word;
        }

        prevIndex = index + 1;
    }

    word = str.substr(prevIndex);
    if (word !== delim) {
        yield word;
    }
}

for (var word of split(readline(), ' ')) {
    console.log(word);
}
