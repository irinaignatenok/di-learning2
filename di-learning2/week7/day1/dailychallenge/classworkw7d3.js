let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Anet"]
}

let i = 1;
for (let [key, value] of Object.entries(myOblect)) {
	console.log(`The #${i} key is: ${key}, its value is: ${value} i++`)
}
// Exercise 3
// Analyse this code. Display the type of each rabbit and make them speak

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

console.log(killerRabbit.type);
console.log(blackRabbit.type);
killerRabbit.speak("Hello");
blackRabbit.speak("Hello");




