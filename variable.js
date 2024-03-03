const accountId= 'UA-XXXXX-X';
let accountEmail= '1222212'; // Error: Identifier 'accountId' has already been declared
var accountPassword= '112345678'; // Error: Identifier 'accountId' has already been declared
let accountState;
accountCity= 'New York'; // Error: Identifier 'accountId' has already been declared


// const can't be changed

// both variable and let can be changed

// accountId= 'UA-XXXXX-y'; // Error: Assignment to constant variable.



accountEmail= 'nouman@gmail.com';
accountCity= 'Lahore';

console.table({accountId, accountEmail, accountPassword, accountCity,accountState});
