function ProductSummary({ cart }) {
    const calculateTotalPrice = (price, quantity) => {
      return parseFloat(price) * quantity;
    };
  
    const getTotalPriceForCart = () => {
      return cart.reduce((total, item) => {
        return total + calculateTotalPrice(item.price, item.quantity);
      }, 0);
    };
  
    const getTotalItemsInCart = () => {
      return cart.reduce((total, item) => {
        return total + item.quantity;
      }, 0);
    };
  
    return (
      <div>
        <h2>Product Summary</h2>
        <p>
          <strong>Item Quantity:</strong> {getTotalItemsInCart()}
        </p>
        <p>
          <strong>Total Price:</strong> ₱{getTotalPriceForCart()}.00
        </p>
      </div>
    );
  }
  
  export default ProductSummary;
  