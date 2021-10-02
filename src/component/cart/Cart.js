import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {count}=props
    const price=count.reduce((previous,product)=>previous+product.price,0);
    let shipping=0;
    let total=0;
    let tax=0;
    let grand=0;
    for (const product of count) {
        // price=price+product.price
shipping=shipping+product.shipping
        total=price+shipping
        tax=total*0.1
        grand=total+tax
    }
    return (
        <div className="container">
              <h3>Order Summary</h3>
               <p>Items ordered: {count.length}</p>
               <table>
                   <tbody>
                   <tr>
                       <td>Items:</td>
                       <td>${price.toFixed(2)}</td>
                   </tr>
                   <tr>
                       <td>Shipping & Handling:</td>
                       <td>${shipping.toFixed(2)}</td>
                   </tr>
                   <tr>
                       <td>Total before tax:</td>
                       <td>${total.toFixed(2)}</td>
                   </tr>
                   <tr>
                       <td>Estimated tax:</td>
                       <td>${tax.toFixed(2)}</td>
                   </tr>
                   <tr className="total-price">
                        <td>Order total:</td>
                       <td>${grand.toFixed(2)}</td>
                   </tr>
                   </tbody>
               </table>
        </div>
    );
};

export default Cart;