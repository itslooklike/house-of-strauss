import cx from 'classnames'
import { WrapContent, Logo } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './history.module.scss'

export const History = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <div className={css.head}>
        <Logo name="casino" width={230} />
      </div>
      <div className={css.content}>
        <div className={css.col1}>
          <img className={css.image} width="500" src="/images/image-history.jpg" alt="place" />
        </div>
        <div className={css.col2}>
          <h1 className={cx(css.title, css.preAnimate)}>1837</h1>
          <div className={cx(css.textBlock, css.preAnimate)}>
            <p>
              Der Wiener Bürger Ferdinand Zögernitz lässt eine Residenz im Biedermeierstil auf
              ehemaligem kaiserlichen Besitz erbauen. Das alte Casino Zögernitz wird am 21. Juni des
              Jahres 1837 eröffnet und avanciert fortan mit seinem „reich dekorierten Saal“ und
              wunderschönem Garten zum beliebten Treffpunkt der besten Wiener Gesellschaft.
            </p>
          </div>
        </div>
      </div>
    </WrapContent>
  </LWithFooter>
)
