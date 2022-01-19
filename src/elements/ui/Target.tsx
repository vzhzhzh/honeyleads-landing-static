import React, { FC, memo } from 'react'
import { Button } from '~ui'
import { Container } from '~ux'

interface TargetProps {}

const Target: FC<TargetProps> = () => {
  return (
    <>
      <div className="bg-orange">
        <Container className="">
          <div className="flex justify-between md:block">
            <div className=" ">
              <div className="text-50 pt-70 text-white max-w-[49rem] font-semibold xs:text-22 xs:leading-27 md:pt-50">
                Каков он СуперГео таргетинг в действии?
              </div>

              <div className="hidden md:flex mx-auto align-center object-contain md:max-w-[19.188rem] md:-my-14">
                <img className={'md:object-contain md:text-center'} src="images/geoMob.png" alt="superGeo1" />
              </div>

              <div className="pt-20 mb-70 md:pt-0 md:pb-50 md:flex md:justify-center">
                <Button className="px-70 py-20 text-30 font-semibold xs:text-20 xs:leading-26 xs:py-17" variant="white">
                  Попробовать!
                </Button>
              </div>
            </div>
            <img
              className="max-w-fit md:hidden object-contain object-bottom"
              src="images/superGeo.png"
              alt="superGeo2"
            />
          </div>
        </Container>
      </div>
    </>
  )
}

export default memo(Target)
