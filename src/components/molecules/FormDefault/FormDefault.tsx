import Link from 'next/link'
import { Input, ButtonForm } from '~/components/atoms'
import { IconCheck } from '~/icons'
import css from './FormDefault.module.scss'

type TProps = {
  title?: string
  mobileLight?: boolean
}

export const FormDefault = ({ title, mobileLight }: TProps) => (
  <form>
    {title && <p className={css.title}>{title}</p>}

    <div className={css.firstInput}>
      <Input placeholder="Full name" type="text" mobileLight={mobileLight} />
    </div>

    <div className={css.secondInput}>
      <Input placeholder="Email" type="email" mobileLight={mobileLight} />
    </div>

    <div className={css.controlWrap}>
      <ButtonForm type="submit" mobileLight={mobileLight}>
        <IconCheck width={20} />
        &nbsp;Submit
      </ButtonForm>
      <span className={css.policy}>
        By submitting you accept our{' '}
        <Link href="/privacy">
          <a className={css.policyLink}>privacy policy</a>
        </Link>
      </span>
    </div>
  </form>
)
