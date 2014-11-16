var iter = [10, 20, 30, 40].entries(),
    step;

while (!(step = iter.next()).done) {
    print(step.value);
}
