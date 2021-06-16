import { Sponsors, PageContent, PageHero } from '~/components/atoms'
import { FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Shop.module.scss'

export const Shop = () => (
  <LWithFooter>
    <Header type="dark" />
    <PageHero theme="orange" size="slim">
      Shop
    </PageHero>
    <PageContent variant="shop">
      <img className={css.image} src="/images/image-shop-item.png" alt="product" />
      <p className={css.text}>
        The House of Strauss shop will be an exciting combination of a museum shop, with lovely
        souvenirs and Strauss-related material and a culinary shop, curated by Marco Simonis and his
        wife, offering fine delicacies.
      </p>
      <FormDefault title="Newsletter" />
    </PageContent>
    <Sponsors />
  </LWithFooter>
)
