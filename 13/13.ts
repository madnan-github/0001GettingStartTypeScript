//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let transport_Name: string[] = ["Car", "Motorcycle","Bus", "Bycycle"];
let brand_Name : string[] = ["Honda", "Unique", "Dadsun", "Sohrab"]; 

for (let i = 0; i < transport_Name.length; i++) {
    
    console.log(`I would like to own a ${brand_Name[i]} ${transport_Name[i]}.`);
}
