import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
  return (
    <div className='not-found'>
        <h2>sorry</h2>
        <p>page not found</p>
        <Link to='/'>back to the home page</Link>
    </div>
  )
}

export default NotFound