/* eslint-disable react/destructuring-assignment */

import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Link from 'next/link'
import { ButtonGhost } from '~/components/atoms'
import { default as BrandMuseum } from './assets/image-hero-museum.svg'
import { default as BrandConcerts } from './assets/image-hero-concerts.svg'
import { default as BrandRestaurant } from './assets/image-hero-restaurant.svg'
import css from './HeroTextSlot.module.scss'

const MapIcons = {
  Museum: BrandMuseum,
  Concerts: BrandConcerts,
  Restaurant: BrandRestaurant,
}

type TLogos = keyof typeof MapIcons

type TLink = {
  linkUrl: string
}

type TButton = {
  onButtonClick: VoidFunction
}

type TProps = {
  logo: TLogos
  text: string
  link: string
  onMouseEnter: VoidFunction
} & (TLink | TButton)

const RenderLogo = ({ logo }: { logo: TLogos }) => {
  const Component = MapIcons[logo]
  return <Component />
}

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
        <div className={css.title}>
          <RenderLogo logo={logo} />
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
