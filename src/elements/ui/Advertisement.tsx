import React, { FC, memo } from 'react'
import { Container } from '~ux'

interface AdvertisementProps {}

const images: string[] = [
  '/images/yandex.png',
  '/images/pc.png',
  '/images/vk.png',
  '/images/ads.svg',
  '/images/target.png',
  '/images/avito.png',
  '/images/facebook.png',
  '/images/instagram.png'
]

const Advertisement: FC<AdvertisementProps> = ({}) => {
  return (
    <Container className="mt-100 xs:mt-72">
      <h2 className="max-w-[95%] text-50 leading-60 text-purple font-semibold sm:text-44 sm:leading-55 md:max-w-full xs:text-26 xs:leading-30">
        Реклама ваших вакансий на всех площадках{' '}
        <div className="inline text-[#FF7143]">где есть подходящие кандидаты</div>
      </h2>
      <div className="flex flex-wrap items-center justify-between gap-x-70 mt-60 md:justify-center md:gap-x-30 sm:justify-between sm:gap-x-20 xs:justify-center">
        {images.map((src, index) => (
          <img className="w-[20%] xs:w-[25%]" key={index} src={src} alt="" />
        ))}
      </div>
    </Container>
  )
}

export default memo(Advertisement)
