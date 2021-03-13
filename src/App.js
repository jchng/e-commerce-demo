import React, { useState, useEffect } from 'react'
import { commerce } from './lib/commerce';
import { Products, Navbar, Cart } from './components';

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
    <div>
      <Navbar totalItems={cart.total_items}/>
      {/* <Products products={products} onAddToCart={handleAddToCart}/> */}
      <Cart cart={cart} />
    </div>
  )
}

export default App
