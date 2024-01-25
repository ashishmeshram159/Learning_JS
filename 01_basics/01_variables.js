/*
Don't use var. It causes issues in block and fucntional scope
*/
"use strict";
const accountId = 123322;
let accountEmail = "asdrrr@gmail.com";
var accountPassword = "12345";

// accountId = 2;

console.log(accountId);
let accountCity = "Manchester";
console.table([accountId, accountEmail, accountPassword, accountCity]);

