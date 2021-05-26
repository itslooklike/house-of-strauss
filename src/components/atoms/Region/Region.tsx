import { useState } from 'react'
import { DropDown } from '~/utils/DropDown'
import { IconToggler } from '~/icons'
import css from './Region.module.scss'

const regions = ['En', 'De']

export const Region = () => {
  const [lang, setLang] = useState(regions[0])

  return (
    <DropDown
      content={
        <div className={css.list}>
          {regions.map((item, index) => (
            <li className={css.item} key={index} onClick={() => setLang(item)}>
              {item}
            </li>
          ))}
        </div>
      }
    >
      <div className={css.root}>
        <span className={css.lang}>{lang}</span>&nbsp;
        <IconToggler width={8} />
      </div>
    </DropDown>
  )
}
