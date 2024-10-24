import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <section className='bg-indigo-400 text-white text-5xl h-96 flex flex-col items-center justify-center'>
      Hello buy from us
      <Link to='/products' className="bg-indigo-950 text-wihte text-2xl px-3 py-1 mt-6 rounded-md">Buy here</Link>
    </section>
  )
}

export default Header
