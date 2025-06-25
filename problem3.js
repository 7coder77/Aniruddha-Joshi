// Problem-2: With a single integer as the input, generate the following until a = x [series of numbers as shown in below examples]
 
//   Output: (examples)
//     1) input a = 1, then output : 1
//     2) input a = 2, then output : 1, 3
//     3) input a = 3, then output : 1, 3, 5
//     4) input a = 4, then output : 1, 3, 5, 7
//     .
//     .
//     5) input a = x, then output : 1, 3, 5, 7, .......

// Approach:
// i created a function that takes a number as input inside the function i initialized an array to store the output
// then i analyzed the length of the series and noticed a pattern for even numbers the length is a - 1
// i used a for loop to generate and push the required elements into the array
// finally i joined the array elements using a comma and logged the result to the console

function generateSeries(a) {
    let series = [];
    let length = a;
    if (a % 2 == 0) {
        length = a - 1;
    }
    for (let i = 0; i < length; i++) {
        series.push(i * 2 + 1);
    }
    console.log(series.join(","));
}
let a = 2;
generateSeries(a);
a = 3;
generateSeries(a);
a = 4;
generateSeries(a);
a = 5;
generateSeries(a);
a = 6;
generateSeries(a);