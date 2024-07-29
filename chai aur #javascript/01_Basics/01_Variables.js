const accountId = 12321
let accountEmail = "tarleomkar8@gmail.com"
var accountPassword = "123"
accountCity = "Nashik"
let accountState;

// accountId = 2 not allowed

accountEmail = "hc@das.com"
accountPassword = "232323"
accountCity = "Bengluru"

console.log(accountId);
/*
Prefer not to use var
why = because of issue in block scope and function scope 
*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

{
    // this called scope
}