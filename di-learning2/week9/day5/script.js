const url = 'https://pokeapi.co/api/v2/pokemon/';


let number =0;

	
	
	const randomItem = async() => {
		deleteInfo()
		loadingimg()
		try {
	const random = Math.floor(Math.random() * 900);
	const picture = document.getElementById('picPokemon')
	const pokemonInfo = document.getElementById('infoPokemon')

	const response = await fetch(url + random);
	const dataPokemon = await response.json()
	number = dataPokemon;
	deleteInfo();
	await build(dataPokemon, picture, pokemonInfo);

	}
	catch (err) {
		deleteInfo()
			const pokemonInfo = document.getElementById('infoPokemon');
			const errMessage = document.createElement("h2")
			errMessage.innerHTML = `Oh no! That Pokemon is not available...`;
			pokemonInfo.appendChild(errMessage)
	}
}

const previousItem = async() => {
	deleteInfo()
	loadingimg()

	try {

		const response = await fetch(url + `${-- number.id}/`)
		const dataPokemon = await response.json()
		number = dataPokemon;
		const picture = document.getElementById('picPokemon')
		const pokemonInfo = document.getElementById('infoPokemon')
		deleteInfo();
		await build(dataPokemon, picture, pokemonInfo);
	}

catch (err) {
		deleteInfo()
			const pokemonInfo = document.getElementById('infoPokemon');
			const errMessage = document.createElement("h2")
			errMessage.innerHTML = `Oh no! That Pokemon is not available...`;
			pokemonInfo.appendChild(errMessage)
	}

	}

	const nextItem = async() => {
	deleteInfo()
	loadingimg()

	try {
		const response = await fetch(url + `${++ number.id}/`)
		const dataPokemon = await response.json()
		number = dataPokemon;
		const picture = document.getElementById('picPokemon')
		const pokemonInfo = document.getElementById('infoPokemon')
		deleteInfo();
		await build(dataPokemon, picture, pokemonInfo);
	}

catch (err) {
		deleteInfo()
			const pokemonInfo = document.getElementById('infoPokemon');
			const errMessage = document.createElement("h2")
			errMessage.innerHTML = `Oh no! That Pokemon is not available...`;
			pokemonInfo.appendChild(errMessage)
	}

	}




   function deleteInfo() {
    document.getElementById("infoPokemon").innerHTML = "";
    document.getElementById("picPokemon").innerHTML = "";
}

const loadingimg = () => {
	const box = document.getElementById("infoPokemon");
	deleteInfo()
	let i = document.createElement("i");
		box.appendChild(i);
		i.setAttribute("class", "fas fa-spinner fa-spin");
		i.setAttribute("style", "font-size:3em;")
	let parag = document.createElement("h3");
	box.appendChild(parag);
	parag.innerHTML = "Loading..."

}


const build = async (dataPokemon, picture, pokemonInfo) => {
	let img = document.createElement('img');
	img.setAttribute("src", await dataPokemon.sprites.front_default);
	img.setAttribute("style", "width: 200px; height: 200px")
	picture.appendChild(img)

	let name = document.createElement("h2");
	name.innerHTML = await dataPokemon.name;

	pokemonInfo.appendChild(name);

	let id = document.createElement("div");
	id.innerHTML = "Pokemon n" + await dataPokemon.id;
	pokemonInfo.appendChild(id);

	let height = document.createElement("div")
	height.innerHTML = "Height: " + await dataPokemon.height;
	pokemonInfo.appendChild(height);

	let weight = document.createElement("div");
	weight.innerHTML = "Weight: " + await dataPokemon.weight;
	pokemonInfo.appendChild(weight);

	let type = document.createElement("div");
	type.innerHTML = "Type: " + await dataPokemon.type
	pokemonInfo.appendChild(type)
 }
