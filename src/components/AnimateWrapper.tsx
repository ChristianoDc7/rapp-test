import React, { PropsWithChildren } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'

const AnimateWrapper = (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {animation?: string}) => {
    if(!!props?.animation){
        return (
            <AnimationOnScroll animateIn={props?.animation} {...props}>
                {props?.children}
            </AnimationOnScroll>
    )
    }
  return (
    <div {...props}>
        {props?.children}
    </div>
  )
}

export default AnimateWrapper