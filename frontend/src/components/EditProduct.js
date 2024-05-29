import React, { useState, useEffect } from 'react';
import { updateProduct } from '../api';

function EditProduct({ editingProduct, setEditingProduct, onUpdate }) {
  const [updatedProduct, setUpdatedProduct] = useState(editingProduct);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setUpdatedProduct(editingProduct);
  }, [editingProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProduct({ ...updatedProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    updateProduct(updatedProduct.id, updatedProduct)
      .then((response) => {
        onUpdate(updatedProduct);
        setEditingProduct(null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        setError('Failed to update product. Please try again.');
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={updatedProduct.name}
        onChange={handleChange}
        required
      />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={updatedProduct.price}
        onChange={handleChange}
        required
      />
      <label>Description:</label>
      <input
        type="text"
        name="desc"
        value={updatedProduct.desc}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Updating...' : 'Update Product'}
      </button>
      <button type="button" onClick={() => setEditingProduct(null)}>
        Cancel
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default EditProduct;