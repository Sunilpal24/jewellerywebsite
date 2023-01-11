import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import ReactStars from "react-rating-stars-component";
import {useDispatch} from 'react-redux'

const WishList2 = (props) => {
    const dispatch=useDispatch((state)=>state.wishlist)
    const [btn, setBtn] = useState("Add To Cart");
    const [click, setClick] = useState(true);

    const ratingChanged = (newRating) => {
      console.log(newRating);
    };
    const handleClick = () => {
      const products = {
        id: props.id,
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

    const handleRmv = () => {
        const products = {
          id: props.id,
          name: props.name,
          des: props.des,
          price: props.price,
        };
        dispatch({
          type: "REMOVE_WISH",
          payload: products.id,
        });
        setClick(!click);
      };
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
          <button className="btn wishlist">
            <i className={`fa fa-heart ${click?'text-danger':' '}`} onClick={handleRmv}></i>
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
            <Link to="/Cart" className="btn btn-outline-success">
              {btn}
            </Link>
          )}
         
        </div>
      </div>
    </>
  )
}

export default WishList2
