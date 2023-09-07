const array = [12, 4, 7, 9, 40];
// const person = {
//     name: 'Arman Malik',
//     age: 34,
//     job: 'Teacher',
//     height: 6,
//     favFood: ['Biranai', 'cow meet', 'Pitza']
// }
// const detailsAboutMe = `My name is ${person.name} and my age is ${person['age']} and my fav number is ${array[0]} and my favourite food is ${person.favFood[0]}`;
// console.log(detailsAboutMe);

const myNewArray = [...array];
myNewArray.push(2000, 4000)
// console.log(myNewArray);

const myAwesomeArray = []
// myAwesomeArray.forEach(x => console.log(x * x));


// const name = 'Hero';
// const age = 34;
// const person = { name, age };
// console.log(person);

const adventurer = { name: 'Alice', cat: { name: 'Lucy' } };
const ratName = adventurer?.rat?.name;
// console.log(ratName);

// let person = null;
// console.log(person ? person : "person is null");

const obj = {a:1};
console.log(Object.keys(obj).length===0);

