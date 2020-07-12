
const http = require('http');

const exp = require('express');
const cors = require('cors');
const bp = require('body-parser')
const fs = require('fs');

const app = exp();
app.use(cors());

// app.use(bp.urlencoded({extended:false}))
// app.use(bp.json());
app.use(exp.static(__dirname + '/public'));


//Middleware
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
// let allowCrossDomain = (req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Access-Control-Allow-Headers', '*');
//     next();
// }
// app.use(allowCrossDomain);

app.post('/reg', (req,res) => {
	console.log(req.body);

	let products = [];
	// const item = {
	// 	item: req.body.item,
	// 	quantity: req.body.quantity
	// }

	// console.log(item)
	try {
		const file_items = fs.readFileSync('./products');
		products = JSON.parse(file_items.toString());

	}catch(err){
		console.log(err)
	}

		products.push(req.body);

fs.writeFile('./products', JSON.stringify(products), err => {
	if(err) {
		console.log(err)
	}
})
res.send(products)
	
})







app.listen(3000)