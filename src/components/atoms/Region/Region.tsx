import { useTranslation } from 'react-i18next'
import { DropDown } from '~/utils/DropDown'
import { IconToggler } from '~/icons'
import css from './Region.module.scss'

const regions = ['en', 'de']

export const Region = () => {
  const { i18n } = useTranslation()

  return (
    <DropDown
      content={
        <div className={css.list}>
          {regions.map((item, index) => (
            <li
              className={css.item}
              key={index}
              onClick={() => {
                i18n.changeLanguage(item)
              }}
            >
              {item}
            </li>
          ))}
        </div>
      }
    >
      <div className={css.root}>
        <span className={css.lang}>{i18n.language}</span>&nbsp;
        <IconToggler width={8} />
      </div>
    </DropDown>
  )
}
