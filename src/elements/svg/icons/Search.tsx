import React, { memo } from 'react'
import { IconProps } from '~svg'
import cls from 'classnames'

const SearchIcon: React.FC<IconProps> = props => {
  const { className, ...otherProps } = props

  return (
    <svg
      className={cls('fill-current', className)}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...otherProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 9.5C2 13.6421 5.35786 17 9.5 17C11.2316 17 12.8262 16.4131 14.0957 15.4275C14.1435 15.5286 14.2092 15.6234 14.2929 15.7071L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L15.7071 14.2929C15.6234 14.2092 15.5286 14.1435 15.4275 14.0957C16.4131 12.8262 17 11.2316 17 9.5C17 5.35786 13.6421 2 9.5 2C5.35786 2 2 5.35786 2 9.5ZM4 9.5C4 6.46243 6.46243 4 9.5 4C12.5376 4 15 6.46243 15 9.5C15 12.5376 12.5376 15 9.5 15C6.46243 15 4 12.5376 4 9.5Z"
        fill=""
      />
    </svg>
  )
}

export default memo(SearchIcon)
