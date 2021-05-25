import { Input, ButtonForm } from '~/components/atoms'
import { IconCheck } from '~/icons'
import css from './FormDefault.module.scss'

type TProps = {
  title?: string
}

export const FormDefault = ({ title }: TProps) => (
  <form>
    {title && <p className={css.title}>{title}</p>}

    <div className={css.firstInput}>
      <Input placeholder="Full name" type="text" />
    </div>

    <div className={css.secondInput}>
      <Input placeholder="Email" type="email" />
    </div>

    <div className={css.controlWrap}>
      <ButtonForm type="submit">
        <IconCheck width={20} />
        &nbsp;Submit
      </ButtonForm>
      <span className={css.policy}>
        By submitting you accept our{' '}
        <a className={css.policyLink} href="#">
          privacy policy
        </a>
      </span>
    </div>
  </form>
)
