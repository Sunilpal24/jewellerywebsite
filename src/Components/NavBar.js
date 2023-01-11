import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {NavLink} from 'react-router-dom'

const NavBar = () => {
  const cart=useSelector((state)=>state.cart)
  const wish=useSelector((state)=>state.wishlist)
  const amount=cart.reduce((amount,item)=>amount+=item.amount,0)
  const amount2=wish.reduce((amount,item)=>amount+=item.amount,0)
  
  const [scroll, setScroll]=useState(false);
  
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 20)
    })
  },[])

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");    
    })
})
  return (
    <>
      <header>
        <div className="top-header">
          <div className="container d-flex justify-content-between align-items-center py-3">
            <span>Free shipping for orders over </span>
            <span>Call: 800-6688-999</span>
          </div>
        </div>

        <nav className={`navbar navbar-expand-lg navigation-wrap ${scroll? "scroll-on":" "}`}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img src="image/logo1.png" alt="logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-stream navbar-toggler-icon"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Products">
                    Products
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/BlogPage">
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item heart">
                  <NavLink className="nav-link" to="/WishList"><i className='fa fa-heart text-danger'><span className="badge badge-danger">{amount2}</span></i></NavLink> 
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/Cart"><i className='fa fa-shopping-cart'><span className="badge badge-danger">{amount}</span></i></NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
     
    </>
  );
};

export default NavBar;
