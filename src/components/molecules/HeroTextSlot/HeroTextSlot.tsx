import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import { ButtonGhost, LogoBrand } from '~/components/atoms'
import { LinkPopup } from '~/utils/LinkPopup'
import type { TRoute } from '~/utils/config'
import css from './HeroTextSlot.module.scss'

type TProps = {
  logo: React.ComponentProps<typeof LogoBrand>['logo']
  text: string
  link: string
  onMouseEnter: VoidFunction
  route: TRoute
}

export const HeroTextSlot = (props: TProps) => {
  const { logo, text, link, route, onMouseEnter } = props

  const [height, setHeight] = useState<0 | 'auto'>(0)

  const handleScrollShow = () => setHeight('auto')

  const handleScrollHide = () => setHeight(0)

  return (
    <>
      <div
        className={css.root}
        onMouseEnter={() => {
          onMouseEnter()
          handleScrollShow()
        }}
        onMouseLeave={handleScrollHide}
      >
        <div>
          <LogoBrand logo={logo} />
        </div>
        <AnimateHeight height={height} animateOpacity>
          <div className={css.content}>
            <div className={css.subtitle}>{text}</div>
            <div>
              <LinkPopup href={route.url} withPopup={route.withPopup}>
                <a>
                  <ButtonGhost>{link}</ButtonGhost>
                </a>
              </LinkPopup>
            </div>
          </div>
        </AnimateHeight>
      </div>
    </>
  )
}
