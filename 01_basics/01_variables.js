const accountId=14453; 
let accountEmail ="arnavdogra3122004@gmail.com"
var accountPassword="12345"; 
accountCity="Jaipur";

//accountId=2 ;//not allowed to change const

console.log(accountId); 

accountEmail="n@gmail.com";
accountPassword="12334";
accountCity="kasauli"; 
/* var ni use krna because of issue in block scope and functiional scope*/ 
console.table([accountId,accountPassword,accountCity,accountEmail]); 
