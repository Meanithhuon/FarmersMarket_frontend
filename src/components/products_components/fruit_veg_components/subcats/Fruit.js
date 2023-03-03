import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import AddToCart from '../../../cart_components/AddToCart';
import handleAddToCart from '../../../cart_components/AddToCart';

// import { 
    // todo call api functions here
//  } from '../products_api'; //! not positive about the path might need another dot or two??

function Fruit() {
    const [products, setProducts] = useState([]);
  
    useEffect(() => {
      fetch('https://farmers-market-1oeq.onrender.com/api/products/subcategory/Fresh%20Fruits')
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

  
    return (
        <div>
          <h2>Fruit</h2>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Inventory: {product.inventory}</p>
                <p>Price: ${product.price}</p>
                <p>Subcategory: {product.subcategory}</p>
                <img src={product.imageURL} alt={product.name} />
                {product.id && <AddToCart productId={product.id} onClick={() => handleAddToCart(product.id)}/>}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  
  export default Fruit;
  

