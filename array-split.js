// Slice...
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const copy = numbers.slice(3, 6);
console.log(copy);
console.log(numbers);

// Splice...
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const cut = numbers.splice(2, 5);
console.log(cut);
console.log(numbers);

// more splice..you can add num.. inside it..
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const cut = numbers.splice(2, 5, 50,30);
console.log(cut);
console.log(numbers);


// Join...
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13];
const adjust = numbers.join('-');
console.log(adjust);