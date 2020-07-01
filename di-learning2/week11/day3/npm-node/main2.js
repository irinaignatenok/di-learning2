const axios = require('axios');

const getUsers = async() => {
	try{
		const response = await axios.get('https://jsonplaceholder.typicode.com/users');
		const users = await response.data;
		return users;

	}
	catch(err) {
		console.log(err)
	}
}

 getUsers()

 module.exports = {
 	id: getUsers
 }