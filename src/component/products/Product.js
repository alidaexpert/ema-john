import React from 'react';
import './Product.css'
const Product = (props) => {
    const {category,features,img,key,name,price,priceFraction,seller,shipping,star,
    starCount,stock,url,wholePrice}=props.object
    return (
        <div className="product-item">
        <div className="img-div">
            <img src={img} alt="" />
        </div>
        <div className="text-div">
            <h3 className="name">{name}</h3>
            <div className="description">
                <div className="price">
                    <p>by: {seller}</p>
                    <p>${price}</p>
                    <p><small>only {stock} left in stock - order soon</small></p>
                    <button onClick={()=>props.handler(props.object)} className="product-btn"><i class="fas fa-shopping-cart"></i>add to cart</button>
                </div>
                <div className="review">
                    <p>
                        <i class="fas star fa-star"></i>
                        <i class="fas star fa-star"></i>
                        <i class="fas star fa-star"></i>
                        <i class="fas star fa-star"></i>
                        <i class="far star fa-star"></i>
                    </p>
                    <h3>Features</h3>
                    {
                        features.map(feature=><Feature object={feature} key={feature.description}></Feature>)
                    }
                </div>
            </div>
        </div>
        </div>
    );
};
const Feature=props=>{
    const {description,value}=props.object
    return(
        <div>
            <ul className="feature">
                <li>{description} <span>{value}</span> </li>
            </ul>
        </div>
    )
}

export default Product;