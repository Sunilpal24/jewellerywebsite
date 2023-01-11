import React from 'react'

const Footer = () => {
  return (
    <footer>
    <div className="footer py-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 text-md-start text-center text-lg-start">
            <div className="footer-logo text-muted mb-3 mb-md-0">
              © 2022. ELEGANCE. All rights reserved.
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="footer-social pt-1">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default Footer
