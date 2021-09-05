// test methods

// create objects
let boxes = [
    new Box(10, 20, 30, "Silver"),
    new Box(20, 30, 40, "Silver"),
    new Box(10, 20, 30, "Gold"),
];

// calc volume
boxes.forEach(box => {
    console.log(`${box.matherial} has volume ${box.volume()}`);
});

// equal of objects
console.log(`boxes[0] ? boxes[1]: ${boxes[0].equals(boxes[1])}`);
console.log(`boxes[0] ? boxes[2]: ${boxes[0].equals(boxes[2])}`);

