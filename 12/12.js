"use strict";
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
let f_names = ["Ahmed", "Ghulam Ali", "Mansoor", "Shujaat Ali"];
// alternative approach
/*for(let i = 0; i<f_names.length; i++){
console.log(`Hello! ${f_names[i]}, hope you have a good day.\n`);
}
*/
for (let name of f_names) {
    console.log(`Good morning ${name}, I hope you are having a fantastic day!\n`);
}
