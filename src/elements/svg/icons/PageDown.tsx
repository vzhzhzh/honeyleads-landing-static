import React, { memo } from 'react'
import cls from 'classnames'
import { IconProps } from '~svg'

const PageDown: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg {...otherProps} className={cls('fill-current', className)} width='21' height='23' viewBox='0 0 21 23'
         fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M1.05078 12.1973L10.3994 21.5459L19.748 12.1973' stroke='#373773' strokeWidth='1.33552'
            strokeLinecap='round' strokeLinejoin='round' />
      <path d='M10.3983 1.5127V21.5454' stroke='#373773' strokeWidth='1.33552' strokeLinecap='round'
            strokeLinejoin='round' />
    </svg>

  )
}

export default memo(PageDown)
