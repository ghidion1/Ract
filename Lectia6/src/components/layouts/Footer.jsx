import React from 'react'

const Footer = () => {
    const date =new Date();
    const year=date.getFullYear();
  return (
    <footer className='h-20 flex items-center justify-center bg-indigo-600 text-white text-lg fixed bottom-0 w-full'>
      Toate Drepturile sunt rezervate {year}
    </footer>
  )
}

export default Footer;
