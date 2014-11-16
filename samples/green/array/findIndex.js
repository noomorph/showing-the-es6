var ascending = [1, 2, 3, 1, 4, 5];

ascending.findIndex(function (value, index, array) {
    return index > 0 && value < array[index - 1];
}); // 3, ascending[3] === 1

// if not found, returns -1
