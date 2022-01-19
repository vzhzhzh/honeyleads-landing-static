import React, { FC, memo } from 'react'
import { Container } from '~ux'

interface ToolsProps {}

interface ICards {
  img: string
  title: string
  description: string
}

const cards: ICards[] = [
  {
    img: '/images/hr.png',
    title: 'HR-Порталы',
    description: 'Эффективные динамические посадочные страницы, А/В тесты, сбор данных по источникам'
  },
  {
    img: '/images/advertisement.jpg',
    title: 'Реклама',
    description: 'Сотни управляемых автоматически компаний, оптимизация, контроль бюджета'
  },
  {
    img: '/images/management.png',
    title: 'Управление',
    description: 'Воронка статусов, оценка эффективности, аналитика по каналам'
  }
]

const Tools: FC<ToolsProps> = ({}) => {
  return (
    <Container className="mt-70 pb-150 xs:pb-50">
      <h2 className="inline text-50 leading-60 font-semibold text-purple xs:text-22 xs:leading-26">
        Инструменты <div className="inline text-[#28D2AE]">HoneyLeads</div>
      </h2>
      <div className="flex flex-nowrap gap-x-50 mt-75 md:overflow-x-scroll md:pb-30 xs:gap-x-20 xs:mt-35">
        {cards.map(({ title, description, img }, index) => (
          <div
            key={index}
            className="min-w-[30%] rounded-42 shadow-CARD px-20 py-50 bg-white md:min-w-[26.875rem] xs:min-w-[14rem] xs:py-15 xs:rounded-22"
          >
            <img className="max-h-[13rem]" src={img} alt="" />
            <div className="px-30 mt-60 xs:px-10 xs:mt-30">
              <h4 className="text-35 leading-42 text-purple font-bold xs:text-18 xs:leading-22">{title}</h4>
              <div className="text-20 text-purple/40 leading-32 mt-20 xs:text-12 xs:leading-16">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  )
}

export default memo(Tools)
