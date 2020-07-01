const my_users = require('../main2.js');

my_users.id()
.then(data => console.log(data))
.catch(err => console.log(err))