// Exercise 2
// 1. Use the map() method to say hello to the users. Use only their firstname


let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];


 const newUsers = users.map((value, index) => {
 	alert("Hello " + value["firstName"])
 })

 // 2.Use the filter() method to congratulate only the Full Stack Residents

 let newUsers1 = users.filter((val) => {
 	if(val["role"] == "Full Stack Resident"){
 	alert("Congratulation " + val["firstName"])
 }
}
 	)

// 3.Use the reduce() method to combine all of these into a single string

let epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
 let newEpic = epic.reduce((acc, index) => {
 	let x = acc + index
 	return x.toString()
 	console.log(acc)
 	console.log(index)

 })

 // 4 Use the filter() method to congratulate only the students that passed the course
 let student = [{name: "Ray", course: "Computer Science", isPassed: true}, 
{name: "Liam", course: "Computer Science", isPassed: false}, 
{name: "Jenner", course: "Information Technology", isPassed: true}, 
{name: "Marco", course: "Robotics", isPassed: true}, 
{name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
{name: "Jamie", course: "Big Data", isPassed: false}];

let newStudents = student.filter((val) => {
	if(val["isPassed"] == true) {
		alert("Congratulation " + val["name"])
	}
})
 

