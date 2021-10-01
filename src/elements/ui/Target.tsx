import React, {FC, memo} from 'react'
import {Button} from '~ui'
import {Container} from '~ux'

interface TargetProps {
}

const Target: FC<TargetProps> = () => {
  return (
    <>
      <div className="bg-orange">
        <Container className="">
          <div className="flex justify-between md:block">
            <div className=" ">
              <div className="text-50 pt-70 text-white max-w-[49rem] font-semibold xs:text-22 xs:leading-27 md:pt-50">Каков он СуперГео таргетинг
                в действии?
              </div>
              <div className="hidden md:block">
                <img src="images/geoMob.png" alt="superGeo"/>
              </div>
              <div className="pt-20 mb-70 md:pt-0 md:pb-50 md:flex md:justify-center md:text-center md:items-center">
                <Button className="px-70 py-20 text-30 font-semibold xs:text-20 xs:leading-26 xs:py-17" variant="white">Попробовать!</Button>
              </div>
            </div>
              <img className="max-w-fit md:hidden" src="images/superGeo.png" alt="superGeo"/>

          </div>


        </Container>
      </div>
    </>
  )
}

export default memo(Target)