import { WrapContent, TextPageTitle } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './About.module.scss'

export const About = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <div className={css.content}>
        <div className={css.col1}>
          <TextPageTitle>About</TextPageTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </div>
        <div className={css.col2}>
          <img width="400" src="/images/image-about.jpg" alt="author" />
        </div>
      </div>
    </WrapContent>
  </LWithFooter>
)
