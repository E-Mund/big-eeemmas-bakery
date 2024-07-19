import { Caveat } from 'next/font/google';

const caveat = Caveat({
  subsets: ['latin']
});

export default function Home() {
  return (
    <main className='flex flex-col items-center'>
      <div className='bg-accent rounded-lg p-6 max-w-screen-lg'>
        <div className='flex justify-center'>
          <h1 className={`${caveat.className} text-6xl text-white font-bold underline`}>
            Welcome to Big Eeemma's Bakery!
          </h1>
        </div>
        <div className='pt-8'>
          <h1 id='About' className={`${caveat.className} text-4xl text-white py-2 font-semibold`}>About Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste consectetur ex molestiae voluptatem placeat sint consequatur! Ducimus, veniam nulla, dolorem facilis quidem, animi est ratione tenetur expedita libero mollitia?
          </p>
        </div>
        <div className='pt-4'>
          <h1 id='Menu' className={`${caveat.className} text-4xl text-white py-3 font-semibold`}>Our Menu</h1>
          <div className='carousel carousel-center rounded-box'>
            <div className='carousel-item'>
              <img src='https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg' alt='Pizza' />
            </div>
            <div className='carousel-item'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg'
                alt='Pizza' />
            </div>
            <div className='carousel-item'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg'
                alt='Pizza' />
            </div>
            <div className='carousel-item'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg'
                alt='Pizza' />
            </div>
            <div className='carousel-item'>
              <img src='https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg' alt='Pizza' />
            </div>
            <div className='carousel-item'>
              <img src='https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg' alt='Pizza' />
            </div>
            <div className='carousel-item'>
              <img
                src='https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg'
                alt='Pizza' />
            </div>
          </div>
          <p className='py-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti minima cumque in vitae eligendi maiores iste ducimus facilis non autem quo aspernatur cum ut commodi, omnis pariatur veniam saepe eos?
          </p>
          <div className='flex justify-center pt-4'>
          <button className='btn btn-outline bg-primary'>Download Menu</button>
          </div>
        </div>
        <div className='pt-4'>
          <h1 id='Contact-Us' className={`${caveat.className} text-4xl text-white py-3 font-semibold`}>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum iste consectetur ex molestiae voluptatem placeat sint consequatur! Ducimus, veniam nulla, dolorem facilis quidem, animi est ratione tenetur expedita libero mollitia?
          </p>
        </div>
      </div>
    </main>
  );
}
