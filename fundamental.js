// Variable
const myName = 'Nasir';
let season = 'Rainy';
season = 'Winter';

// Condition
// if(myName === 'Nasir'){
//     console.log('Its true');
// }
// else if(myName === 'naasir'){
//     console.log('Its spelling miss');
// }
// else if(myName === 'nassir'){
//     console.log('It"s also spelling miss.');
// }
// else{
//     console.log('Abobe the name is not my name!!');
// }

const array = [10, 30, 50, 70, 98, 222, 56, 78];
let total = 0;
for (let i = 0; i < array.length; i++) {
    const arrayNumber = array[i];
    total += arrayNumber
}
// return total;
// console.log(total);


const student  ={
    name: 'Rahim',
    age: 43,
    job: 'Dev'
};

const stName = 'name';
console.log(student.name);
console.log(student['name']);
console.log(student[stName]);
