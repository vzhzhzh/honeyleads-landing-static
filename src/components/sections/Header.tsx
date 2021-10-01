import { Link } from 'gatsby'
import React, { memo } from 'react'
import { useSiteMetadata } from '~hooks'
import * as Icon from '~svg'
import { Container, BurgerMenu } from '~ux'

const breaksPage: string[] = ['Кейсы', 'Прайс', 'FAQ', 'Компания', 'Контакты']

export interface HeaderProps {
}

const Header: React.FC<HeaderProps> = props => {
  const {} = props

  const { navigation } = useSiteMetadata()

  return (
    <header className='text-20 leading-25 pt-40 bg-[#F9F9F8]'>
      <Container>
        <nav className='' aria-label='Top'>
          <div className='flex items-center justify-between'>
            <BurgerMenu className='hidden md:block' options={breaksPage}>
              <Icon.BurgerMenu />
            </BurgerMenu>
            <Link to='/'>
              <Icon.Logo className='w-260 h-86 xs:w-170' />
            </Link>
            {/*<div className='flex gap-x-60 text-[#ADADAD] md:hidden'>*/}
            {/*  {breaksPage.map((text, index) => (*/}
            {/*    <div*/}
            {/*      key={index}*/}
            {/*      className='cursor-pointer transition-colors hover:text-[#FF7143]'*/}
            {/*    >*/}
            {/*      {text}*/}
            {/*    </div>*/}
            {/*  ))}*/}
            {/*</div>*/}
            <div
              className='font-display text-23 text-purple/50 border border-black-2/10 rounded-full py-15 px-33 sm:hidden'>8(495)
              444 55 66
            </div>
            <a className="hidden sm:block" href='tel:+74954445566'><Icon.Phone /></a>
          </div>
        </nav>
      </Container>
    </header>
  )
}

export default memo(Header)
