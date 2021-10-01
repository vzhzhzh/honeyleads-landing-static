import React, { FC, memo } from 'react'
import { Container } from '~ux'
import { VectorArrow } from '~svg'
import { useWindowSize } from '~hooks'

interface VacanciesProps {

}

const tasks: string[] = ['Ритейл', 'Контакт-центр', 'Логистика', 'Банки', 'IT']

const Vacancies: FC<VacanciesProps> = ({}) => {
  const { width } = useWindowSize()

  return (
    <div className='bg-[#F9F9F8] sm:pb-40'>
      <Container className='pt-150 xs:pt-40'>
        <div className='flex md:block md:relative'>
          <div className=''>
            <div className='relative flex'>
              <h2 className='text-38 leading-60 font-semibold text-purple inline xs:text-22 xs:leading-26'>Закроем <div
                className='inline text-[#FF7143]'>любые вакансии</div></h2>
              <VectorArrow className='w-79 h-210 absolute -right-100 top-30 md:hidden' />
            </div>
            <div className='text-26 leading-31 font-medium text-purple/70 mt-15 xs:text-14 xs:leading-17'>Особенно хорошо получается:</div>
            <div className='flex flex-wrap gap-30 mt-85 font-semibold text-21 leading-37 text-white md:gap-x-60 xs:text-12 xs:leading-18 xs:gap-10 xs:mt-15'>
              {tasks.map((text, index) => <div key={index} className='bg-[#FF7143] rounded-full py-15 px-50 xs:py-7 xs:px-30'>
                {text}
              </div>)}
            </div>
            <div className='text-24 leading-37 font-semibold text-purple/60 mt-90 sm:hidden'>
              Благодаря автоматизиции маркетинга и опытной команде мы в кратчайшие сроки достигаем поставленных задач и
              помогаем закрыть самые горящие позиции
            </div>
          </div>
          <img className='max-w-fit mx-auto sm:hidden' src={`/images/vacancyWoman.png`} alt='' />
          <div className='hidden relative sm:block'>
            <img className='max-w-fit md:mx-auto' src={`/images/${width > 769 && 'vacancyWoman.png' || 'vacancyWomanMobile.png'}`} alt='' />
            <div className='absolute bottom-0 left-0 px-40 text-24 leading-37 font-semibold text-purple/60 hidden sm:block xs:text-14 xs:leading-17 xs:px-10'>
              Благодаря автоматизиции маркетинга и опытной команде мы в кратчайшие сроки достигаем поставленных задач и
              помогаем закрыть самые горящие позиции
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default memo(Vacancies)