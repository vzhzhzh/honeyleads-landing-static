import React, { memo } from 'react'
import { IconProps } from '~svg'
import cls from 'classnames'

const BurgerMenuIcon: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg {...otherProps} className={cls('', className)} width='55' height='55' viewBox='0 0 55 55'
         fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path
        d='M53.663 27.5287C53.663 42.0345 41.9036 53.7938 27.3978 53.7938C12.892 53.7938 1.13267 42.0345 1.13267 27.5287C1.13267 13.0228 12.892 1.26353 27.3978 1.26353C41.9036 1.26353 53.663 13.0228 53.663 27.5287Z'
        fill='white' fillOpacity='0.2' stroke='#E7E7E7' strokeWidth='0.890344' />
      <path d='M18.0508 28.1973L27.3994 37.5459L36.748 28.1973' stroke='#373773' strokeWidth='1.33552'
            strokeLinecap='round' strokeLinejoin='round' />
      <path d='M27.3983 17.5127V37.5454' stroke='#373773' strokeWidth='1.33552' strokeLinecap='round'
            strokeLinejoin='round' />
    </svg>

  )
}

export default memo(BurgerMenuIcon)