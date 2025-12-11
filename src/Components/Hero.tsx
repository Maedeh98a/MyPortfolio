import React from 'react'

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-6 md:px-16">
        <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
            Hi, I'm <span className='text-indigo-500'>Maedeh</span>

        </h1>
        <p className='mt-4 text-lg md:text-xl text-gray-600'>
            Frontend Developer 
        </p>
        <button className='mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700 transition'>
            View my work
        </button>
    </section>
  )
}

export default Hero