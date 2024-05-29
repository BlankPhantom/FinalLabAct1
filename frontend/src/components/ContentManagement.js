import React, { useState, useEffect } from 'react';
import AddProduct from './AddProduct';
import EditProduct from './EditProduct';
import DeleteProduct from './DeleteProduct';
import "../../src/Styles.css";
import { fetchProducts, removeProduct, updateProduct } from '../api';

function ContentManagement({ onLogout }) {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then(response => {
        console.log('Products fetched:', response.data); // Log the response data
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error); // Log the error
      });
  }, []);

  const handleRemoveProduct = (id) => {
    removeProduct(id)
      .then(() => {
        setProducts(products.filter(product => product.id !== id));
      })
      .catch(error => console.error('Error removing product:', error));
  };

  const handleUpdateProduct = (updatedProduct) => {
    updateProduct(updatedProduct.id, updatedProduct)
      .then(() => {
        setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
        setEditingProduct(null);
        setShowEditModal(false);
      })
      .catch(error => console.error('Error updating product:', error));
  };

  const handleAddNewProduct = (newProduct) => {
      // Assuming the newProduct has an id property added by the backend
      setProducts([...products, newProduct]); // Add the new product directly to the state
      setShowAddModal(false);
  };

  const handleLogout = () => {
    onLogout();
    window.location.href = '/Login';
  };

  const ProductCard = ({ product }) => (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>{product.desc}</p>
      <DeleteProduct product={product} onDelete={() => handleRemoveProduct(product.id)} />
      <button onClick={() => {
        setEditingProduct(product);
        setShowEditModal(true);
      }}>Edit</button>
    </div>
  );

  return (
    <div className="container">
      <div className="header">
        <button className="logout-btn" onClick={handleLogout}>Log Out</button>
      </div>
      <h1>PRODUCTS</h1>
      <div className="products-container">
        {products.length === 0 ? (
          <p>No products available.</p>
        ) : (
          products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>

      <button onClick={() => setShowAddModal(true)}>Add Product</button>

      {showAddModal && (
        <div className="add-product-modal">
          <div className="add-product-modal-content">
            <span className="close" onClick={() => setShowAddModal(false)}>&times;</span>
            <AddProduct
              setShowAddModal={setShowAddModal}
              addNewProduct={handleAddNewProduct}
            />
          </div>
        </div>
      )}

      {showEditModal && editingProduct && (
        <div className="edit-product-modal">
          <div className="edit-product-modal-content">
            <span className="close" onClick={() => setShowEditModal(false)}>&times;</span>
            <EditProduct
              editingProduct={editingProduct}
              setEditingProduct={setEditingProduct}
              onUpdate={handleUpdateProduct}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ContentManagement;
