function createPoint(x, y) {
    return { x, y };
}

let {x} = createPoint(3, 4);
let {y} = createPoint(9, 0);
console.log(x, y); // 3 0 
