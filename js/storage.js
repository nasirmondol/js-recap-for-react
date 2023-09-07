const addToLocalStorage = () => {
    const idFiled = document.getElementById('product-name');
    const id = idFiled.value;
    const productField = document.getElementById('product-price');
    const price = productField.value;


    if (id, price) {
        localStorage.setItem(id, price);

        const array = [2, 4, 8, 10, 13, 15, 30, 48];
        const person = {
            name: 'vajon',
            age: 68,
            job: 'No job'
        }
        localStorage.setItem('numberArray',JSON.stringify(array));
        localStorage.setItem('person_details',JSON.stringify(person));
    }

    idFiled.value = '';
    productField.value = '';
}