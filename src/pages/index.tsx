import React, {memo} from 'react'
import {
  MarketingPlatform,
  Advertisement,
  Tools,
  ComplexityTasks,
  Vacancies,
  SearchCandidats,
  GoodCompany,
  OurTeam,
  Target,
  Hiring,
  Benefits,
  Integration
} from '~ui'

const IndexPage = () => {
  return (
    <section className="bg-white">
      <div className='bg-[#F9F9F8]'>
        <MarketingPlatform/>
        <Advertisement/>
        <Tools/>
      </div>
      <ComplexityTasks/>
      <Vacancies/>
      <SearchCandidats/>
      <Benefits/>
      <Integration/>
      <Hiring/>
      <Target/>
      <OurTeam/>
      <GoodCompany/>
    </section>
  )
}

export default memo(IndexPage)
