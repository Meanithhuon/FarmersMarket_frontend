import React, { useState, useEffect } from 'react';
import AddToCart from '../../cart_components/AddToCart';

function Bakery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://farmers-market-1oeq.onrender.com/api/products/category/Bakery')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setProducts(data);
      })
      .catch(error => {
        console.log('There was a problem with the API request:', error);
      });
  }, []);

  const handleAddToCart = (productId) => {
    console.log(`Product ${productId} added to cart!`);
  }

  return (
    <div>
      <h2>Bakery Products</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Inventory: {product.inventory}</p>
            <p>Price: ${product.price}</p>
            <p>Subcategory: {product.subCategory}</p>
            <img src={product.imageURL} alt={product.name} />
            {product.id && <AddToCart productId={product.id} handleAddToCart={handleAddToCart} />}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Bakery;