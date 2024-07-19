import React from 'react';

const Footer = () => {
  return (
    <footer className='py-4 bg-accent p-3'>
      <div className='container mx-auto flex items-center justify-between'>
        <nav className='flex space-x-4'>
          <a href='#About' className='text-2xl text-white hover:underline'>About</a>
          <a href='#Menu' className='text-2xl text-white hover:underline'>Menu</a>
          <a href='#Contact-Us' className='text-2xl text-white hover:underline'>Contact Us</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer