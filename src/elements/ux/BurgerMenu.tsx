import React, { FC, Fragment, memo } from 'react'
import { Children, ClassName } from '~types'
import { Menu, Transition } from '@headlessui/react'

interface BurgerMenuProps {
  children: Children
  className?: ClassName
  options: string[]
}

const BurgerMenu: FC<BurgerMenuProps> = props => {
  const { children, className, options } = props
  const locale = localStorage.getItem('gatsby-intl-language')

  return (
    <div className={`relative mt-1 w-fit inline-block text-left ${className}`}>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 bg-opacity-20">{children}</Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="transform opacity-0 scale-90"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-150"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-90"
        >
          <Menu.Items className="absolute left-0 w-fit mt-1 p-10 rounded-8 bg-neutral-13 border border-neutral-9 shadow-drop text-white">
            {options.map((text, index) => (
              <div key={index} className="px-1 py-1 ">
                <Menu.Item>
                  {({ active }) => (
                    <div
                      className={
                        'w-full text-left text-14 cursor-pointer select-none relative transition-colors ' +
                        'text-white-#FFFFFF hover:bg-neutral-7 focus:bg-neutral-7 transition-transform transform hover:-translate-y-2 focus:-translate-y-2 whitespace-nowrap'
                      }
                    >
                      {text}
                    </div>
                  )}
                </Menu.Item>
              </div>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default memo(BurgerMenu)
