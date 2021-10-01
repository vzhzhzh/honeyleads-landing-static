import React, { memo } from 'react'

const NotFoundPage = () => {
  return (
    <section>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </section>
  )
}

export default memo(NotFoundPage)
