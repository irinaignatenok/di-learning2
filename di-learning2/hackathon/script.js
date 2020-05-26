let form1 = document.getElementById("my1");
let form2 = document.getElementById("my2");

form1.addEventListener("submit", test)
function test(e) {
		e.preventDefault();
		
	}
	

 // function to Sign In button
let button1 = document.getElementById("logIn");
button1.addEventListener("click", myNewFunction);

function myNewFunction() {
let at1 = document.getElementById("mail1").value.indexOf("@");
let passWord1 = document.getElementById("password").value
submitOK = "true";	
let passw = "ralf50";
if(passWord1.match(passw)) {
	document.location.href = "/Users/irinaignat/Desktop/di-learning/week5/day5/about.html";
} else {
	alert("Wrong.....!")
	return false;
}

}
let at2 = document.getElementById("mail2").value.indexOf("@");
let age = document.getElementById("age").value;
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;

//  sign up form
let submitOK;
// sign up
function myFunction() {
let at2 = document.getElementById("mail2").value.indexOf("@");
let age = document.getElementById("age").value;
let fname = document.getElementById("fname").value;
let lname = document.getElementById("lname").value;
submitOK = "true";


if (fname.length > 10) {
  alert ("The name may have no more than 10 characters");
  submitOK = "false";
}

if (isNaN(age) || age < 1 || age > 100) {
  alert ("The age must be a number between 1 and 100");
  submitOK = "false";
}

if (at2 == -1) {
  submitOK = "false";
}

if (submitOK == "false") {
  return false;
}
}
//  function to Sign Up button
let button2 = document.getElementById("signUp");
button2.addEventListener("click", RespondClick);

function RespondClick() {
	 if (myFunction() != false) {
	
	alert("Thank you for registering! Your password will be sent to your email")
 
}

}



	



