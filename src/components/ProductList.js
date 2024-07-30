import React, { useState, useEffect } from 'react';
import { fetchProducts } from '../api';
import Product from './Product';
import { getToken } from '../auth';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const token = getToken();
        const data = await fetchProducts(token);
        setProducts(data);
      } catch (error) {
        alert('Failed to fetch products');
      }
    };

    loadProducts();
  }, []);

  const filteredProducts = products.filter(
    (product) =>
      product.fields.toLowerCase().includes(search.toLowerCase()) ||
      product.data_category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
