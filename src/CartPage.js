// CartPage.js
import React, { useState } from 'react';
import PaymentPage from './PaymentPage';
import {Link} from "react-router-dom"
import "./CartPage.css"
import axios from 'axios';




function CartPage({ cart }) {
  const [isPaymentVisible, setPaymentVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);


  const [orderphonenumber, setOrderPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [code, setCode] = useState('');
  const [city, setCity] = useState('');
  const [Country, setCountry] = useState('');

 

  const calculateTotal = (products) => {
    return products.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0).toFixed(2);
  };
  
  const Purchase = () => {

    const formdata = {
      PhoneNumber: orderphonenumber, // Replace with your variable name
      Address: address, // Replace with your variable name
      Code: code, // Replace with your variable name
      City: city, // Replace with your variable name
      Country: Country, // Assuming Country is a predefined variable
    };
  
    axios.post('http://localhost:3000/order', formdata, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    })
    .then(response => {
      console.log('Order placed successfully!', response.data);
    })
    .catch(error => {
      console.error('Error placing order:', error);
    });
  };
  

  return (
    <div>
      
<nav>
     <a href="">Home</a>
     <a href="">Food Order</a>
     <a href="">About</a>
     <a href="">Contact</a>
      </nav>
     
      {isPaymentVisible ? (
        <PaymentPage cart={[selectedProduct]} total={calculateTotal([selectedProduct])} />
      ) : (
        <>
          <h2>Cart Items:</h2>
          <ul class="image-head">
            {cart.map((item, index) => (
              <li key={index}>
                <img class="page-image" src={item.imageSrc} alt={item.foodName} />
                <p class="para">
              {item.foodName} - Quantity: {item.quantity}
              </p>
               <Link to="/OrderSuccess"> <button class="image-btn"onClick={Purchase} >Buy Now</button></Link>
              </li>
            ))}
          </ul>
          <p class="total">Total: ${calculateTotal(cart)}</p>
      
        </>
      )}
      <div class="main-form">
      <div class="main-form1">
      <input
        class="main-form2"
        type="Number"
        name="PhoneNumber"
        placeholder='Phone Number'
        value={orderphonenumber}
        onChange={(e) => setOrderPhoneNumber(e.target.value)}
      />
    </div>
        <div class="main-form1">
  <input
    class="main-form2"
    type="text"
    name="Address"
    placeholder='Street Address'
    value={address}
    onChange={(e) => setAddress(e.target.value)}
  />
</div>
<div class="main-form1">
  <input
    class="main-form2"
    type="number"
    name="Code"
    placeholder='Postal Code'
    value={code}
    onChange={(e) => setCode(e.target.value)}
  />
</div>
<div class="main-form1">
  <input
    class="main-form2"
    type="text"
    name="City"
    placeholder='City'
    value={city}
    onChange={(e) => setCity(e.target.value)}
  />
</div>
<div class="main-form1">
  <input
    class="main-form2"
    type="text"
    name="Country"
    placeholder='Country'
    value={Country}
    onChange={(e) => setCountry(e.target.value)}
  />
</div>

      </div>
    </div>
  );
}

export default CartPage;
