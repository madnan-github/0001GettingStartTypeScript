"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
Object.defineProperty(exports, "__esModule", { value: true });
function make_shirt(size = "Large", message = "I Love TypeScript") {
    console.log(`The size of the shirt is ${size} and the message is ${message}`);
}
make_shirt();
make_shirt("medium", "I love TypeScript");
make_shirt("small", "I like to code");
