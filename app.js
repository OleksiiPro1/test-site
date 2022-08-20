const express = require('express');
const { getProduct } = require('./database/products')
const server = express();

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.get('/', (req, res) =>  {
  const products = [
    {id: 1, title: 'Banana', description: 'Banana is very good', url: 'https://www.abcfact.ru/upload/001/u107/304/10fe8665.jpg'},
    {id: 2, title: 'Apple', description: 'Apple is very good', url: 'https://c-fa.cdn.smule.com/smule-gg-s-sf-bck4/arr/5c/08/c069505a-b7df-45a5-86b2-31188f21b992.jpg'},
    {id: 3, title: 'Pineapple', description: 'Pineapple is very good', url: 'https://catalogapp.b-cdn.net/production/images/46/71/32/92/preview/a128620b-dcf5-4bbf-af31-4a08701eedf2.unknown'},
    {id: 4, title: 'Orange', description: 'Orange is very good', url: 'https://gcdn.utkonos.ru/resample/256x256q90/images/recipe/20180803143146-detoks.jpg'},
  ]

res.render('index', {title: 'Main page', products });

  });

server.get('/product/:id', (req, res)=>  {
  const { id } = req.params;

const product = getProduct( Number(id) );
// console.log('product: ', product);

res.render('main', { product });

  });



server.listen(3000);