const express = require('express') ;
const hbs = require('hbs') ;
const app = express() ;
const port = 8080 ;

// Handlebars 
app.set('view engine', 'hbs') ;
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// server static content like =  / 
app.use(express.static ('public')) ;

app.get('/',  (req, res) => {
  res.render('home', {
    name  : 'Johan Garcia',
    title : 'Course node',
  });
})

app.get('/generic',  (req, res) => {
  res.render('generic', {
    name  : 'Johan Garcia',
    title : 'Course node',
  });
})

app.get('/elements',  (req, res) => {
  res.render('elements', {
    name  : 'Johan Garcia',
    title : 'Course node',
  });
})

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
