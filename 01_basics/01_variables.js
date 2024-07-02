const accountId=12345
let accountEmail="shashank@gmail.com"
var accountPassword=1234567
accountCity="New delhi"
let accountState;

/*
prefer not to use var due to issue in 
block scope
funtional scope
*/
accountEmail="sha@gmail.com"
accountPassword=22222
accountCity="Mumbai"
console.log("accountId");
console.table([ accountId,accountEmail,accountPassword,accountCity,accountState])