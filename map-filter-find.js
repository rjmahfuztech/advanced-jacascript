// simple way..to creat a square..
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
for(let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// Using a map....to create a square by using a outside function...
const numbers = [3, 4, 5, 6, 7, 8];
function square(element){
    return element * element;
}
const result = numbers.map(square)
console.log(result);

// using function inside a map...
const numbers = [3, 4, 5, 6, 7, 8];
const result = numbers.map(function(element){
    return element * element;
})
console.log(result);

// Using arrow function...
const numbers = [3, 4, 5, 6, 7, 8];
const square = element => element * element;
const result = numbers.map(square);
console.log(result);

// very simple way..in a map...using arrow function..
const numbers = [3, 4, 5, 6, 7, 8];
const result = numbers.map( x => x * x);
console.log(result);

// Using filter....
const numbers = [3, 4, 5, 6, 7, 8];
const bigger = numbers.filter( x => x > 5);
console.log(bigger);

// Using find....special...version by filter..
const numbers = [3, 4, 5, 6, 7, 8];
const finder = numbers.find( x => x > 5);
console.log(finder);