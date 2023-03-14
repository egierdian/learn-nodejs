var validator = require('validator');

let myEmail = 'egi@ganteng.com';
let phone = '081123431315';

const checkEmail = (email) => {
    return validator.isEmail(email);
}
const checkMobilePhone = (number) => {
    return validator.isMobilePhone(number, 'id-ID');
}
const isNumeric = (number) => {
    return validator.isNumeric(number);
}

console.log(checkEmail(myEmail)) // validator email 

console.log(checkMobilePhone(phone))

console.log(isNumeric(phone))

console.log(`email: ${myEmail}`)

