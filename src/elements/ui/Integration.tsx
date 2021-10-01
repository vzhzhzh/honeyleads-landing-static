import React, {FC, memo} from 'react'
import {Container} from '~ux'

interface IntegrationProps {
}

const Integration: FC<IntegrationProps> = () => {
  return (
    <div className="bg-ats bg-cover">

      <Container className="py-80 xs:py-40">
        <div className="text-[#373773] text-50 leading-60 font-semibold max-w-[38.063rem] xs:text-22 xs:leading-27 ">Реклама эффективнее <span
          className="text-[#FF7143]">в связке с ATS</span></div>
        <div className="grid grid-cols-2 gap-x-30 flex text-20 mt-17 md:block">
          <div className=" text-[#373773]">
            <div className="max-w-[26.25rem] font-medium text-26 leading-31 text-purple/70 xs:text-14 xs:leading-18">
              Используйте встроенную ATS или мы подключимся к вашей
            </div>
            <div className="text-center">
              <div className="grid grid-cols-2 gap-x-30 mt-40">
                <div
                  className="max-w-[22.5rem] min-h-[9.438rem] py-12 px-26 bg-white rounded-20 flex justify-center items-center xs:text-9"> Обновляем
                  потребность каждый день
                </div>
                <div
                  className="max-w-[22.5rem] min-h-[9.438rem] py-12 px-26 bg-white rounded-20 flex justify-center items-center xs:text-9">Оптимизируем
                  рекламу на основе данных о прохождении кандидатом по воронке
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-30 mt-40 ">
                <div
                  className="max-w-[22.5rem] min-h-[9.438rem] py-12 px-26 bg-white rounded-20 flex justify-center items-center xs:text-9"> Никаких
                  Excel и Google sheets (опционально)
                </div>
                <div
                  className="max-w-[22.5rem] min-h-[9.438rem] py-12 px-26 bg-white rounded-20 flex justify-center items-center xs:text-9">День
                  в день запуск по новым регионам, вакансиям
                </div>
              </div>
              <div className="grid grid-cols-2 gap-x-30 mt-40 ">
                <div
                  className="max-w-[22.5rem] min-h-[9.438rem] py-12 px-26 bg-white rounded-20 flex justify-center items-center xs:text-9">Стабильный
                  фокус на самых горящих позициях
                </div>
              </div>
            </div>
          </div>

          <div className="pl-30 md:pl-0">
            <div className="max-w-[26.25rem] font-medium text-26 leading-31 text-purple/70 xs:text-14 xs:leading-18 md:mt-24">Интеграция с другими ATS</div>
            <img className="mt-70 xs:mt-14" src="/images/atsLogos.jpg" alt="atsLogos"/>
          </div>
        </div>

      </Container>

    </div>

  )
}

export default memo(Integration)