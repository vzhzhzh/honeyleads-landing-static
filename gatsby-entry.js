import React from 'react'
import { PageLayout } from '~layouts'
import "@fontsource/montserrat"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/700.css"
import '~styles/app.css'

// eslint-disable-next-line react/display-name
export const wrapPageElement = ({ element: page, props }) => {
  // All routing logic is in the Page component

  if (typeof window === 'undefined') return null

  return (
    <div className={'layout'}>
        <PageLayout {...props}>{page}</PageLayout>
    </div>
  )
}
