import React from 'react'
import { Link } from 'react-router-dom'

const Page404 = () => {
  return (
    <>
    <div className='text-center error'>
      <h1>404</h1>
      <h1>Page Not Found</h1>
      <p>We're sorry,the page you request could not be found</p>
      <p>Please go back to the homepage</p>
      <Link to="/"><button className='btn btn-outline-primary rounded-pill px-4'>Go Home</button></Link>
    </div>
    </>
  )
}

export default Page404
