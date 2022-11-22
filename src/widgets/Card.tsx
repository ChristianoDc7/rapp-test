import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import AnimateWrapper from '../components/AnimateWrapper'
import useMediaQuery from '../hooks/useMediaQuery'

export const Card = ({label, animation}: {label: string, animation?: string}) => {
    const isSmall = useMediaQuery("(max-width: 600px)")

  return (
    <AnimateWrapper animation={animation}  className={`bg-[#909090] rounded ${isSmall ? "w-full p-3 text-base": "text-xl w-1/2 p-7"}  flex flex-col justify-end`} style={{minHeight:"250px"}}>
          <h3>{label}</h3>
          <a href="#" className='underline'>Find out there</a>
    </AnimateWrapper>
      
  )
}
