import type { NextPage } from 'next'
import { WrapContent, TextPageTitle } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './news.module.scss'

const News: NextPage = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <div className={css.content}>
        <TextPageTitle>News</TextPageTitle>
      </div>
    </WrapContent>
  </LWithFooter>
)

export default News
