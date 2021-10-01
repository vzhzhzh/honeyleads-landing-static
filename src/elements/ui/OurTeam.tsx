import React, {FC, memo} from 'react'
import {Container} from '~ux'

interface OurTeamProps {

}

const OurTeam: FC<OurTeamProps> = () => {
  return (
    <>
      <Container className="flex items-center md:mt-23 md:block">
        <div className="">
          <div
            className="text-50 leading-60 text-[#373773] max-w-[52.438rem] font-semibold xs:text-22 xs:leading-27">Наша
            команда - <span className="text-[#28D2AE]">это Digital маркетологи мирового уровня</span>
          </div>
          <div className="max-w-[42.125rem] text-26 text-[#373773] mt-35 xs:text-14 xs:leading-17">Работая с нашими
            экспертами по контекстной и
            таргетированной рекламе вы получаете набор профессиональных
            навыков в совокупности с опытом ведения рекламных кампаний на миллионы рублей в HR лидогенерации
          </div>
        </div>

        <div className="md:hidden">
          <img src="images/ourTeam.png" alt="ourTeam"/>
        </div>

        <div className="hidden md:block">
          <img src="images/teamMob.png" alt="ourTeam"/>
        </div>
      </Container>





    </>
  )
}

export default memo(OurTeam)