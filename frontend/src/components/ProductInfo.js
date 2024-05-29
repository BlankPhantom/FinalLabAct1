import React from "react";

function ProductInfo({ id, name, price, description, onAddToCart }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>
        <strong>Price: </strong> ₱{price}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
      <button onClick={() => onAddToCart({ id, name, price })}>
        Add to Cart
      </button>
    </div>
  );
}

export default ProductInfo;