import React, { FC, memo } from 'react'
import { Container } from '~ux'

interface HiringProps {}

const Hiring: FC<HiringProps> = () => {
  return (
    <>
      <div className="bg-[#F9F9F8]">
        <Container>
          <div className="flex justify-between py-100 xs:py-80 md:block">
            <div>
              <div className="font-semibold sm:min-w-full xs:text-20 xs:leading-24 xs:px-40 h-fit inline-flex items-center justify-center border cursor-pointer transition-colors select-none py-14 px-50 text-white bg-[#FF7143] rounded-full text-20 font border-transparent hover:bg-[#C55B39] active:bg-[#FF9472]">
                Технология - Супер Гео таргетинг
              </div>
              <div className="text-50 text-[#373773] max-w-[51.875rem] pt-35 font-semibold leading-61 xs:text-22 xs:leading-27">
                Повысьте скорость найма
                <span className="text-[#FF7143]"> в маленьких городах/поселках</span>
              </div>
              <div className="hidden max-w-fit md:block md:py-30">
                <img className="" src="/images/statisticYear.png" alt="statisticYear" />
              </div>
              <div className="text-26 text-[#373773] max-w-[42.125rem] pt-35 xs:text-14 xs:leading-17 xs:pt-0">
                Находим кандидатов в любых городах даже с минимальной численностью за счет собственной технологии
                настройки таргетинга. Протестировано в городах, где проживают менее 1000 человек
              </div>
            </div>
            <div className="md:hidden">
              <img src="/images/statisticYear.png" alt="statisticYear" />
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default memo(Hiring)
