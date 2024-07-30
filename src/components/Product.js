import React from 'react';

const Product = ({ product }) => (
  <div className="product">
    <h3>{product.data_category}</h3>
    <p>Record count: {product.record_count}</p>
    <p>Fields: {product.fields}</p>
  </div>
);

export default Product;
