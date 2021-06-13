import cx from 'classnames'
import css from './ButtonForm.module.scss'

type TProps = {
  theme?: 'mint' | 'light-purple' | 'salon'
  mobileLight?: boolean
  blank?: boolean
  href?: string
  type?: 'button' | 'submit' | 'reset' | undefined
  className?: string
}

export const ButtonForm: React.FC<TProps> = (props) => {
  const { children, className, mobileLight, href, blank, theme, ...rest } = props

  const styles = cx(css.buttonForm, mobileLight && css.mobileLight, theme && css[theme], className)

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        {...(blank ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={styles} {...rest}>
      {children}
    </button>
  )
}
