const express = require('express')
const app = express()
const port = 8080

// serve static content

//app.use(express.static ('public')) ;


app.get('/',  (req, res) => {
  res.send('Home page') ; 
})

app.get('/hello-world',  (req, res) => {
    res.send('Hello World in route') ;
  })


  app.get('*',  (req, res) => {
    res.send('404 | Page not found') ;
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) ;
  })
