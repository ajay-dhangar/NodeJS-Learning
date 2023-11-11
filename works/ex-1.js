const http = require('http')

const requestFunc = () =>{
    console.log("My server is working fine");
}

const server = http.createServer(requestFunc)

server.listen(3000)