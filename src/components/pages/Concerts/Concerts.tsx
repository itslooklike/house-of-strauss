import { Sponsors, PageContent, PageHero, Tabs } from '~/components/atoms'
import { FormDefault } from '~/components/molecules'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './Concerts.module.scss'

const tabs = [
  { title: 'Calendar', content: <>Hello1</>, disabled: true },
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
]

export const Concerts = () => (
  <LWithFooter>
    <Header />
    <PageHero theme="concerts">
      <img
        className={css.logo}
        height="195"
        src="/images/concerts-and-events-logo.svg"
        alt="concerts-logo"
      />
    </PageHero>
    <PageContent title="Enjoy concerts in the historic ballroom">
      <Tabs tabs={tabs} defaultActive={1} />
    </PageContent>
    <Sponsors />
  </LWithFooter>
)
