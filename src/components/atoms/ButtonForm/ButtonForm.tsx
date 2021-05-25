/* eslint-disable react/jsx-props-no-spreading */
import cx from 'classnames'
import css from './ButtonForm.module.scss'

type TProps = {
  mobileLight?: boolean
  blank?: boolean
  href?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: string
}

export const ButtonForm: React.FC<TProps> = (props) => {
  const { children, className, mobileLight, href, blank, ...rest } = props

  if (href) {
    return (
      <a
        href={href}
        className={cx(css.buttonForm, mobileLight && css.mobileLight, className)}
        {...(blank ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      type="button"
      className={cx(css.buttonForm, mobileLight && css.mobileLight, className)}
      {...rest}
    >
      {children}
    </button>
  )
}
