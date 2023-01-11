import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {v4 as uuidv4} from 'uuid';
import {useDispatch} from 'react-redux'
import ReactStars from "react-rating-stars-component";



const ProductList = (props) => {
    const dispatch=useDispatch()
  const [btn, setBtn] = useState("Add To Cart");
  const [click, setClick] = useState(false);

  const adClass=()=>{
    setClick(!click);
    
  }
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const handleClick = () => {
    const products = {
      id: uuidv4(),
      img:props.img,
      name: props.name,
      title: props.title,
      price: props.price,
      amount: 1,
      total: props.price,
    };
    dispatch({
      type: "ADD_CART",
      payload: products,
    });
    setBtn("Go to Cart");
  };

  const addwish=()=>{
    const products = {
      id: uuidv4(),
      img:props.img,
      name: props.name,
      title: props.title,
      price: props.price,
      amount: 1,
      total: props.price,
    };
    dispatch({
      type: "ADD_WISH",
      payload: products,
    });
  }
  return (
    <>
      <div className="card products wrap">
        <div className="item-product">
          <a className="product-thumb-link">
            <img src={props.img} alt="product1" className="img-fluid"/>
          </a>
        </div>
        <div className="card-body">
        <div className="product-info">
        <div className="d-flex justify-content-between py-3">
          <a className="cat-parent">{props.name}</a>
          <button className="btn wishlist" onClick={addwish}>
            <i className={`fa fa-heart ${click?'text-danger':' '}`} onClick={adClass}></i>
          </button>
        </div>
        <h4 className="product-title">
          <a>{props.title}</a>
        </h4>
        <div className="product-price">
          <ins><span className="money text-white">${props.price}</span></ins>
        </div>
        <div className="d-flex align-items-center justify-content-between py-1">
          <div className="rating">
          <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
          </div>
        </div>
      </div>
          {btn === "Add To Cart" ? (
            <button className="btn btn-outline-primary" onClick={handleClick}>
              {btn}
            </button>
          ) : (
            <Link to="/Cart"><button className="btn btn-outline-success">
              {btn}
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
