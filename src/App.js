import React from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import { useState } from 'react';
import CartProvider from './store/CartProvider';

const App = () =>{

  const [cartIsShown,setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  }

  const hideCartHandler = () => {
    setcartIsShown(false);
  }

  return (
    <CartProvider>
       {cartIsShown && <Cart onClick={hideCartHandler}/> } 
        <Header onClick={showCartHandler}/>
        <main>
          <Meals />
        </main>
    </CartProvider>
  );
}

export default App;
