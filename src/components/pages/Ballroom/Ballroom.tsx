import { Sponsors, PageContent, PageHero, Tabs } from '~/components/atoms'
import { FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Ballroom.module.scss'

const tabs = [
  {
    title: 'Info',
    content: (
      <div>
        <p className={css.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <FormDefault title="Subscribe to our newsletter to stay up to date" />
      </div>
    ),
  },
  { title: 'Inquiry', content: <></>, disabled: true },
]

export const Ballroom = () => (
  <LWithFooter>
    <Header />
    <PageHero theme="bordeaux" size="slim">
      Rent the Ballroom
    </PageHero>
    <PageContent variant="no-paddings" size="large">
      <img
        className={css.image}
        height="338"
        src="/images/ballroom-preview-1.jpg"
        alt="ballroom 1"
      />
      <div className={css.content}>
        <h2 className={css.title}>Your event in the historic ballroom</h2>
        <Tabs tabs={tabs} />
      </div>
    </PageContent>
    <Sponsors />
  </LWithFooter>
)
