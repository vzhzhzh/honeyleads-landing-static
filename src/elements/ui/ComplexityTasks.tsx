import React, { FC, memo } from 'react'
import { Container } from '~ux'

interface ComplexityTasksProps {

}

interface ITasks {
  img: string
  description: {
    green: string
    normal: string
  }
}

const tasks: ITasks[] = [
  {
    img: '/images/task-1.svg',
    description: {
      green: 'Постоянная нехватка кандидатов ',
      normal: 'на карьерных сайтах'
    }
  },
  {
    img: '/images/task-2.svg',
    description: {
      green: 'Сложности с подбором ',
      normal: 'в маленьких или отдаленных городах'
    }
  },
  {
    img: '/images/task-3.svg',
    description: {
      green: 'Быстро закрыть большое количество позиций ',
      normal: 'в пиковый сезон'
    }
  }
]

const ComplexityTasks: FC<ComplexityTasksProps> = ({}) => {
  return (
    <Container className="mt-70 xs:mt-40">
      <h2 className="inline text-50 leading-60 font-semibold text-purple xs:text-22 xs:leading-26">Решаем даже <div className='inline text-[#FF7143]'>самые сложные задачи</div></h2>
      <div className='flex flex-nowrap justify-between my-80 xs:block sm:flex-col sm:sm:gap-y-55 xs:my-40'>
        {tasks.map(({ description, img}, index) => <div key={index} className="max-w-[23rem] flex flex-col items-center px-5 sm:flex-row sm:max-w-full sm:gap-x-20">
          <div className='relative min-w-100 min-h-100'>
            <img className="absolute-center max-w-fit xs:max-w-60" src={img} alt='' />
          </div>
          <div className='inline text-26 leading-32 font-medium text-center text-[#373773] mt-60 sm:text-left sm:mt-0 xs:text-14 xs:leading-17'>
            <div className='inline text-[#28D2AE] font-semibold'>{description.green}</div>
            {description.normal}
          </div>
        </div>)}
      </div>
    </Container>
  )
}

export default memo(ComplexityTasks)