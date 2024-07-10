import React, { useState } from 'react';


function FoodOrder({ imageSrc, foodName, price, addToCart }) {
  const [quantity, setQuantity] = useState(1);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const cartItem = {
      imageSrc,
      foodName,
      price,
      quantity,
    };
    addToCart(cartItem);
    setShowSuccessMessage(true);

    // Hide the success message after a certain period (e.g., 2 seconds)
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 2000);
  };

  return (
    <div className="food-item">
      <img className="imagealter" src={imageSrc} alt={foodName} />
      <h2>{foodName}</h2>
      <p>Price: ${price.toFixed(2)}</p>
      <div className="quantity-control">
        <span>Quantity :</span>
        <button type="button" onClick={handleDecrement} className="decrement">
          -
        </button>
        <span className="quantity-display">{quantity}</span>
        <button type="button" onClick={handleIncrement} className="increment">
          +
        </button>
        <div>
          <button class="addtocartbtn" onClick={handleAddToCart}>Add To Cart</button>
        </div>
      </div>

      {showSuccessMessage && (
        <div className="success-message">Item added to cart successfully!</div>
      )}
    </div>
  );
}

export default FoodOrder;
