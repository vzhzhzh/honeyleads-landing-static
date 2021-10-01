import React from 'react'
import { PageLayout } from '~layouts'
import { Header, Footer } from '~sections'
import "@fontsource/montserrat"
import "@fontsource/montserrat/500.css"
import "@fontsource/montserrat/600.css"
import "@fontsource/montserrat/700.css"
import '~styles/app.css'

// eslint-disable-next-line react/display-name
export const wrapPageElement = ({ element: page, props }) => {
  // All routing logic is in the Page component

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <PageLayout {...props}>{page}</PageLayout>
      <Footer />
    </div>
  )
}