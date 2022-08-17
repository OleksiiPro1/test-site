const express = require('express');
const { getProduct } = require('./database/products')
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.get('/', (req, res) =>  {

res.render('index');

  });

server.get('/product/:id', (req, res)=>  {
  const { id } = req.params;

const product = getProduct( Number(id) );
// console.log('product: ', product);

res.render('main', { product });

  });



server.listen(3000);