const rafsanMoney = 94000;
const tomalMoney = 6000;
// const whoRich = rafsanMoney > tomalMoney ? 'rafsan in rich man' : 'Tomal is rich';
// console.log(whoRich);

// if (rafsanMoney > tomalMoney) {
//     console.log('rafsan in rich man');
// } else {
//     console.log('Tomal is rich ');
// }


const number = 77;
// console.log(number+'');
const str = number + '';
// console.log(str);
const strInt = +str;
// console.log(strInt);


let isActive = true;
const displayUser = () => console.log('Display user');
const hideUser = () => console.log('Hide user');
// isActive ? displayUser() : hideUser();
isActive && hideUser()

