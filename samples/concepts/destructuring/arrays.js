let [x, y] = ['a', 'b']; // x='a', y='b'

[x, y] = [y, x]; // swap values

let [all, year, month, day] =
    ('2999-12-31').
        match(/^(\d\d\d\d)-(\d\d)-(\d\d)$/);
