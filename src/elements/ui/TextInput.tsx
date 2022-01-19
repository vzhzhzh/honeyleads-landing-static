import React, { forwardRef, memo } from 'react'
import cls from 'classnames'
import { Children, ClassName } from '~types'

export type TextInputVariantType = 'primary' | 'light' | 'footer'

const textInputBaseVariant =
  'w-full inline-flex items-center px-14 py-8 rounded-6 text-14 cursor-pointer transition-colors transition-shadow'
const textInputPrimaryVariant =
  'text-neutral-2 bg-neutral-11 ring ring-neutral-9 ring-offset-neutral-11 hover:ring-neutral-4 placeholder-neutral-5 disabled:ring-neutral-11 disabled:pointer-events-none disabled:text-neutral-8 disabled:ring-neutral-9'
const textInputLightVariant =
  'text-neutral-14 bg-neutral-1 ring ring-neutral-2 ring-offset-neutral-1 hover:ring-neutral-4 placeholder-neutral-4 disabled:bg-neutral-11 disabled:ring-neutral-4 disabled:pointer-events-none disabled:text-neutral-8 disabled:ring-neutral-2'

const textInputFooterVariant = 'bg-[#F6F6F6] border border-[#191919] border-0 rounded-22 py-23 px-32 '

const getTextInputVariantClass = (variant: TextInputVariantType, error: boolean, className?: ClassName) => {
  const isPrimary = !variant || variant === 'primary'
  const isLight = variant === 'light'
  const isFooter = variant === 'footer'

  return cls(className, textInputBaseVariant, {
    [`${textInputPrimaryVariant}`]: isPrimary,
    'focus-primary-violet-ring': isPrimary && !error,
    'error-primary-ring': isPrimary && error,

    [`${textInputLightVariant}`]: isLight,
    'focus-light-violet-ring': isLight && !error,
    'error-light-ring': isLight && error,

    [`${textInputFooterVariant}`]: isFooter,
    'focus-footer-violet-ring': isFooter && !error,
    'error-footer-ring': isFooter && error
  })
}

export type HtmlInputProps = Omit<
  React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
  'className' | 'ref' | 'prefix'
>

export interface TextInputProps extends HtmlInputProps {
  className?: ClassName
  name: string
  value?: string
  variant?: TextInputVariantType
  error?: string
  prefix?: Children
  suffixes?: Children[]
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { className, variant = 'primary', error, prefix, suffixes, ...rest } = props

  return (
    <label className={getTextInputVariantClass(variant, !!error, className)}>
      {prefix && <div className="mr-8 flex items-center text-neutral-5">{prefix}</div>}
      <input
        ref={ref}
        id={rest.name}
        className={cls('flex-1 text-20 xs:text-14', {
          'bg-neutral-11': !variant || variant === 'primary',
          'bg-neutral-1': variant === 'light',
          'bg-[#F7F7F7]': variant === 'footer'
        })}
        aria-errormessage={error}
        aria-invalid={!!error}
        data-variant={variant}
        {...rest}
      />
      {suffixes &&
        suffixes.length > 0 &&
        suffixes.map((suffix, index) => (
          <div key={index} className="ml-8 flex items-center text-neutral-5">
            {suffix}
          </div>
        ))}
    </label>
  )
})

TextInput.displayName = 'TextInput'

export default memo(TextInput)
