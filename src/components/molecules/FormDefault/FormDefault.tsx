import Link from 'next/link'
import { useFormik } from 'formik'
import { Input, ButtonForm } from '~/components/atoms'
import { IconCheck } from '~/icons'
import { allRoutes } from '~/utils/config'
import { validate } from '~/utils/validations'
import css from './FormDefault.module.scss'

type TProps = {
  title?: string
  mobileLight?: boolean
}

export const FormDefault = ({ title, mobileLight }: TProps) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      {title && <p className={css.title}>{title}</p>}

      <div className={css.firstInput}>
        <Input
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Full name"
          type="text"
          mobileLight={mobileLight}
        />
        {formik.errors.name ? <div>{formik.errors.name}</div> : null}
      </div>

      <div className={css.secondInput}>
        <Input
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Email"
          type="email"
          mobileLight={mobileLight}
        />
        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
      </div>

      <div className={css.controlWrap}>
        <ButtonForm type="submit" mobileLight={mobileLight}>
          <IconCheck width={20} />
          &nbsp;Submit
        </ButtonForm>
        <span className={css.policy}>
          By submitting you accept our{' '}
          <Link href={allRoutes.privacy.url}>
            <a className={css.policyLink}>privacy policy</a>
          </Link>
        </span>
      </div>
    </form>
  )
}
