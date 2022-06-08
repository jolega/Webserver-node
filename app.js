const express = require('express')
const app = express()
const port = 8080

// TODO: require('hbs')

app.set('view engine', 'hbs')


// server static content like =  / 
app.use(express.static ('public')) ;

app.get('/',  (req, res) => {
  res.render('home', {
    name  : 'julio',
    title : 'course node',
  });
})

//pad 
app.get('/hello-world',  (req, res) => {
    res.send('Hello World in route') ;
  })

  app.get('/generic',  (req, res) => {
    res.sendFile(__dirname + '/public/generic.html') ;
  })

  app.get('/elements',  (req, res) => {
    res.sendFile(__dirname + '/public/elements.html') ;
  })

  app.get('*',  (req, res) => {
    res.sendFile(__dirname + '/public/404.html') ;
  })

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) ;
  })
