const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

 app.get('/', (req,res) => { res.render('index')});

 app.get('/category', (req,res) => { res.render('category')});

 app.get('/about', (req,res) => { res.render('about')});

//To Start the server
app.listen(port, () => { console.log(`server is running on http://localhost:${port}`); });