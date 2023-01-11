import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {v4 as uuidv4} from 'uuid';

const CartList = (props) => {
  const dispatch = useDispatch((state) => state.cart);
  const [click, setClick] = useState(false);

  const adClass=()=>{
    setClick(!click);
    
  }

  const increment = () => {
    const value = {
      id: props.id,
      amount: props.amount,
      price: props.price,
    };
    dispatch({
      type: "inc",
      payload: value,
    });
  };
  const dicrement = () => {
    const value = {
      id: props.id,
      amount: props.amount,
      price: props.price,
      total: props.total,
    };
    dispatch({
      type: "dic",
      payload: value,
    });
  };

  const handleRmv = () => {
    const products = {
      id: props.id,
      name: props.name,
      des: props.des,
      price: props.price,
    };
    dispatch({
      type: "REMOVE_CART",
      payload: products.id,
    });
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
      <div className="card products wrap1 ">
      <div className="row">
        <div className="item-product col-md-4">
          <a className="product-thumb-link">
            <img src={props.img} alt="product1" className="img-fluid" />
          </a>
        </div>
        <div className="col-md-8">
        <div className="card-body ">
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
              <ins>
                <span className="money text-white h5">${props.price}</span>
              </ins>
            </div>
          </div>
          <Link to='/Products'>
          <button className="my-1 btn btn-outline-success">Continue Shopping</button></Link>
          <div className="q-btn">
          <button
            className="btn btn-outline-light"
            onClick={props.amount <= 1 ? handleRmv : dicrement}
          >
            {props.amount === 1 ? "x" : "-"}
          </button>
          <span className="p-2 text-light">{props.amount}</span>
          <button className="btn btn-outline-light" onClick={increment}>
            +
          </button>

          <button
            to="/"
            className="btn btn-outline-danger trash"
            onClick={handleRmv}
          >
           <i className="fa fa-trash"></i>
          </button>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default CartList;
