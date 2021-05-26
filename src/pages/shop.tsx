import type { NextPage } from 'next'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './shop.module.scss'

const Shop: NextPage = () => (
  <LWithFooter>
    <Header type="dark" />
    <div className={css.head}>
      <div className={css.content}>
        <div className={css.textBlock}>
          <h1 className={css.title}>Casino Zögernitz Shop</h1>
          <p className={css.subtitle}>Delicacies and Souvenirs from Vienna and the world.</p>
        </div>
      </div>
    </div>
    <div className={css.content}>
      <div className={css.inner}>
        <img className={css.image} width="615" src="/images/image-shop-item.png" alt="product" />
      </div>
    </div>
  </LWithFooter>
)

export default Shop
