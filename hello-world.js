const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	//res.send('hello world')
	let myJson = { "hello" : "world" }
	res.json(myJson)
});

app.listen(port, () => { 
	console.log(`example app listening on port ${port}`)
});
