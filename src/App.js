// App.js
import React, { useState, useEffect } from 'react';
import ProductTable from './components/ProductTable';
import AvailableProducts from './components/AvailableProducts';
import TotalDetails from './components/TotalDetails';
import './App.css';  

const App = () => {

  
  
  const [selectedProducts, setSelectedProducts] = useState(
    JSON.parse(localStorage.getItem('selectedProducts')) || []
  );

 
  const updateSelectedProducts = (newProducts) => {
    setSelectedProducts(newProducts);
    localStorage.setItem('selectedProducts', JSON.stringify(newProducts));
  };

  const addProduct = (product) => {
   
    const existingProduct = selectedProducts.find((p) => p.id === product.id);

    if (existingProduct) {
      // Si el producto ya existe, solo actualiza la cantidad
      updateProductQuantity(product.id, existingProduct.quantity + 1);
    } else {
      // Si el producto no existe, agrégalo a la lista
      updateSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
    }
  };

  const updateProductQuantity = (productId, newQuantity) => {
    const updatedProducts = selectedProducts.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );

    updateSelectedProducts(updatedProducts);
  };

  const removeProduct = (productId) => {
    const updatedProducts = selectedProducts.filter((product) => product.id !== productId);
    updateSelectedProducts(updatedProducts);
  };


  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem('selectedProducts'));
    if (storedProducts) {
      setSelectedProducts(storedProducts);
    }
  }, []); 

  return (
    <div className="app-container">
      <ProductTable
        selectedProducts={selectedProducts}
        updateProductQuantity={updateProductQuantity}
        removeProduct={removeProduct}
      />
      <div className="bottom-container">
        <AvailableProducts addProduct={addProduct} />
        <TotalDetails selectedProducts={selectedProducts} />
      </div>
    </div>
  );
};

export default App;
