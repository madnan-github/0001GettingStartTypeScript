"use strict";
//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
// Declare and assign two array
let a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// checking unique number with for loop
for (var i = 0; i < a.length; i++) {
    var isUnique = true;
    for (var j = 0; j < b.length; j++) {
        if (a[i] === b[j]) {
            isUnique = false;
            break;
        }
    }
    if (isUnique) {
        b.push(a[i]);
    }
}
// print output result
console.log(b);