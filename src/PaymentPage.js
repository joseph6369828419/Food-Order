import React, { useState } from 'react';

function PaymentPage({ cart, total }) {
  const [quantity, setQuantity] = useState(1);
  const [debitCardNumber, setDebitCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCVV] = useState('');
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [validationError, setValidationError] = useState('');

  const discountPercentage = 10;
  const discountedTotal = total - (total * discountPercentage) / 100;
  const netTotal = discountedTotal * quantity;

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handlePayment = () => {
    // Simulate validation logic (replace this with your actual validation logic)
    if (!debitCardNumber || !expirationDate || !cvv) {
      setValidationError('Please fill in all debit card details.');
    } else {
      // Perform payment processing logic (replace this with your actual payment processing logic)
      // For simplicity, I'm setting paymentSuccess to true after successful validation
      setValidationError('');
      setPaymentSuccess(true);
    }
  };

  return (
    <div>
      
      <h2>Payment Details:</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.imageSrc} alt={item.foodName} />
            {item.foodName} - Quantity: {item.quantity} - Price: ${item.price * quantity}
            <button type="button" onClick={handleDecrement} className="decrement">
              -
            </button>
            <span className="quantity-display">{quantity}</span>
            <button type="button" onClick={handleIncrement} className="increment">
              +
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${total * quantity}</p>
      <p>Discount (10%): -${((total * discountPercentage) / 100).toFixed(2)}</p>
      <p>Discounted Total: ${discountedTotal * quantity}</p>
      <p>Net Total: ${netTotal}</p>

      <form>
        <label>
          Debit Card Number:
          <input type="text" value={debitCardNumber} onChange={(e) => setDebitCardNumber(e.target.value)} />
        </label>
        <label>
          Expiration Date:
          <input type="text" value={expirationDate} onChange={(e) => setExpirationDate(e.target.value)} />
        </label>
        <label>
          CVV:
          <input type="text" value={cvv} onChange={(e) => setCVV(e.target.value)} />
        </label>
      </form>

      {validationError && <p style={{ color: 'red' }}>{validationError}</p>}

      {paymentSuccess ? (
        <p>Payment Successful!</p>
      ) : (
        <button onClick={handlePayment}>Pay in:${netTotal}</button>
      )}
    </div>
  );
}

export default PaymentPage;
