import React, { FC, memo } from 'react'
import Button from './Button'

interface SearchCandidatsProps {}

const SearchCandidats: FC<SearchCandidatsProps> = ({}) => {
  return (
    <div className="relative xs:overflow-hidden">
      <img
        className="top-0 left-0 z-0 xs:h-[550px] xs:min-w-fit xs:left-50% xs:-translate-x-50% xs:ml-50%"
        src="/images/searchCandidats.png"
        alt=""
      />
      <div className="absolute top-[20%] left-[8%] flex gap-x-10 text-28 leading-44 font-semibold p-35 rounded-21 !rounded-br-0 bg-white text-purple lg:p-8 md:text-14 lg:text-18 xs:rounded-8 xs:top-[55%]">
        Срочно нужны кандидаты?
        <img className="w-44 md:w-30" src="/images/fire.png" alt="" />
      </div>
      <div className="absolute top-[40%] right-[10%] flex items-center gap-x-10 text-28 leading-44 font-semibold p-35 rounded-21 !rounded-bl-0 bg-white text-purple lg:p-8 md:text-14 lg:text-18 xs:rounded-8 xs:top-[70%]">
        Нужны ещё вчера!
        <img className="w-49 md:w-35" src="/images/heart.png" alt="" />
      </div>
      <Button
        variant="white"
        className="min-w-fit absolute bottom-30 left-50% -translate-x-50% !py-18 !px-70 md:text-20 md:!px-30 md:!py-10 xs:w-[90%]"
      >
        Найти кандидатов!
      </Button>
    </div>
  )
}

export default memo(SearchCandidats)
