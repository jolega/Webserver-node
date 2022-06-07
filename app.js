
//localhost:8080
console.log('hello World') ;

const http = require('http');
const { Http2ServerRequest } = require('http2');

http.createServer (( reg, res ) => {

    res.writeHead(200, {'Content-Type': 'application/json'})

    const person = {
        id : 1,
        FullName : 'Johan'
    }

    res.write( JSON.stringify ( person ))
    res.end();

} )

.listen(8080)

console.log('listening on the port', 8080) ;