import React, { useEffect, useState } from 'react';
import './cart.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cart = () => {
  const [productincart, setProductInCart] = useState([]);
  const [orderValues, setOrderValues] = useState(0);
  const { id } = useParams();

  // Load existing cart from localStorage on mount
  useEffect(() => {
    const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
    setProductInCart(existingCart);
  }, []);

  // Fetch product by ID and add/update it in the cart
  useEffect(() => {
    async function getCartProduct() {
      if (id) {
        const res = await axios.get(`https://dummyjson.com/products/${id}`);
        const newProduct = { ...res.data, quantity: 1 };

        setProductInCart(prev => {
          const existing = prev.find(p => p.id === newProduct.id);
          let updatedCart;
          if (existing) {
            updatedCart = prev.map(p =>
              p.id === newProduct.id ? { ...p, quantity: p.quantity + 1 } : p
            );
          } else {
            updatedCart = [...prev, newProduct];
          }
          localStorage.setItem('cart', JSON.stringify(updatedCart));
          return updatedCart;
        });
      }
    }
    getCartProduct();
  }, [id]);

  // Update order total when cart changes
  useEffect(() => {
    const total = productincart.reduce((sum, product) => sum + (product.price * product.quantity), 0);
    setOrderValues(total);
  }, [productincart]);

  // Remove product from cart
  const handleRemoveFromCart = (productId) => {
    const updatedCart = productincart.filter(product => product.id !== productId);
    setProductInCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Change quantity
  const handleQuantityChange = (productId, quantity) => {
    const updatedCart = productincart.map(product =>
      product.id === productId ? { ...product, quantity: parseInt(quantity) } : product
    );
    setProductInCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className='cart d-flex'>
      <div className='listofproducts w-60 d-flex flex-column row-gap-3 py-3'>
        {productincart && productincart.length > 0 && productincart.map(product => (
          <div key={product.id} className='productInCart'>
            <img src={product.thumbnail} alt="" width="150px" height="150px" />
            <div className='productdetails'>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <h4>Price per item: ${product.price}</h4>
              <label>Quantity: </label>
              <select
                value={product.quantity}
                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
              >
                {[...Array(10).keys()].map(n => (
                  <option key={n + 1} value={n + 1}>{n + 1}</option>
                ))}
              </select>
              <h4>Total: ${product.price * product.quantity}</h4>
              <button
                className='btn btn-danger btn-sm mt-1'
                onClick={() => handleRemoveFromCart(product.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className='productSummary w-40'>
        {productincart.length === 0 && <h2>Your cart is empty</h2>}
        {productincart.length > 0 && <h2>Items in Cart: {productincart.length}</h2>}

        <div className='productsinorder height-100 d-flex flex-column row-gap-3 p-3'>
          {productincart.map(product => (
            <div key={product.id} className='d-flex gap-3 xyz'>
              <img src={product.thumbnail} alt="" width="100px" height="100px" />
              <div className='productdetails'>
                <h5>{product.title}</h5>
                <h6>Quantity: {product.quantity}</h6>
                <h6>Price: ${product.price * product.quantity}</h6>
              </div>
            </div>
          ))}
          {productincart.length > 0 && (
            <h6>Order Total: ${orderValues}</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
