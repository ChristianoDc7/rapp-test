import React from 'react'
import useMediaQuery from '../hooks/useMediaQuery'

export const Card = ({label}: {label: string}) => {
    const isSmall = useMediaQuery("(max-width: 600px)")

  return (
    <div className={`bg-[#909090] ${isSmall ? "w-full": "w-1/2"} p-7 flex flex-col justify-end`} style={{minHeight:"250px"}}>
        <h3 className='text-xl'>{label}</h3>
        <a href="#" className='underline'>Find out there</a>
    </div>
  )
}
