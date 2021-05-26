import type { NextPage } from 'next'
import { WrapContent, TextPageTitle } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './events.module.scss'

const eventsList = [
  'Möbel',
  'Equipment',
  'LED Wand',
  'Technik...',
  'Räumlichkeiten',
  'Catering angebot: Simonis',
]

const Events: NextPage = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <div className={css.content}>
        <div className={css.col1}>
          <TextPageTitle>Your event</TextPageTitle>
          <p className={css.listTitle}>Ausstattungsbeschreibung</p>
          <ul className={css.list}>
            {eventsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className={css.col2}>
          <img className={css.image} width="545" src="/images/image-events-hall.jpg" alt="hall" />
        </div>
      </div>
    </WrapContent>
  </LWithFooter>
)

export default Events
