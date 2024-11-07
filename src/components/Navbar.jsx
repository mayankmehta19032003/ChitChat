import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">ChitChat</span>
      <div className="user">
        <img src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
        <span>Mayank</span>
        <button>logout</button>
      </div>
    </div>
  )
}

export default Navbar
