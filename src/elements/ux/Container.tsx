import React, { FC, memo } from 'react'
import { ClassName } from '~types'
import cls from 'classnames'

interface ContainerProps {
  className?: ClassName
}

const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={cls('max-w-[85rem] w-full px-20 mx-auto', className)}>
      {children}
    </div>
  )
}

export default memo(Container)