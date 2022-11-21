import React from 'react'
import { ArrowUp } from '../assets/icons/ArrowUp'
import { COLORS } from '../config/Color'

const ScrollTop = () => {
  return (
    <div className={`text-gray-700 flex self-end cursor-pointer`} onClick={()=>window.scrollTo({top: 0, behavior:"smooth"})}>
        <ArrowUp />
        Return to Top
    </div>
  )
}

export default ScrollTop