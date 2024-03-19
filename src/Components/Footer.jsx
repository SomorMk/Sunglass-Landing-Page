import React from 'react'
import Container from './SubComponents/Container'

const Footer = () => {
  return (
    <footer className='mb-6'>
        <Container>
            <div className='py-4 px-7 bg-gradient-to-r from-[rgba(26,136,149,1)] to-[rgba(26,165,170,1)] rounded-xl'>
                <div className='flex justify-center'>
                    <img src='images/logo.png' alt="Logo" className='max-w-[120px]' />
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer