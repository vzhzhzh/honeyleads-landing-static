import React, { FC, memo } from 'react'
import { Button } from '~ui'
import { Container } from '~ux'
import * as Icon from '~svg'

interface MarketingPlatformProps {
}

const MarketingPlatform: FC<MarketingPlatformProps> = () => {
  const handleButtonClick = () => {
    window.scrollBy(0, 1000000)
  }
  return (
    <Container>
      <div className='grid grid-cols-2 pt-150 md:pt-80 md:block'>
        <div className='s'>
          <div className='text-34 leading-41 text-purple/60 font-medium xs:text-14 xs:leading-17'>HR маркетинг
            платформа
          </div>
          <h1 className='inline text-60 leading-70 text-[#373773] font-black xs:text-25 xs:leading-29'>Поток
            кандидатов <div
              className='inline text-[#FF7143]'>на любые вакансии</div></h1>
          <div className='block md:hidden'>
            <ul className='list-disc font-display text-[#373773] text-23 leading-35 pl-30 mt-55 md:mt-30'>
              <li>запуск новой вакансии или города за 1 день</li>
              <li>любые проблемные вакансии/города</li>
              <li>опытная команда маркетологов</li>
            </ul>
            <div className='min-w-fit flex items-center gap-x-25 mt-85 md:mt-50'>
              <Button className='font-display' variant='primary' size='lg'>Привлечь кандидатов</Button>
              <Icon.ScrollDown onClick={handleButtonClick} className='cursor-pointer' />


            </div>
          </div>
        </div>
        <img className='rotate-[2.32deg]' src='/images/main.png' alt='' />
        <div className='hidden md:block'>
          <ul
            className='list-disc font-display text-[#373773] text-23 leading-35 pl-30 mt-55 md:mt-30 xs:text-14 xs:leading-25'>
            <li>запуск новой вакансии или города за 1 день</li>
            <li>любые проблемные вакансии/города</li>
            <li>опытная команда маркетологов</li>
          </ul>
          <div className='min-w-fit flex gap-x-25 mt-85 md:mt-50'>
            <Button className='font-display sm:min-w-full xs:text-14 xs:leading-24 xs:px-40 xs:py-8' variant='primary'
                    size='lg'>Привлечь кандидатов</Button>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default memo(MarketingPlatform)