/* eslint-disable react/destructuring-assignment */

import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Link from 'next/link'
import { ButtonGhost, LogoBrand } from '~/components/atoms'
import css from './HeroTextSlot.module.scss'

type TLink = {
  linkUrl: string
}

type TButton = {
  onButtonClick: VoidFunction
}

type TProps = {
  logo: React.ComponentProps<typeof LogoBrand>['logo']
  text: string
  link: string
  onMouseEnter: VoidFunction
} & (TLink | TButton)

export const HeroTextSlot = (props: TProps) => {
  const { logo, text, link, onMouseEnter } = props

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
              {'onButtonClick' in props ? (
                <ButtonGhost onClick={props.onButtonClick}>{link}</ButtonGhost>
              ) : (
                <Link href={props.linkUrl}>
                  <a>
                    <ButtonGhost>{link}</ButtonGhost>
                  </a>
                </Link>
              )}
            </div>
          </div>
        </AnimateHeight>
      </div>
    </>
  )
}
