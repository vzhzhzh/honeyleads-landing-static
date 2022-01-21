import React, { FC, memo } from 'react'
import { Container } from '~ux'

interface GoodCompanyProps {}

interface ICards {
  img: string
  title: string
  description: string
}

const cards: ICards[] = [
  {
    img: '/images/goodCompanyItem_1.jpg',
    title: 'Ритейл',
    description: 'Продавец-кассир, старший кассир, кладовщик и т.д.'
  },
  {
    img: '/images/goodCompanyItem_3.jpg',
    title: 'Банки',
    description: 'Специалист контактного центра, клиентский менеджер, менеджер прямых продаж'
  },
  {
    img: '/images/goodCompanyItem_2.jpg',
    title: 'Производство',
    description: 'Оператор производственной линии, оператор линии сборки'
  }
]

const GoodCompany: FC<GoodCompanyProps> = () => {
  return (
    <>
      <div className="bg-goodCompany bg-cover bg-no-repeat">
        <Container>
          <div className="py-100 xs:py-35">
            <div className="text-50 text-white font-semibold xs:text-22 xs:leading-27">Вы в хорошей компании</div>
            <div className="flex flex-nowrap gap-x-50 mt-75 md:overflow-x-scroll md:pb-30 xs:gap-x-20 xs:mt-35">
              {cards.map(({ title, description, img }, index) => (
                <div
                  key={index}
                  className="min-w-[30%] rounded-42 shadow-CARD py-50 bg-white md:min-w-[26.875rem] xs:min-w-[14rem] xs:py-15 xs:rounded-22"
                >
                  <img src={img} alt="" />
                  <div className="px-50 mt-60 xs:px-30 xs:pb-30 xs:mt-30">
                    <h4 className="text-35 lg:text-25 xl:text-35 md:text-35 leading-42 text-purple font-bold xs:text-18 xs:leading-22  break-words">
                      {title}
                    </h4>
                    <div className="text-20 text-purple/40 leading-32 mt-20 xs:text-12 xs:leading-16">
                      {description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default memo(GoodCompany)
