const App = require('./src/App'); // import the function

const http = require('http');

const port = process.env.PORT || 4242

const server = http.createServer((req, res) => { 
    res.write(`<h2>Welcome to my App</h2>`); 
    res.end(); // end the response   
});

server.listen(port, () => {
  console.log('Server is running on port http://localhost:4242');

});

console.log('index.js is Started...');

App(); // call the function from App.js and log the result to the console