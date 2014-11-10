function useLet() {
    if (true) {
        let x = 5;
    }

    return x; /*!*/
}

useLet();
// ReferenceError:
// x is not defined
