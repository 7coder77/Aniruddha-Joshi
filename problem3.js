// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
//   (examples)
//   input: [1,2,8,9,12,46,76,82,15,20,30]
//   Output: 
//     {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

// Approach:
// i created a function that takes an array as input, inside the function i initialized an empty object to store the count of divisible numbers,
// then i looped through numbers from 1 to 9 and initialized each key in the object with 0,
// for each of these numbers, i looped through the input array and checked if the element is divisible by the current number,
// if it is divisible, i incremented the corresponding count in the object,
// finally, i logged the resulting object to the console.


function divMap(arr) {
    let nMap = {}
    for (let i = 1; i <= 9; i++) {
        nMap[i] = 0
        for (let j of iparr) {
            if (j % i == 0) {
                nMap[i] = nMap[i] + 1
            }
        }
    }
    console.log(nMap)
}
let iparr = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30]
divMap(iparr)
