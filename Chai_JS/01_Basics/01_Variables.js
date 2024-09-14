const accountId = 10
let accountEmail = 'xyz@gmail.com';
var accountPassword = '12345';
accountType = 'type' // We can also define a variable without using any data type.
let accountStatus // We can also define a variable without defining any data to it initially and it will be undefined by default.

// accountId = 10; // This will give error as JS does not allow us to re-declare or change the const once Declared.

accountEmail = 'abc@gmail.com'
accountPassword = '678910'

console.log(accountId)
console.table([accountEmail, accountPassword, accountType, accountStatus])