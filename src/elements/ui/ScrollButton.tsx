import React, { forwardRef } from 'react'

import Button, { ButtonProps } from './Button'

type Props = ButtonProps & {
  scrollTo: string
}

const ScrollButton = forwardRef<HTMLButtonElement, Props>(({ scrollTo, ...props }, ref) => {
  const handleClick = () => {
    const elem = document.getElementById(scrollTo)
    if (elem !== null) {
      elem.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return <Button {...props} onClick={handleClick} ref={ref} />
})

export default ScrollButton
