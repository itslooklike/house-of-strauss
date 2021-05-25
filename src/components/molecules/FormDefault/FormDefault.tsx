import { Input, ButtonForm } from '~/components/atoms'
import { IconCheck } from '~/icons'
import css from './FormDefault.module.scss'

export const FormDefault = () => (
  <form>
    <p className={css.formTitle}>Newsletter</p>

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
        By submitting you accept our <a href="#">privacy policy</a>
      </span>
    </div>
  </form>
)
