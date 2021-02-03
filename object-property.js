const students = [
    {id: 31, name: 'Mahfuz'},
    {id: 41, name: 'Zahid'},
    {id: 51, name: 'Alam'},
    {id: 61, name: 'Rahim'}
];
// const studentNames = [];
// for(let i = 0; i < students.length; i++){
//     const element = students[i];
//     studentNames.push(element.name);
// }
// console.log(studentNames);

function studentNames(names){
    const output = names.name;
    return output; 
}
const result = students.map(studentNames);
console.log(result);

// using arrow function and map...
const ids = students.map( i => i.id);
console.log(ids);

const ids2 = students.filter( x => x.id > 41);
console.log(ids2);