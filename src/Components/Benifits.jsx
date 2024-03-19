import React from 'react'
import Container from './SubComponents/Container'

const Benifits = () => {
  return (
    <section className='mt-[80px] md:mt-[140px] pb-[950px] sm:pb-[600px] md:pb-[400px]'>
        <Container>
            <div className='w-full h-[300px] bg-gradient-to-b from-[rgba(247,180,171,0.5)] to-[rgba(238,118,113,0.5)] rounded-xl'>

                <div className='max-w-[90%] mx-auto text-center translate-y-[-15px] md:translate-y-[-45px]'>
                    <h2 className='text-2xl md:text-7xl text-[#11151C] font-bold italic mb-5 md:mb-10'>Benefits Benefits Benefits</h2>
                    <p className='text-[#11151C] text-base md:text-2xl leading-6 md:leading-9'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </div>

                <div className='flex flex-wrap justify-center gap-10 mt-10 md:mt-0'>

                  <div>
                    <div className='text-center w-[230px] md:w-[300px] mx-auto rounded-xl relative overflow-hidden group'>
                      <img src="images/benifit1.png" alt="Benifit Image" className='w-full rounded-xl' />

                      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-[1] after:z-[-1] before:z-[-1] after:absolute after:w-0 after:h-[420px] after:bg-[rgba(111,255,229,0.5)] after:top-[-210px] after:left-[-212px] after:rotate-45 before:absolute before:w-[420px] before:h-[420px] before:bg-[rgba(234,21,144,0.5)] before:top-[300px] before:left-[300px] before:rotate-[-45deg] after:duration-500 before:duration-500 group-hover:after:w-[420px] group-hover:before:top-[84px] group-hover:before:left-[87px]'>
                        <p className='text-lg text-black font-medium px-10 py-2 bg-white rounded-lg invisible group-hover:visible'>Info</p>
                      </div>
                    </div>
                    <div className='text-center w-[230px] md:w-[300px] mx-auto mt-6'>
                      <h3 className='text-[#11151C] text-xl md:text-3xl italic font-bold'>Benefit 1</h3>
                      <p className='text-[#11151C] text-base md:text-xl mt-1 md:mt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                  </div>

                  <div>
                    <div className='text-center w-[230px] md:w-[300px] mx-auto rounded-xl relative overflow-hidden group'>
                      <img src="images/benifit2.png" alt="Benifit Image" className='w-full rounded-xl' />

                      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-[1] after:z-[-1] before:z-[-1] after:absolute after:w-0 after:h-[420px] after:bg-[rgba(111,255,229,0.5)] after:top-[-210px] after:left-[-212px] after:rotate-45 before:absolute before:w-[420px] before:h-[420px] before:bg-[rgba(234,21,144,0.5)] before:top-[300px] before:left-[300px] before:rotate-[-45deg] after:duration-500 before:duration-500 group-hover:after:w-[420px] group-hover:before:top-[84px] group-hover:before:left-[87px]'>
                        <p className='text-lg text-black font-medium px-10 py-2 bg-white rounded-lg invisible group-hover:visible'>Info</p>
                      </div>
                    </div>
                    <div className='text-center w-[230px] md:w-[300px] mx-auto mt-6'>
                      <h3 className='text-[#11151C] text-xl md:text-3xl italic font-bold'>Benefit 2</h3>
                      <p className='text-[#11151C] text-base md:text-xl mt-1 md:mt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                  </div>

                  <div>
                    <div className='text-center w-[230px] md:w-[300px] mx-auto rounded-xl relative overflow-hidden group'>
                      <img src="images/benifit3.png" alt="Benifit Image" className='w-full rounded-xl' />

                      <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center z-[1] after:z-[-1] before:z-[-1] after:absolute after:w-0 after:h-[420px] after:bg-[rgba(111,255,229,0.5)] after:top-[-210px] after:left-[-212px] after:rotate-45 before:absolute before:w-[420px] before:h-[420px] before:bg-[rgba(234,21,144,0.5)] before:top-[300px] before:left-[300px] before:rotate-[-45deg] after:duration-500 before:duration-500 group-hover:after:w-[420px] group-hover:before:top-[84px] group-hover:before:left-[87px]'>
                        <p className='text-lg text-black font-medium px-10 py-2 bg-white rounded-lg invisible group-hover:visible'>Info</p>
                      </div>
                    </div>
                    <div className='text-center w-[230px] md:w-[300px] mx-auto mt-6'>
                      <h3 className='text-[#11151C] text-xl md:text-3xl italic font-bold'>Benefit 3</h3>
                      <p className='text-[#11151C] text-base md:text-xl mt-1 md:mt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                  </div>

                </div>

            </div>
        </Container>
    </section>
  )
}

export default Benifits