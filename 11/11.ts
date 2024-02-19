//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names : string[] = ["Ahmed", "Ghulam Ali", "Mansoor", "Shujaat Ali"];

for(let i = 0; i<names.length; i++){
    console.log(`No. ${i+1} in the list is ${names[i]}.\n`);
}
