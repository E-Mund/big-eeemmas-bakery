import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='p-2'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='flex items-center -ml-20'>
          <Image src='/favicon.ico' alt='Bakery Logo' width={200} height={200} />
        </div>
        <nav className='flex text-white space-x-4 -mr-20 bg-accent rounded-full p-3'>
          <a href='#About' className='text-2xl hover:underline'>About</a>
          <a href='#Menu' className='text-2xl hover:underline'>Menu</a>
          <a href='#Contact-Us' className='text-2xl hover:underline'>Contact Us</a>
        </nav>
      </div>
    </header>
  );
}

export default Header