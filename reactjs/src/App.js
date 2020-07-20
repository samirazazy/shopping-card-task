import React from "react";

import { BrowserRouter, Route, Link } from "react-router-dom";
import "./App.css";

import HomeScreen from "./screens/HomeScreen.js";
import ItemScreen from "./screens/ItemScreen.js";
import BasketScreen from "./screens/BasketScreen";

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <header className='header'>
          <div className='brandName'>
            <Link to='/'>BRAND</Link>
          </div>
          <div className='headerLinks'>
            <Link to='/'>SignIn</Link>
            <Link to='/'>Card</Link>
          </div>
        </header>

        <main className='main'>
          <div className='content'>
            <Route path='/item/:id' component={ItemScreen} />
            <Route path='/basket/:id' component={BasketScreen} />
            <Route path='/' exact={true} component={HomeScreen} />
          </div>
        </main>

        <footer className='footer'>All rights reserved!</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
