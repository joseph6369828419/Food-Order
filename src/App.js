// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import FoodOrder from './FoodOrder';
import CartPage from './CartPage';
import OrderSuccess from './OrderSuccess';

 

import './App.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (cartItem) => {
    setCart([...cart, cartItem]);
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  return (
   
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>

<nav>
     <a href="">Home</a>
     <a href="">Food Order</a>
     <a href="">About</a>
     <a href="">Contact</a>
      </nav>
      <div class="main-page">
<div class="First-page">
  <h1>Everything is Better With a Pizza</h1>
  <p>Once you've made your selections, proceed to checkout. Provide your delivery address, choose a payment method, and place your order. You'll receive confirmation and estimated delivery time.
    
  </p>
</div>
<div class="Second-page">
  <img class="Second-image" src="image2.jfif"/>
</div>
<div>
  <button class="order-btn">Order Now</button>
</div>
</div>
              <div className="searchhead">
               
                <button class="showbtn" onClick={handleShowCart}>
                 
                  <Link class="showlink" to="/cart"><img class="cart-image" src="cart.png"/></Link>
                </button>
              </div>
              <div className="Apphead">
                {/* List of Food Items */}
                <div class="appchild">
                <FoodOrder 
               
                  imageSrc="image1.jfif"
                  foodName="Burger"
                  price={100.0}
                  addToCart={addToCart}
                />
                </div>
                <div class="appchild">
                <FoodOrder
                  imageSrc="image2.jfif"
                  foodName="Pizza"
                  price={50.0}
                  addToCart={addToCart}
                />
                 </div>
                 <div class="appchild">
                <FoodOrder
                  imageSrc="image3.jfif"
                  foodName="Pizza Cake"
                  price={200.0}
                  addToCart={addToCart}

                />
                   </div>
                   <div class="appchild">
                <FoodOrder 
               
                  imageSrc="image4.jfif"
                  foodName="Four Cut Pizza"
                  price={100.0}
                  addToCart={addToCart}
                />
                </div>
                <div class="appchild">
                <FoodOrder 
               
                  imageSrc="image5.jfif"
                  foodName="Nice Pizza"
                  price={300.0}
                  addToCart={addToCart}
                />
                </div>
                <div class="appchild">
                <FoodOrder 
               
                  imageSrc="image7.jfif"
                  foodName="Bread Pizza"
                  price={250.0}
                  addToCart={addToCart}
                />
                </div>
                {/* Include addToCart function in other FoodItem components as needed */}
              </div>
              {/* Add more food items as needed */}
            </div>
          }
        />
        <Route path="/cart" element={<CartPage cart={cart} />} />
        <Route path="/OrderSuccess" element={<OrderSuccess/>} />
        
      
      </Routes>
    </Router>
  );
}

export default App;
