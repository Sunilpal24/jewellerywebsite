import React from 'react'
import ProductList from './ProductList';
import products from './products.json'

const Products = () => {
    
  return (
    <div >
    <h1 className="text-center item">Products</h1>
    <div className="row">
      {products.map((e) => {
        return (
          <div key={e.id} className="col-md-3 col-sm-6 mb-3">
            <ProductList id={e.id} name={e.name} img={e.img} title={e.title} price={e.price} />
          </div>
        );
      })}
    </div>
  </div>
  )
}

export default Products
