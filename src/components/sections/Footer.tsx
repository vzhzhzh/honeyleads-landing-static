import React, { memo, useEffect } from 'react'
import { useRendersCount, useUpdate } from 'react-use'
import { Helmet } from 'react-helmet'
import { Container } from '~ux'
interface IFormInputs {
  fullName: string
  phone: number
  email: string
}

interface FooterProps {}

const FooterProps: React.FC<FooterProps> = props => {
  const {} = props
  const update = useUpdate()

  const rendersCount = useRendersCount()

  useEffect(() => {
    if (rendersCount === 1) {
      update()
    }
  }, [rendersCount])

  useEffect(() => {
    const form = document.getElementById('amoCrmForm')

    if (!form) return

    const script = document.createElement('script')

    script.innerHTML = `
      (function (a, m, o, c, r, m) {
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

    form.appendChild(script)
    const iframes = document.getElementsByTagName('iframe')

    setTimeout(
      () =>
        new Array(iframes.length).fill(0).forEach((_, index) => {
          const iframe = iframes.item(index)

          if (iframe) {
            form.appendChild(iframe)
            iframe.style.height = '368px'
            iframe.style.width = '500px'
            iframe.style.position = 'absolute'
          }
        }),
      500
    )
  }, [rendersCount])

  return (
    <footer className="relative h-[100vh] bg-cover bg-footer bg-no-repeat bg-center-right">
      <Helmet>
        <script
          id="amoforms_script_857395"
          async
          src="https://forms.amocrm.ru/forms/assets/js/amoforms.js?1635958282"
        />
      </Helmet>
      {/* <img
        className="absolute w-screen right-0 min-w-[1920px] top-0 z-0 lg:min-w-[1440px] md:hidden"
        src="/images/footer.png"
        alt=""
      /> */}
      <Container className="relative mt-40 z-10">
        <div className="text-50 leading-60 font-semibold text-[#636385] md:text-40  xs:text-22 xs:leading-26">
          Привлекайте кандидатов
          <br />
          <span className="text-[#FF7143] xs:text-[#28D2AF]"> быстрее и легче </span>
        </div>
        <div className="max-w-[50vw] text-30 text-left text-purple/50 leading-40 text-[##373773] font-normal md:max-w-[100vw] md:text-34 md:pt-5  xs:text-14 xs:leading-18">
          Обращайтесь за дополнительной информацией и запросам на проведение пилотного проекта
        </div>
        <div className="mt-[20px] max-w-[43.75rem] md:mx-auto md:text-center xs:text-left">
          <div className="absolute left-[10px] sm:left-[150px] xs:left-[0px] ">
            <div id={'amoCrmForm'} />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default memo(FooterProps)
