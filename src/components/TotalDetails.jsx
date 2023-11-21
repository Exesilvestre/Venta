
import React from 'react';
import './TotalDetails.css'

const TotalDetails = ({ selectedProducts }) => {
  const calculateTotalItems = () => {
    return selectedProducts.reduce((total, product) => total + product.quantity, 0);
  };

  const calculateTotalCost = () => {
    return selectedProducts.reduce(
      (total, product) => total + product.quantity * product.price,
      0
    );
  };

  return (
    <div className='total-details-container'>
      <h2>Detalles Totales</h2>
      <p>Cantidad Total de Items: {calculateTotalItems()}</p>
      <p>Total de la Compra: ${calculateTotalCost()}</p>
    </div>
  );
};

export default TotalDetails;
