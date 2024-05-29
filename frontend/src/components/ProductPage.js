import React, { useState, useEffect } from "react";
import ViewCart from "./ViewCart";
import Modal from "./Modal";
import "../../src/Styles.css";
import { fetchProducts } from '../api';

function ProductPage() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);

    if (existingProduct) {
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  const removeFromCart = (productId, decrement = false) => {
    const updatedCart = cart
      .map((item) => {
        if (item.id === productId) {
          if (decrement && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null;
          }
        }
        return item;
      })
      .filter(Boolean);
    setCart(updatedCart);
  };

  const checkout = () => {
    console.log(cart); // Perform checkout logic here
    setCart([]); // Clear the cart after checkout
  };

  return (
    <div className="container">
      {!showCart && (
        <button onClick={() => setShowCart(true)}>View Cart</button>
      )}
      {showCart && (
        <Modal onClose={() => setShowCart(false)}>
          <ViewCart
            cart={cart}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        </Modal>
      )}

      <br></br>
      <br></br>
      <h1>PRODUCTS</h1>
      <div className="products-container">
        {products?.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3>
            <p>{product.desc}</p> {/* Ensure 'desc' matches your database field */}
            <button onClick={() => addToCart(products)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {showPopup && (
        <Modal onClose={() => setShowPopup(false)}>
          <div className="popup">
            <h2>Item Added to Cart</h2>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default ProductPage;