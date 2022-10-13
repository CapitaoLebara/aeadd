import React from 'react'
import ma from './img/aea.jpg'
const Home = () => {
    
  return (
        <header className='bg-zinc-800 px-20 py-2 w-full fixed text-white '>
            <nav className='flex items-center justify-between'>
                <img src={ma}  className=' border-2 cursor-pointer border-white rounded-[200px] w-14 h-14'  alt="" />
                <ul className='flex gap-8 text-xl'>
                    <li className=' cursor-pointer'>Home</li>
                    <li className=' cursor-pointer'>Ficha</li>
                </ul>
            </nav>
        </header>    
  )
}


export default Home