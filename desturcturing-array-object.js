// const array = [10, 44, 78, 30, 11, 89, 76];
// const [a, b, c, d, e, f, g] = array;
// console.log(a);
function array(num1, num2) {
    const numArray = [num1, num2];
    return numArray;
}
const result = array(12, 34);
// console.log(result);

const person = {
    name: 'Rafid',
    age: 13,
    id: 1,
    speciality: {
        roll: 2,
        height: 43,
        girl_friend: 'no',
        cycle: {
            name: 'Phonix',
            price: 10000,
            brand: 'vivix'
        }
    },
    marks: [89, 70, 87, 67, 81],
};

// const {name, price, brand} = person.speciality.cycle;
// console.log(brand);

const keys = Object.keys(person);
// console.log(keys);
const values = Object.values(person);
// console.log(values);

const products = [
    { name: 'Mobile', price: 15000, color: 'Black', brand: "Samsung" },
    { name: 'Laptop', price: 55000, color: 'golden', brand: "Hp" },
    { name: 'Camera', price: 22000, color: 'Black', brand: "Canon" },
    { name: 'Watch', price: 3000, color: 'Yellow', brand: "Casio" },
    { name: 'Keyboard', price: 800, color: 'Black', brand: "A4Tech" },
];

const newProduct = { name: 't-shirt', price: 1300, color: 'orange', brand: 'Top-Ten' };

const newProductArray = [...products, newProduct];
// console.log(newProductArray);


// create a new array without a Element
const brandNewArray = newProductArray.filter((product) => product.price !== 55000);
console.log(brandNewArray);

