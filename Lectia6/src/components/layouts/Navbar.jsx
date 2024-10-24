import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='bg-indigo-800 text-white'>
        <div className='container m-auto flex items-center'>
            <Link to="/" className='transition duration-950ms; hover:bg-indigo-900 py-3 px-4 rounded-md'>Home</Link> 
            <Link to="/products" className='transition duration-950ms; hover:bg-indigo-900 py-3 px-4 rounded-md'>Products</Link> 
            <Link to="/contacts" className='transition duration-950ms; hover:bg-indigo-900 py-3 px-4 rounded-md'>Contacts</Link> 
           
           
        </div>
    </nav>
  )
}

export default Navbar