//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

let guest_List: string[] = ["Ammad", "Naeem","Salam", "Qader"];
console.log("Old Guest List:" + guest_List);

let na_list: string = "Salam"; // Guest who can't make it
const newGuest: string = "Shafiq"; // New guest to invite

const i_Of_na_Guest: number = guest_List.indexOf(na_list);

if (i_Of_na_Guest !== -1) { // If the guest is found in the list
    guest_List.splice(i_Of_na_Guest, 1); // Remove the unavailable guest
    guest_List.push(newGuest); // Add the new guest
    console.log(`The guest list has been updated. ${na_list} can't make it. ${newGuest} has been invited instead.`);
} else {
    console.log(`${na_list} is not in the guest list.`);
}

console.log("Updated guest list:");
console.log(guest_List);
