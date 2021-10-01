import React, {FC, memo} from 'react'
import {Container} from '~ux'

interface BenefitsProps {

}

const Benefits: FC<BenefitsProps> = () => {
  return (
    <>
      <Container>

        <div className="flex items-center my-200 xs:my-60 xs:flex-col md:my-60 md:flex-col sm:my-60 sm:flex-col 	">
          <div className="">
            <div
              className="text-35 text-[#373773] max-w-[39.938rem] font-semibold xs:text-22 xs:leading-27">Получите <span
              className="text-[#28D2AE]">максимальное количество заявок</span> с
              помощью конверсионных лендингов
            </div>
            <div className="max-w-fit hidden md:block xs:py-30 md:py-60">
              <img src="images/perekrestok_2.png" alt="perekrestok_1"/>
            </div>
            <div className="text-20 text-[#373773] max-w-[32.063rem] pt-10 xs:text-14 xs:leading-18">Наши сайты
              дают высокую конверсию из входящего
              трафика в заявки от
              кандидатов за счет протестированных и оптимизированных на большом бюджете блоков, встроенного конструктора
              сайтов
            </div>
          </div>
          <div className="max-w-[46.375rem] max-h-[32.25rem] xs:hidden md:hidden sm:hidden pl-20">
            <img src="images/perekrestok_2.png" alt="perekrestok_1"/>
          </div>

        </div>
        <div className="flex items-center xs:flex-col md:my-60 md:flex-col sm:my-60 sm:flex-col">
          <div>
            <div className="text-35 text-[#373773] max-w-[39.938rem] font-semibold xs:text-22 xs:leading-27"><span
              className="text-[#FF7143]">Найдем всех,</span> кто ищет работу или только присматривается
            </div>
            <div className="max-w-fit hidden md:block md:py-60 xs:py-30">
              <img src="images/perekrestok_1.png" alt="perekrestok_1"/>
            </div>
            <div className="text-20 text-[#373773] max-w-[32.063rem] pt-10 xs:text-14 xs:leading-18">Запуск рекламных компаний
              в поисковиках и
              социальных сетях позволяет охватить кандидатов на самых разных площадках и значительно увеличить поток за
              счет кандидатов, недоступных на карьерных порталах
            </div>
          </div>
          <div className="max-w-[46.375rem] max-h-[32.25rem] xs:hidden md:hidden sm:hidden pl-20">
            <img src="images/perekrestok_1.png" alt="perekrestok_1"/>
          </div>
        </div>
        <div className="flex items-center my-200 xs:my-60 xs:flex-col md:my-60 md:flex-col sm:my-60 sm:flex-col">
          <div>
            <div className="text-35 text-[#373773] max-w-[39.938rem] font-semibold xs:text-22 xs:leading-27">Легко
              принимайте правильные
              решения <span
                className="text-[#28D2AE]">на основе
              прозрачных отчетов</span>
            </div>
            <div className="max-w-fit hidden md:block md:py-60 xs:py-30">
              <img src="images/perekrestok_3.png" alt="perekrestok_3"/>
            </div>
            <div className="text-20 text-[#373773] max-w-[32.063rem] pt-10 xs:text-14 xs:leading-18">Запуск рекламных компаний
              в поисковиках и
              социальных сетях позволяет охватить кандидатов на самых разных площадках и значительно увеличить поток за
              счет кандидатов, недоступных на карьерных порталах
            </div>
          </div>
          <div className="max-w-[46.375rem] max-h-[32.25rem] xs:hidden md:hidden sm:hidden pl-20">
            <img src="images/perekrestok_3.png" alt="perekrestok_3"/>
          </div>

        </div>
      </Container>
    </>
  )
}

export default memo(Benefits)