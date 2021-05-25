import { useState } from 'react'
import AnimateHeight from 'react-animate-height'
import Link from 'next/link'
import { ButtonGhost, Modal } from '~/components/atoms'
import { PopupMaster } from '~/components/molecules'
import css from './HeroTextSlot.module.scss'

type TProps = {
  title: string
  text: string
  link: string
  linkUrl: string
  onMouseEnter: VoidFunction
}

export const HeroTextSlot = ({ title, text, link, linkUrl, onMouseEnter }: TProps) => {
  const [show, setShow] = useState(false)

  const [height, setHeight] = useState<number | 'auto'>(0)

  const handleToggle = () => setHeight(height === 0 ? 'auto' : 0)

  const handleShow = () => setShow(true)

  const handleClose = () => setShow(false)

  return (
    <>
      {show && (
        <Modal onClose={handleClose}>
          <PopupMaster />
        </Modal>
      )}
      <div
        className={css.root}
        onMouseEnter={() => {
          onMouseEnter()
          handleToggle()
        }}
        onMouseLeave={handleToggle}
      >
        <div className={css.title}>{title}</div>
        <AnimateHeight height={height} animateOpacity className="lol">
          <div className={css.content}>
            <div className={css.subtitle}>{text}</div>
            <div>
              {/* <Link href={linkUrl}> */}
              <ButtonGhost onClick={handleShow}>{link}</ButtonGhost>
              {/* </Link> */}
            </div>
          </div>
        </AnimateHeight>
      </div>
    </>
  )
}
