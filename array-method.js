const products = [
    { name: 'Mobile', price: 15000, color: 'Black', brand: "Samsung" },
    { name: 'Laptop', price: 55000, color: 'golden', brand: "Hp" },
    { name: 'Camera', price: 22000, color: 'Black', brand: "Canon" },
    { name: 'Watch', price: 3000, color: 'Yellow', brand: "Casio" },
    { name: 'Keyboard', price: 800, color: 'Black', brand: "A4Tech" },
];


const ProductName = 'name';
const allProducts = products.map(product => product.color)
// console.log(allProducts);

const findProduct = products.filter((product) =>product.name.includes('a'));
// console.log(findProduct);