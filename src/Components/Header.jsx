import React, { useEffect, useRef, useState } from 'react'
import Container from './SubComponents/Container'
import { FaBars } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiXMark } from "react-icons/hi2";

const Header = () => {
  let [cartModal, setCartModal] = useState(false)

  let cartRef = useRef()

  useEffect(() => {
    document.body.addEventListener('click', (e)=>{
      if(!cartRef.current.contains(e.target)){
        setCartModal(false)
      }
    })
  }, [])
  


  return (
    <header className='mt-3 md:mt-5'>
      <Container>
        <div className='py-2 md:py-4 px-4 md:px-7 bg-gradient-to-r from-[rgba(26,136,149,1)] to-[rgba(26,165,170,1)] rounded-xl'>
          <div className='flex justify-between items-center'>

            <div>
              <div><FaBars className='text-base md:text-2xl text-white cursor-pointer' /></div>
            </div>

            <div>
              <img src='images/logo.png' alt="Logo" className='max-w-[80px] md:max-w-[100px]' />
            </div>

            <div ref={cartRef} className='relative'>

              <div onClick={()=>setCartModal(!cartModal)}><MdOutlineShoppingCart className='text-2xl md:text-3xl text-white cursor-pointer' /></div>

              {cartModal &&
                <div className='w-[200px] md:w-[350px] px-2 md:px-5 pt-5 pb-10 bg-white border border-gray-200 absolute top-[150%] right-0 rounded-md overflow-hidden'>
                  <p className='text-center text-sm md:text-base text-black font-medium'>Cart id empty now!</p>

                  <div onClick={()=>setCartModal(false)} className='absolute bottom-0 left-0 w-full py-1 bg-red-200 text-center text-xs md:text-sm cursor-pointer'>Close</div>
                </div>
              }

            </div>

          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header