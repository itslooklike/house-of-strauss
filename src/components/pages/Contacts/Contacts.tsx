import cx from 'classnames'
import { Sponsors } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import { contacts } from '~/utils/config'
import css from './Contacts.module.scss'

export const Contacts = () => (
  <LWithFooter>
    <Header type="dark" />
    <div className={css.root}>
      <div className={css.title}>Contact</div>
      <div className={css.table}>
        {contacts.map((item, index) => (
          <div key={index} className={cx(css.row, css[`type${index + 1}`])}>
            <div className={css.rowInner}>
              <div className={css.colTitle}>{item.title}</div>
              <div>
                <div className={css.text}>{item.text}</div>
                <div className={css.name}>{item.name}</div>
              </div>
              <div className={css.colContacts}>
                <a href={`mailto:${item.email}`}>{item.email}</a>
                <a href={item.web} className={css.web} target="_blank" rel="noreferrer">
                  {item.web.replace('https://', '')}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Sponsors />
    </div>
  </LWithFooter>
)
