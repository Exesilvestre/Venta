// AvailableProducts.js
import React from 'react';
import './AvaliableProducts.css'

const AvailableProducts = ({ addProduct }) => {
  const products = [
    { id: 1, name: 'Arroz blanco', price: 100 },
    { id: 2, name: 'Gaseosa', price: 80 },
    { id: 3, name: 'Fernet', price: 150 },
    { id: 4, name: 'Pan', price: 25 },
    { id: 5, name: 'Café', price: 50 },
  ];

  const handleAddProduct = (selectedProductId) => {
    if (!isNaN(selectedProductId)) {
      const selectedProduct = products.find((product) => product.id === selectedProductId);
      addProduct(selectedProduct);
    }
  };

  return (
    <div className='available-products-container'>
      <h2>Productos Disponibles</h2>
      <select onChange={(e) => handleAddProduct(parseInt(e.target.value))}>
        <option disabled selected>
          Selecciona un producto
        </option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name} - ${product.price}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AvailableProducts;
