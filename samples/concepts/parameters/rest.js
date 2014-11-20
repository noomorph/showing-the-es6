function rest(arg0, ...others) {
    return others;
}

rest(0, 1, 2, 3); // [1, 2, 3]

rest(0); // []
rest(); // []
