import React, { memo, useEffect } from 'react'
import { Helmet } from 'react-helmet'
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
  useEffect(() => {
    const script = document.createElement('script')
    script.innerHTML = `
      ;(function (a, m, o, c, r, m) {
        ;(a[o + c] = a[o + c] || {
          setMeta: function (p) {
            this.params = (this.params || []).concat([p])
          }
        }),
          (a[o + r] =
            a[o + r] ||
            function (f) {
              a[o + r].f = (a[o + r].f || []).concat([f])
            }),
          a[o + r]({ id: '857395', hash: 'dde6b0bd3dc223576838c970a1729ae9', locale: 'ru' })
      })(window, 0, 'amo_forms_', 'params', 'load')
    `
    document.head.appendChild(script)
  }, [])

  return (
    <section className="bg-white">
      <Helmet>
        <script
          id="amoforms_script_857395"
          async
          src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1635958282"
        />
      </Helmet>
      <div className="bg-[#F9F9F8]">
        <MarketingPlatform />
        <Advertisement />
        <Tools />
      </div>
      <ComplexityTasks />
      <Vacancies />
      <SearchCandidats />
      <Benefits />
      <Integration />
      <Hiring />
      <Target />
      <OurTeam />
      <GoodCompany />
    </section>
  )
}

export default memo(IndexPage)
