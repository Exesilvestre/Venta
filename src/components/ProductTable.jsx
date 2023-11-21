// ProductTable.js
import React from 'react';
import './ProductTable.css';  // Importar el archivo de estilos CSS

const ProductTable = ({ selectedProducts, updateProductQuantity, removeProduct }) => {
  const calculateSubtotal = (quantity, price) => {
    return quantity * price;
  };

  return (
    <div className="product-table-container"> {/* Agregar una clase para el contenedor principal */}
      <h2 className="table-title">PRODUCTOS SELECCIONADOS</h2>
      <div className="table-wrapper"> {/* Agregar un contenedor con estilos de envoltura */}
        <table className="styled-table table-border "> {/* Agregar una clase para aplicar estilos a la tabla */}
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
                  <button className='button-change'
                    onClick={() =>
                      updateProductQuantity(product.id, Math.max(1, product.quantity - 1))
                    }
                  >
                    -
                  </button>
                  <span className="quantity-number">{product.quantity}</span>
                  <button className='button-change'
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
