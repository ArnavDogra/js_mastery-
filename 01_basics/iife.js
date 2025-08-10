//Immediately Invoked Function Expression
 (function chai(){
console.log(`DB connected`);
 })() ;
 //global scope ke pollution se problems hoti
 //hai kai baar 
 //pollution htane ke liye 
( (name)=> {
   console.log(`DB_connected_two ${name}`); 
})('hitesh'); 