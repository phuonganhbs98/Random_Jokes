
const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) =>{
	fs.readFile('./views/joke.html', (err, data) => {
		res.write(data);
		return res.end();
	});
});

server.listen(1312, 'localhost');
