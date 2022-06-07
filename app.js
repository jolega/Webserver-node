
//localhost:8080
console.log('hello World') ;

const http = require('http');
const { Http2ServerRequest } = require('http2');

http.createServer (( reg, res ) => {

    res.setHeader('Content-Disposition', 'attachment; filename=list.csv')
    res.writeHead(200, {'Content-Type': 'application/json'})

    res.write('id, nombre \n');
    res.write('1, Fernando \n');
    res.write('2, Maria \n');
    res.write('3, Juan \n');
    res.write('4, Pedro  \n');
    res.end();

} )

.listen(8080)

console.log('listening on the port', 8080) ;