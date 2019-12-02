// Part 1

const data = [1, 0, 0, 3,
            1, 1, 2, 3,
            1, 3, 4, 3,
            1, 5, 0, 3,
            2, 1, 9, 19,
            1, 19, 5, 23, 
            2, 6, 23, 27, 
            1, 6, 27, 31,
            2, 31, 9, 35,
            1, 35, 6, 39,
            1, 10, 39, 43,
            2, 9, 43, 47,
            1, 5, 47, 51,
            2, 51, 6, 55,
            1, 5, 55, 59,
            2, 13, 59, 63,
            1, 63, 5, 67,
            2, 67, 13, 71,
            1, 71, 9, 75,
            1, 75, 6, 79,
            2, 79, 6, 83,
            1, 83, 5, 87,
            2, 87, 9, 91,
            2, 9, 91, 95,
            1, 5, 95, 99,
            2, 99, 13, 103,
            1, 103, 5, 107,
            1, 2, 107, 111,
            1, 111, 5, 0,
            99, 2, 14, 0, 0]

const stack = data.split(',').map( el => parseInt(el, 10))
let indexPosition = 0
stack[1] = 12;
stack[2] = 2; 
while(stack[index] !== 99){
    switch(stack[index]){
        case 1: stack[stack[index + 3]] = stack[stack[index + 1]] + stack[stack[index + 2]]; break;
        case 2: stack[stack[index + 3]] = stack[stack[index + 1]] * stack[stack[index + 2]]; break;
    }
    index += 4;
}
console.log(stack[0]);

    


const fs = require("fs").promises;
fs.readFile("inputs/2.txt", "utf-8").then(input => {
    const stack = input.split(",").map(i => parseInt(i, 10));
    let index = 0;
    stack[1] = 12;
    stack[2] = 2;
    while (stack[index] !== 99) {
        switch (stack[index]) {
            case 1: stack[stack[index + 3]] = stack[stack[index + 1]] + stack[stack[index + 2]]; break;
            case 2: stack[stack[index + 3]] = stack[stack[index + 1]] * stack[stack[index + 2]]; break;
        }
        index += 4;
    }
    console.log(stack[0]);
});

// Part 2
