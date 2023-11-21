
import React from 'react';
import './ProductTable.css';  

const ProductTable = ({ selectedProducts, updateProductQuantity, removeProduct }) => {
  const calculateSubtotal = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="product-table-container"> 
      <h2 className="table-title">PRODUCTOS SELECCIONADOS</h2>
      <div className="table-wrapper"> 
        <table className="styled-table table-border ">
          <thead>
            <tr>
              <th>CANTIDAD</th>
              <th>NOMBRE</th>
              <th>SUBTOTAL</th>
              <th>TOTAL</th>
              <th>ELIMINAR</th>
            </tr>
          </thead>
          <tbody>
            {selectedProducts.map((product) => (
              <tr key={product.id}>
                <td>
                  <button id='menos' className='button-change'
                    onClick={() =>
                      updateProductQuantity(product.id, Math.max(1, product.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span className="quantity-number">{product.quantity}</span>
                  <button id='mas' className='button-change'
                    onClick={() => updateProductQuantity(product.id, product.quantity + 1)}
                  >
                    +
                  </button>
                </td>
                <td>{product.name}</td>
                <td>${product.price}</td>
                <td>${calculateSubtotal(product.quantity, product.price)}</td>
                <td>
                  <button className='delete-button' onClick={() => removeProduct(product.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
