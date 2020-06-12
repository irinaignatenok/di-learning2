function getDoc() {
 let xhr = new XMLHttpRequest();
let box = document.getElementById("box");
let random = Math.floor(Math.random() * 100);
let url = "https://swapi.dev/api/people/" + random

 xhr.open('GET', url);
 xhr.send();

 xhr.responseType = 'json'; 

 xhr.onprogress = function() {
 	 loadingimg()
 }

 xhr.onload = function() {
	if(xhr.status != 200) {
		const box = document.getElementById("box");
		remove();
    let text = document.createElement("h2")
    text.innerText = "Oh no!That person isn't available."
    text.setAttribute("style", "font-size: 2em");
    box.appendChild(text)

	} else{
		let planet = xhr.response.homeworld
		let xhr2 = new XMLHttpRequest();
		 xhr2.open('GET', planet);
 		xhr2.send();
		xhr2.responseType = 'json'; 
		xhr2.onload = function (){
built(xhr.response, xhr2.response)
}
}
}

xhr.onerror = function () {
        console.log("Fail");
    };

    function remove() {
    document.getElementById("box").innerHTML = "";
}

const loadingimg = () => {
	const box = document.getElementById("box");
	remove()
	let i = document.createElement("i");
		box.appendChild(i);
		i.setAttribute("class", "fas fa-spinner fa-spin");
		i.setAttribute("style", "font-size:3em;")
	let parag = document.createElement("h3");
	box.appendChild(parag);
	parag.innerHTML = "Loading..."

}

 const built = (arr, link) => {
   	const box = document.getElementById("box");
   		remove()
   		let name = document.createElement("h2");
   		name.innerText = arr.name
   		let height = document.createElement("h4");
   		height.innerText = 'Height: ' + arr.height;
   		let gender = document.createElement("h4");
   		gender.innerText = 'Gender: ' + arr.gender;
   		let birth = document.createElement("h4");
   		birth.innerText = 'Birth Year: ' + arr.birth_year;
   		let home = document.createElement("h4");
   		home.innerText = 'Home World: ' + link.name;


   		box.appendChild(name);
   		box.appendChild(height);
   		box.appendChild(gender);
   		box.appendChild(birth);
   		box.appendChild(home);
   	}
   }
