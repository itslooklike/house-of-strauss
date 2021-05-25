import { Footer } from '~/components/molecules'
import css from './LWithFooter.module.scss'

export const LWithFooter: React.FC = (props) => {
  const { children } = props

  return (
    <div className={css.root}>
      <div>{children}</div>
      <Footer />
    </div>
  )
}
