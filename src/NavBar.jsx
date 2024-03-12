import React from 'react'
import { Link } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="navbar">
        <h1>Mehdi Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to ='/create'>New Blog</Link>
            <Link to='/blog'>blogs</Link>
        </div>
    </nav>
  )
}

export default NavBar