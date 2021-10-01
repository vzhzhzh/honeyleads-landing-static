import React, {FC, memo} from 'react'
import {Container} from '~ux'

interface HiringProps {

}

const Hiring: FC<HiringProps> = () => {
  return (
    <>
      <div className="bg-[#F9F9F8]">
        <Container>
          <div className="flex justify-between py-100 xs:py-58 md:block">
            <div>
              <div
                className="font-semibold bg-[#FF7143] text-white text-22 rounded-full max-w-[31rem] py-11 px-42 xs:text-11 xs:leading-19 xs:items-center xs:justify-center xs:text-center xs:py-7 xs:px-31">
                Технология - Супер Гео таргетинг
              </div>
              <div
                className="text-50 text-[#373773] max-w-[51.875rem] pt-35 font-semibold leading-61 xs:text-22 xs:leading-27">Повысьте
                скорость найма
                <span className="text-[#FF7143]"> в маленьких городах/поселках</span></div>
              <div className="hidden max-w-fit md:block md:py-30">
                <img className="" src="/images/statisticYear.png" alt="statisticYear"/>
              </div>
              <div className="text-26 text-[#373773] max-w-[42.125rem] pt-35 xs:text-14 xs:leading-17 xs:pt-0">Находим
                кандидатов в любых городах даже с
                минимальной численностью
                за счет собственной технологии настройки таргетинга.
                Протестировано в городах, где проживают менее 1000 человек
              </div>
            </div>
            <div className="md:hidden">
              <img src="/images/statisticYear.png" alt="statisticYear"/>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default memo(Hiring)