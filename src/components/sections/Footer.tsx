import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import { useRendersCount, useUpdate } from 'react-use'
import { Helmet } from 'react-helmet'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, TextArea, TextInput } from '~ui'
import { Container } from '~ux'

interface IFormInputs {
  name: string
  message?: string
  email: string
}

const requiredMessage = 'Поле обязательно для заполнения'

const schema = yup.object().shape({
  name: yup.string().required(requiredMessage),
  email: yup.string().email('Введите корректный e-mail').required(requiredMessage)
})

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

  const [isDisable, setIsDisable] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: IFormInputs) => {
    setIsDisable(true)
    sendForm(data)
  }

  const sendForm = (data: IFormInputs) => {
    return axios.post(`https://backend.honeyleads.ru/api/landing-requests`, data)
  }

  return (
    <footer className="md:bg-none bg-footer relative bg-right-bottom bg-no-repeat">
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
        <div className="max-w-[50vw] text-30 md:text-24 text-left text-purple/50 leading-40 text-[##373773] font-normal md:max-w-[100vw] md:pt-5 xs:text-14 xs:leading-18">
          Обращайтесь за дополнительной информацией и запросам на проведение пилотного проекта
        </div>
        <form className="mt-40 max-w-[33.125rem] md:mx-auto" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <TextInput {...register('name')} name="name" placeholder="Имя" variant="footer" disabled={isDisable} />
            <div className="absolute text-[#d11507] text-10 pt-5">{errors.name?.message}</div>
          </div>

          <div className="mt-30 relative">
            <TextInput
              {...register('email')}
              name="email"
              placeholder="Электронная почта"
              variant="footer"
              disabled={isDisable}
            />
            <div className="absolute text-[#d11507] text-10 pt-5">{errors.email?.message}</div>
          </div>

          <div className="mt-30 relative">
            <TextArea
              {...register('message')}
              variant="footer"
              name="message"
              placeholder="Сообщение"
              disabled={isDisable}
            />
          </div>

          {isDisable && <h4 className="text-20 text-center mt-30">Ваш отклик успешно загружен</h4>}

          <Button
            className="text-[#FFFFFF] mb-60 text-22 !py-14 mt-30 w-full rounded-22 font-semibold disabled:opacity-75"
            variant="primary"
            disabled={isDisable}
            onClick={() => {}}
          >
            Отправить
          </Button>
        </form>
      </Container>
    </footer>
  )
}

export default memo(FooterProps)
