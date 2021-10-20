import React from 'react';
import Meals from './components/Meals/Meals';
import Header from './components/Layout/Header';
import Cart from './components/Cart/Cart';
import { useState } from 'react';

const App = () =>{

  const [cartIsShown,setcartIsShown] = useState(false);

  const showCartHandler = () => {
    setcartIsShown(true);
  }

  const hideCartHandler = () => {
    setcartIsShown(false);
  }

  return (
    <React.Fragment>
       {cartIsShown && <Cart onClick={hideCartHandler}/> } 
        <Header onClick={showCartHandler}/>
        <main>
          <Meals />
        </main>
    </React.Fragment>
  );
}

export default App;
