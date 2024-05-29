import React, { useState } from 'react';
import { addProduct } from '../api'; // Import the addProduct function from the API file

function AddProduct({ setShowAddModal, addNewProduct }) {
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    desc: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    addProduct(newProduct)
      .then((response) => {
        addNewProduct(newProduct); // Add the new product to the state using the data returned from the API
        setShowAddModal(false); // Close the modal
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        setError('Failed to add product. Please try again.');
        setLoading(false);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={newProduct.name}
        onChange={handleChange}
        required
      />
      <label>Price:</label>
      <input
        type="number"
        name="price"
        value={newProduct.price}
        onChange={handleChange}
        required
      />
      <label>Description:</label>
      <input
        type="text"
        name="desc"
        value={newProduct.desc}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Adding...' : 'Add Product'}
      </button>
      <button type="button" onClick={() => setShowAddModal(false)}>
        Cancel
      </button>
      {error && <p className="error">{error}</p>}
    </form>
  );
}

export default AddProduct;