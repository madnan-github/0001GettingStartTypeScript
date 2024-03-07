"use strict";
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
//*list of transportation in array
let fav_transport = [];
//push transportation in array
fav_transport.push(["car", "Toyota"]);
fav_transport.push(["motercycle", "Honda"]);
fav_transport.push(["bicyle", "Sohraab"]);
//print using for each loop
fav_transport.forEach(([transport, brand]) => {
    console.log(`I would like to own a ${brand} ${transport}`);
});
