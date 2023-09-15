// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.

// Pseudo code:

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisByThree", () => {
    it("decides if number inside object is divisible by three", () => {
        const object1 = { number: 15 }
        // Expected output: "15 is divisible by three"
        const object2 = { number: 0 }
        // Expected output: "0 is divisible by three"
        const object3 = { number: -7 }
        // Expected output: "-7 is not divisible by three"
        expect(divisByThree(object1)).toEqual("15 is divisible by three")
        expect(divisByThree(object2)).toEqual("0 is divisible by three")
        expect(divisByThree(object3)).toEqual("-7 is not divisible by three")
    })
})
// const divisByThree = (object) => {
//     if (typeof object === 'object' && object.hasOwnProperty('number')) {
//         const  = object.number % 3 === 0;}
//     return `${object} is divisible by three.`
//     else {
//             return `${object} is not divisible by three.`
//         }
//     }

// }


// b) Create the function that makes the test pass.

// Pseudo code: 
/*input: object that contains a number property
output: a string
process: use a conditional to determine if the number is divisibe by three and use string interpolation to output the answer
*/

const divisByThree = (object) => {
    if (typeof object === 'object' && object.hasOwnProperty('number')) {
        const isDivisible = object.number % 3 === 0;
        return `${object.number} is ${isDivisible ? 'divisible' : 'not divisible'} by three`;
    } else {
        return `${object} is not a valid object with a 'number' property`;
    }
}


// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("arrayCap", () => {
    it("takes an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(arrayCaps(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(arrayCaps(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})


// b) Create the function that makes the test pass.

/* Pseudo code:
input: an array of words
output: an array with all words capitalized
process:use .map to iterate accross the array and use the built in method to capitalize each word
*/

function arrayCaps(words) {
    return words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
}


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// a) Create a test with expect statements for each of the variables provided.
describe ("firstVowel", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        const vowelTester1 = "learn"
        // Expected output: 1
        const vowelTester2 = "academy"
        // Expected output: 0
        const vowelTester3 = "challenges"
        // Expected output: 2
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
})
})


// b) Create the function that makes the test pass.

// Pseudo code:
/*input: a string
output: cretae a set containing all lowercase and uppercase vowels. Create an index variable to keep track of the character's position in the string. Iterate throug each character of the input string. Check if each character is on the vowels set. If a vowel is found, return the current index.
*/
function firstVowel(str) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
  
    let index = 0;
    for (const char of str) {
      if (vowels.has(char)) {
        return index;
      }
      index++;
    }
    return -1;
  }