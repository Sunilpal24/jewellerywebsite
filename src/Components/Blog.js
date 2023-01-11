import React from 'react'
import {Link} from  'react-router-dom'


const Blog = () => {
  return (
    <section id="blog">
    <div className="blog-section wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-2 text-content text-center">
            <h2>LATEST NEWS FROM THE BLOG</h2>
            <p>This unique jewelry is handcrafted on the beautiful island of Nantucketusing fine silver and semi
              precious stones. View glasse fasion collection 2018 by fanbong</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="blog-item">
              <a href="#" className="card-thumb">
                <img src="image/img/b-1.jpg" alt="" className="img-fluid"/>
              </a>
              <div className="text-center px-2 mt-2">
                <h2>Girls Wear tops</h2>
                <p>Our urban and streetwear fasion place is no old navy, Banana Republic or a walmart clothing store,
                  god forbid. we've quickly become...</p>
                  <Link to="/BlogPage" className="main-btn">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="blog-item">
              <a href="#" className="card-thumb">
                <img src="image/img/b-2.jpg" alt="" className="img-fluid"/>
              </a>
              <div className="text-center px-2 mt-2">
                <h2>Girl A Necklece</h2>
                <p>Our urban and streetwear fasion place is no old navy, Banana Republic or a walmart clothing store,
                  god forbid. we've quickly become...</p>
                  <Link to="/BlogPage" className="main-btn">Read More</Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 mb-4 mb-lg-0">
            <div className="blog-item">
              <a href="#" className="card-thumb">
                <img src="image/img/b-3.jpg" alt="" className="img-fluid"/>
              </a>
              <div className="text-center px-2 mt-2">
                <h2>Girls Wear Rings</h2>
                <p>Our urban and streetwear fasion place is no old navy, Banana Republic or a walmart clothing store,
                  god forbid. we've quickly become...</p>
                <Link to="/BlogPage" className="main-btn">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Blog
