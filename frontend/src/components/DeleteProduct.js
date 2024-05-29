import React from 'react';

function DeleteProduct({ product, onDelete }) {
  return (
    <button className="delete-btn" onClick={() => onDelete(product.id)}>Remove</button>
  );
}

export default DeleteProduct;
