import React from 'react'
import Container from './SubComponents/Container'

const Features = () => {
  return (
    <section className='my-[100px]'>
      <Container>

        <div className='max-w-[90%] mx-auto text-center translate-y-[-45px]'>
          <h2 className='text-7xl text-[#11151C] font-bold italic mb-10'>Features Features Features</h2>
          <p className='text-[#11151C] text-2xl leading-9'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>

        <div className='flex flex-col gap-10'>
          <div className='flex justify-center gap-10'>

            <div className='w-8/12 bg-[rgba(217,217,217,0.3)] rounded-3xl flex justify-center items-center'>
              <div>
                <h3 className='text-[#11151C] text-4xl italic font-bold'>Feature One</h3>
                <p className='text-[#11151C] text-xl max-w-[500px] mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
              </div>
            </div>

            <div className='w-4/12'>
              <img src="images/feature1.png" alt="Features Image" className='w-full max-w-full rounded-3xl' />
            </div>

          </div>

          <div className='flex justify-center gap-10'>

            <div className='w-4/12'>
              <img src="images/feature2.png" alt="Features Image" className='w-full max-w-full rounded-3xl' />
            </div>

            <div className='w-8/12 bg-[rgba(217,217,217,0.3)] rounded-3xl flex justify-center items-center'>
              <div>
                <h3 className='text-[#11151C] text-4xl italic font-bold'>Feature One</h3>
                <p className='text-[#11151C] text-xl max-w-[500px] mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
              </div>
            </div>

          </div>

          <div className='flex justify-center gap-10'>

            <div className='w-8/12 bg-[rgba(217,217,217,0.3)] rounded-3xl flex justify-center items-center'>
              <div>
                <h3 className='text-[#11151C] text-4xl italic font-bold'>Feature Three</h3>
                <p className='text-[#11151C] text-xl max-w-[500px] mt-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.</p>
              </div>
            </div>

            <div className='w-4/12'>
              <img src="images/feature3.png" alt="Features Image" className='w-full max-w-full rounded-3xl' />
            </div>

          </div>
        </div>

      </Container>
    </section>
  )
}

export default Features