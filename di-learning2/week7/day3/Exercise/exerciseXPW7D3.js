// Exercise 2
// Write a function called displayStudentInfo which accepts an object as a parameter, and returns the string “Your full name is” concatenated with the value of the first key and space and then the value of the last key.
// See if you can destructure this object inside of the function.
function display ({firstName = "Elizabeth", lastName = "Thomson"}) {
	console.log(`Your full name is ${firstName}${" "}${lastName}`)
}
display("Elizabeth ", " Thomson");

// Exercise 3
// What’s the output?
class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); /* returns object*/

// Exercise 4
// With which constructor can we successfully extend the Dog class?

class Dog {
  constructor(name) {
    this.name = name;
  }
};

class Labrador extends Dog {
  // 1
  constructor(name, size) {
    this.size = size;
  }
  // 2
  constructor(name, size) {
    super(name);
    this.size = size;
  }
  // 3
  constructor(size) {
    super(name);
    this.size = size;
  }
  // 4
  constructor(name, size) {
    this.name = name;
    this.size = size;
  }

};
 // We can successfully extend The Dog class with constructor # 2



