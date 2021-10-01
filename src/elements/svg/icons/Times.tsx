import React, { memo } from 'react'
import { IconProps } from '~svg'
import cls from 'classnames'

const TimesIcon: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 8 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.35355 1.35355C7.54882 1.15829 7.54882 0.841709 7.35355 0.646447C7.15829 0.451184 6.84171 0.451184 6.64645 0.646447L4 3.29289L1.35355 0.646447C1.15829 0.451184 0.841709 0.451184 0.646447 0.646447C0.451184 0.841709 0.451184 1.15829 0.646447 1.35355L3.29289 4L0.646447 6.64645C0.451184 6.84171 0.451184 7.15829 0.646447 7.35355C0.841709 7.54882 1.15829 7.54882 1.35355 7.35355L4 4.70711L6.64645 7.35355C6.84171 7.54882 7.15829 7.54882 7.35355 7.35355C7.54882 7.15829 7.54882 6.84171 7.35355 6.64645L4.70711 4L7.35355 1.35355Z"
        fill=""
      />
    </svg>
  )
}

export default memo(TimesIcon)
