import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    
    setProducts(data);
  }

  const fetchCart = async () => {
    const response = await commerce.cart.retrieve();
    console.log(response);
    setCart(response);
  }

  const handleAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);

    setCart(response.cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])
  // empty dependence, run during start only


  return (
    <Router>
      <div>
        <Navbar totalItems={cart.total_items}/>
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
