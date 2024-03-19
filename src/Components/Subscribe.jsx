import React from 'react'
import Container from './SubComponents/Container'

const Subscribe = () => {
  return (
    <section className='mb-[50px]'>
        <Container>
            <div className='py-12 px-10 bg-[#11151C] rounded-[30px]'>

                <div className='max-w-[90%] mx-auto text-center'>

                    <h2 className='text-7xl text-white font-bold italic mb-10'>Subscribe Subscribe Subscribe</h2>

                    <p className='text-white text-2xl leading-9'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>

                    <div className='flex justify-center gap-9 mt-12'>
                        <input type="email" placeholder='Your Email' className='px-16 h-[50px] bg-white rounded-[100px]' />
                        <button className='px-16 h-[50px] bg-white rounded-[100px] text-black text-2xl font-bold italic'>Send</button>
                    </div>

                </div>

            </div>
        </Container>
    </section>
  )
}

export default Subscribe