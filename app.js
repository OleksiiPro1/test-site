const express = require('express');
const { getProduct } = require('./database/db')
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.get('/product/:id', (req, res)=>{
  const { id } = req.params;

const product = getProduct( Number(id) );
console.log('product: ', product);

res.render('main', { product });

  });



server.listen(3000);