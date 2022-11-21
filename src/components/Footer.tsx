import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

const Footer = () => {
    const isSmall = useMediaQuery("(max-width: 600px)")

  return (
    <div className={`p-8 w-full flex ${isSmall && "flex-col place-items-center text-center gap-3"} justify-between footer-grad`}>
        <div>
            &copy; Proximity Worldwide 2018. All Rights Reserved. <u className='cursor-pointer'>Privacy Statments</u>
        </div>
        <div className='flex gap-2'>
            <a href="#"><img src="/icons/facebook.svg"/></a>
            <a href="#"><img src="/icons/linkedin.svg"/></a>
            <a href="#"><img src="/icons/twitter.svg"/></a>
        </div>
    </div>
  )
}

export default Footer