const express = require('express')
const app = express()
const port = 8080

// server static content like =  / 
app.use(express.static ('public')) ;

//pad 
app.get('/hello-world',  (req, res) => {
    res.send('Hello World in route') ;
  })


  app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html') ;
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) ;
  })
