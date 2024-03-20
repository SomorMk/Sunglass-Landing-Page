import React from 'react'
import Container from './SubComponents/Container'

const Banner = () => {
  return (
    <section className='mt-4 md:mt-8'>
        <Container>
            <div className='bg-heroBg h-[700px] bg-no-repeat bg-cover bg-center rounded-xl'>
                <div className='flex flex-col justify-center items-center h-full pt-[200px] text-center'>
                    <h1 className='text-white text-4xl lg:text-7xl italic font-bold'>The New Art Of Sunglasses</h1>
                    <p className='text-white text-base md:text-2xl text-center leading-6 md:leading-9 max-w-[90%] md:max-w-[75%] mt-10'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <button className='px-16 py-3 bg-white rounded-[100px] text-black text-base md:text-3xl font-bold italic mt-12'>Shop Now</button>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner