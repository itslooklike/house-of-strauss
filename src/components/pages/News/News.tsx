import { WrapContent, TextPageTitle } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './News.module.scss'

export const News = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <div className={css.content}>
        <TextPageTitle>News</TextPageTitle>
      </div>
    </WrapContent>
  </LWithFooter>
)
