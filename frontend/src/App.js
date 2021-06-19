import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './Screens/Home/Homescreen';
import ProductScreen from './Screens/Product/ProductScreen';
import CartScreen from './Screens/Cart/CartScreen';
import NavBar from './components/Navbar/Navbar';
import Backdrop from './components/BackDrop/BackDrop';
import SideDrawer from './components/SideDrawer/SideDrawer';

function App() {
  const [show, setShow] = useState(false);

  return (
    <Router>
          <NavBar onClick={() => setShow(true)} />
          <SideDrawer show={show} />
          <Backdrop show={show} onClick={() => setShow(false)} />
          <main>
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/product/:id" component={ProductScreen} />
              <Route exact path="/cart" component={CartScreen} />
            </Switch>
          </main>
    </Router>
  );
}

export default App;
