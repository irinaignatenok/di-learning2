// part 1
// Turn the below users object (value is their ID number)
const users = { user1: 18273, user2: 92833, user3: 90315 } 
let newUsers = Object.keys(users).map((key) => {
	return [key, users[key]];
})
console.log(newUsers)

// part 2 
// Change the output array above in order to have the user’s IDs multiplied by 2 


let newUsers1 = Object.keys(users).map((key) => {
	return [key, users[key] * 2];
})
console.log(newUsers1)