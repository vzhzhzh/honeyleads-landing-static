import React, { memo, useRef, useState } from 'react'
import { Button, TextInput } from '~ui'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Container } from '~ux'


interface FooterProps {
}

const FooterProps: React.FC<FooterProps> = props => {
  const {} = props

  const [isDisable, setIsDisable] = useState<boolean>(false)

  interface IFormInputs {
    fullName: string
    phone: number
    email: string
  }

  const phoneRegExp = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;


  const schema = yup.object().shape({
    fullName: yup
      .string()
      .min(3, 'Please enter 3 to 20 characters')
      .max(20, 'Please enter 3 to 20 characters')
      .required(),
    phone: yup.string().matches(phoneRegExp, 'Phone number is not valid'),
    email: yup.string().email('Please enter correct e-mail').required()

  })
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema)
  })
  const onSubmit = (data: IFormInputs) => {
    setIsDisable(true)
    reset()
  }


  return (
    <footer className='relative pt-60'>
      <img className='absolute h-full top-0 left-0 z-0 md:hidden' src='/images/footer.png' alt='' />
      <Container className='relative z-10'>
        <div className=' max-w-[43.75rem] md:mx-auto md:text-center xs:text-left'>
          <div className='text-50 leading-60 font-semibold text-[#373773] xs:text-22 xs:leading-26'>Привлекайте
            кандидатов<span
              className='text-[#FF7143] xs:text-[#28D2AF]'> быстрее и легче </span>
          </div>
          <div
            className='pt-21 text-39 text-purple/50 leading-40 text-[#373773] font-display xs:text-14 xs:leading-18'>
            Обращайтесь за дополнительной информацией и запросам на
            проведение пилотного проекта
          </div>
          <form className='mt-40 max-w-[33.125rem] md:mx-auto' onSubmit={handleSubmit(onSubmit)}>
            <div className='relative'>
              <TextInput
                {...register('fullName')}
                name='fullName'
                placeholder='Имя'
                variant='footer'
              />
              <div className='absolute text-[#d11507] text-10 pt-5'>{errors.fullName?.message}</div>
            </div>
            <div className='mt-30 relative'>
              <TextInput
                {...register('phone')}
                name='phone'
                placeholder='Телефон'
                variant='footer'
              />
              <div className='absolute text-[#d11507] text-10 pt-5'>{errors.phone?.message}</div>
            </div>

            <div className='mt-30 relative'>
              <TextInput {...register('email')} name='email' placeholder='Электронная почта' variant='footer' />
              <div className='absolute text-[#d11507] text-10 pt-5'>{errors.email?.message}</div>
            </div>

            <Button

              className='text-[#FFFFFF] mb-60 text-22 !py-14 mt-30 w-full rounded-22 '
              variant='primary'
              disabled={isDisable}
              onClick={() => {
              }}
            >
              Отправить
            </Button>


          </form>
        </div>
      </Container>
    </footer>
  )
}

export default memo(FooterProps)
