import type { NextPage } from 'next'
import { WrapContent } from '~/components/atoms'
import { Footer } from '~/components/molecules'
import { Header } from '~/components/organisms'
import css from './news.module.scss'

const News: NextPage = () => (
  <div>
    <Header type="dark" />
    <WrapContent>
      <div className={css.content}>
        <h1 className={css.title}>News</h1>
      </div>
    </WrapContent>
    <Footer />
  </div>
)

export default News
