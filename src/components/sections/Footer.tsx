import React, { memo, useEffect } from 'react'
import { useRendersCount, useUpdate } from 'react-use'
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
            iframe.style.height = '500px'
            iframe.style.position = 'relative'
            document.body.appendChild(iframe)
          }
        }),
      500
    )
  }, [rendersCount])

  return (
    <footer className="relative pt-60">
      <img className="absolute h-[246%] top-0 left-0 z-0 md:hidden" src="/images/footer.png" alt="" />

      <Container className="relative z-10">
        <div className=" max-w-[43.75rem] md:mx-auto md:text-center xs:text-left">
          <div className="text-50 leading-60 font-semibold text-[#373773] xs:text-22 xs:leading-26">
            Привлекайте кандидатов<span className="text-[#FF7143] xs:text-[#28D2AF]"> быстрее и легче </span>
          </div>
          <div className="pt-21 text-39 text-purple/50 leading-40 text-[#373773] font-display xs:text-14 xs:leading-18">
            Обращайтесь за дополнительной информацией и запросам на проведение пилотного проекта
          </div>
          <form className="mt-40 max-w-[33.125rem] md:mx-auto">
            <div id={'amoCrmForm'} className="asbolute" />
          </form>
        </div>
      </Container>
    </footer>
  )
}

export default memo(FooterProps)
