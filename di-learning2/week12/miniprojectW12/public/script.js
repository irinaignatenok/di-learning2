

const getData = () => {
	const  product = document.getElementById('item').value;
	const number = document.getElementById('quantity').value;

	const products = {
	 product,
	 number
	}
fetchData(products);
}

const fetchData = (data) => {
    fetch('http://localhost:3000/reg', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(data => displayProducts(data))
}


const displayProducts = (list) => {
	const root = document.getElementById('root');
	root.innerHTML ='';
	for(i in list){
		let text = document.createElement('h2');
		text.innerHTML = list[i].product + list[i].number

		root.appendChild(text)
	}
}
