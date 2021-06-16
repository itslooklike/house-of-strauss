import { WrapContent, Sponsors } from '~/components/atoms'
import { Header } from '~/components/organisms'
import { LWithFooter } from '~/components/layouts'
import css from './About.module.scss'

const persons = [
  { title: 'Herman Rauter', description: 'Initiator', imgUrl: '/images/image-about.jpg' },
  { title: 'Herman Rauter', description: 'Initiator', imgUrl: '/images/image-about.jpg' },
  { title: 'Herman Rauter', description: 'Initiator', imgUrl: '/images/image-about.jpg' },
  { title: 'Herman Rauter', description: 'Initiator', imgUrl: '/images/image-about.jpg' },
  { title: 'Herman Rauter', description: 'Initiator', imgUrl: '/images/image-about.jpg' },
]

export const About = () => (
  <LWithFooter>
    <Header type="dark" />
    <WrapContent>
      <h1 className={css.title}>About</h1>

      <div className={css.content}>
        <p className={css.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>

        <p className={css.projectTitle}>Projektteam</p>
      </div>

      <div className={css.aboutWrap}>
        {persons.map((person) => (
          <div>
            <img width="200" src={person.imgUrl} alt={person.title} />
            <div>{person.title}</div>
            <div>{person.description}</div>
          </div>
        ))}
      </div>
    </WrapContent>
    <Sponsors />
  </LWithFooter>
)
