const products = [
  {id: 1, title: 'product1', description: 'product1 is very good'},
  {id: 2, title: 'product2', description: 'product2 is very good'},
  {id: 3, title: 'product3', description: 'product3 is very good'},
  {id: 4, title: 'product4', description: 'product4 is very good'},
]

const getProduct = (id) => {
  const result = products.find(item => item.id === id);
  return result;
}
module.exports = {
  getProduct
}
