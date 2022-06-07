console.log('hello World') ;

const http = require('http');
const { Http2ServerRequest } = require('http2');

http.createServer (( reg, res ) => {

    res.write('hello World response')
    res.end();

} )

.listen(8080)

console.log('listening on the port', 8080) ;