import './cart.css';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../pages/home.jsx';

export default function Cart({ close }) {
    const { products, cart, AddToCart } = useContext(CartContext);

    const [total, settoal] = useState(0);

    useEffect(() => {

        settoal(Math.floor(cart.reduce((acc, id) => acc + products.find((product) => product.id === id).price, 0)))

    }, [cart, products])

    return (
        <>
            <div className="overlay" onClick={() => close()}></div>
            <div className="sidebar">
                <button
                    onClick={() => close()}
                    className="close-btn"
                >
                    ×
                </button>

                <div className="cart-container">
                    <label className="title">Your Cart</label>

                    <div className="products">
                        {products.filter((product) => cart.includes(product.id)).length > 0 ? (
                            products.filter((product) => cart.includes(product.id)).map((product) => (
                                <div className="product" key={product.id}>

                                    <button className="delete-btn" onClick={()=> AddToCart(product.id)}>
                                        <i className="bi bi-trash delete-icon"></i>
                                    </button>

                                    <div className="card-img"><div className="img"></div></div>
                                    <div >
                                        <span className="product-title">{product.title}</span>
                                        <p className="product-description">{product.description}</p>
                                    </div>
                                    <label className="price">${product.price}</label>
                                </div>
                            ))
                        ) : (
                            <div className="empty-cart">
                                <svg /* Empty Cart Icon */ className="empty-cart-icon" />
                                <span className="empty-cart-message">Your cart is empty</span>
                            </div>
                        )}
                    </div>

                    <div className="checkout-section">
                        <div className="checkout-footer">
                            <label className="total-price">
                               Total :{total}
                            </label>
                            <button className="checkout-btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
