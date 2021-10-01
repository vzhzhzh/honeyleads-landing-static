import React, { memo } from 'react'
import { IconProps } from '~svg'
import cls from 'classnames'

const VectorArrow: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg {...otherProps} className={cls(className)} viewBox='0 0 79 210' fill='none'
         xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M0.43934 197.439C-0.146447 198.025 -0.146447 198.975 0.43934 199.561L9.98528 209.107C10.5711 209.692 11.5208 209.692 12.1066 209.107C12.6924 208.521 12.6924 207.571 12.1066 206.985L3.62132 198.5L12.1066 190.015C12.6924 189.429 12.6924 188.479 12.1066 187.893C11.5208 187.308 10.5711 187.308 9.98528 187.893L0.43934 197.439ZM1.5 3.5H37V0.5H1.5V3.5ZM75.5 42V158.5H78.5V42H75.5ZM37 197H1.5V200H37V197ZM75.5 158.5C75.5 179.763 58.263 197 37 197V200C59.9198 200 78.5 181.42 78.5 158.5H75.5ZM37 3.5C58.263 3.5 75.5 20.737 75.5 42H78.5C78.5 19.0802 59.9198 0.5 37 0.5V3.5Z'
        fill='#FF7143' />
    </svg>

  )
}

export default memo(VectorArrow)
