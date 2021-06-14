import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './Screens/Home/Homescreen';
import ProductScreen from './Screens/Product/ProductScreen';
import CartScreen from './Screens/Cart/CartScreen';
import NavBar from './components/Navbar/Navbar';

function App() {
  return (
    <Router>
          <NavBar />
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
