import React, { memo } from 'react'
import { IconProps } from '~svg'
import cls from 'classnames'

const BurgerMenuIcon: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg {...otherProps} className={cls('fill-current', className)} width='32' height='24' viewBox='0 0 32 24'
         fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g opacity='0.4'>
        <path
          d='M29.0552 0H2.94481C1.32106 0 0 1.32284 0 2.95092C0 4.57693 1.32106 5.89983 2.94481 5.89983H29.0552C30.6789 5.89983 32 4.57693 32 2.95092C32 1.32284 30.6789 0 29.0552 0Z'
          fill='black' />
        <path
          d='M29.0552 9.05009H2.94481C1.32106 9.05009 0 10.3729 0 12.001C0 13.627 1.32106 14.9499 2.94481 14.9499H29.0552C30.6789 14.9499 32 13.627 32 12.001C32 10.3729 30.6789 9.05009 29.0552 9.05009Z'
          fill='black' />
        <path
          d='M29.0552 18.1002H2.94481C1.32106 18.1002 0 19.4231 0 21.0511C0 22.6771 1.32106 24 2.94481 24H29.0552C30.6789 24 32 22.6771 32 21.0511C32 19.4231 30.6789 18.1002 29.0552 18.1002Z'
          fill='black' />
      </g>
    </svg>

  )
}

export default memo(BurgerMenuIcon)