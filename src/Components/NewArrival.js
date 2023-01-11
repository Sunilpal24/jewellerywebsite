import React from 'react'
import {Link} from 'react-router-dom'

const NewArrival = () => {
  return (
    <section id="new-arrivals">
    <div className="new-arrivals wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-2 text-content text-center">
            <h2>NEW ARRIVALS</h2>
            <p>This unique jewelry is handcrafted on the beautiful island of Nantucketusing fine silver and semi
              precious stones. View glasse fasion collection 2018 by fanbong</p>
          </div>
        </div>
        <div className="row align-item-center">
          <div className="col-sm-4 col-12 p-sm-0 card-banner">
            <div className="card-banner position-relative text-center">
              <Link to="/Products" className="card-thumb">
                <img src="image/img/img-1.jpg" alt="img-1" className="img-fluid"/>
              </Link>
              <div className="banner-info text-center">
                <h2>BRACELETS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <Link to="/Products" className="main-btn">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-12 p-sm-0 card-banner">
            <div className="card-banner position-relative text-center">
              <Link to="/Products" className="card-thumb">
                <img src="image/img/img-2.jpg" alt="img-1" className="img-fluid"/>
              </Link>
              <div className="banner-info text-center">
                <h2>RINGS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <Link to="/Products" className="main-btn">Shop now</Link>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-12 p-sm-0 card-banner">
            <div className="card-banner position-relative text-center">
              <Link to="/Products" className="card-thumb">
                <img src="image/img/img-3.jpg" alt="img-1" className="img-fluid"/>
              </Link>
              <div className="banner-info text-center">
                <h2>EARRINGS</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</p>
                <Link to="/Products" className="main-btn">Shop now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default NewArrival
