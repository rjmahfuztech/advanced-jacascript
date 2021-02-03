// Break...how to use break..
const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 5){
        break;
    }
    console.log(numbers[i]);
}

// Continue...how to use continue..
const numbers = [1,2,3,4,-5,6,-7,8,-9,-10,11,12];
for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < 0){
        continue;
    }
    console.log(numbers[i]);
}