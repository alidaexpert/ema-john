import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../products/Product';
import './Shop.css'
const Shop = () => {
    const [products,setProducts]=useState([]);
    const [count,setCount]=useState([])
    // const [price,setPrice]=useState(0)
    // // const [count,setCount]=useState(0)
    // const [shipping,setShipping]=useState(0)
    // const[total,setTotal]=useState(0)
    // const [tax,setTax]=useState(0)
    // const[grand,setGrand]=useState(0)

    useEffect(()=>{
        fetch('./products.JSON')
        .then(ref=>ref.json())
        .then(data=>setProducts(data))},[]
    )
    const handleAddToCart=product=>{
        console.log(product.price, product.shipping)
const newCount=[...count,product]
setCount(newCount)
        // const newCount=count+1
        // setCount(newCount)
        // const newPrice=price+product.price
        // setPrice(newPrice)
        // const newShipping=shipping +product.shipping
        // setShipping(newShipping)
        // const newTotal=newPrice+newShipping
        // setTotal(newTotal)
        // const newTax=newTotal*0.1
        // setTax(newTax)
        // const newGrand=newTotal+newTax
        // setGrand(newGrand)
    }
    return ( 
    <div>
        <div className="search-div">
                <input type="text" placeholder="type here to search" />
                <a href="/review"> <i class="fas fa-shopping-cart"></i> <span>{count.length}</span> </a>
        </div>
        <div className="shop-container">
           <div className="producs-container">
               {
                   products.map(product=><Product object={product} handler={handleAddToCart} key={product.key}></Product>)
               }
           </div>
           <div className="cart-container">
             <Cart count={count}></Cart>
               <button className="product-btn">Review your order</button>
           </div>
        </div>
        </div>
    );
};

export default Shop;