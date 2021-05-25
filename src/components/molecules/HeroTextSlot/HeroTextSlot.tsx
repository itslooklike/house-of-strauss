import { useState } from 'react'
import Link from 'next/link'
import { ButtonGhost, Modal, ButtonForm, Logo } from '~/components/atoms'
import { IconArrowUpRight } from '~/icons'
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

  const handleShow = () => setShow(true)

  const handleClose = () => setShow(false)

  return (
    <>
      {show && (
        <Modal onClose={handleClose}>
          <div>
            <div className={css.popupTitle}>
              <Logo name="casino" />
            </div>
            <div className={css.popupSubtitle}>BISTRO & BRASSERIE</div>
            <div className={css.popupText}>
              The Bistro & Brasserie has it’s own website. To see the menu or do a booking, please
              visit the website or contact us under:
            </div>
            <a className={css.popupLink} href="mailto:bistro@zoegernitz.at">
              bistro@zoegernitz.at
            </a>
            <a className={css.popupLink} href="tel:+431122123445">
              +43 11 22 1234 45
            </a>
            <div className={css.popupButtonWrap}>
              <ButtonForm href="www.???.at" blank>
                <IconArrowUpRight width="18" />
                &nbsp;Website
              </ButtonForm>
            </div>
          </div>
        </Modal>
      )}
      <div className={css.root} onMouseEnter={onMouseEnter}>
        <div className={css.title}>{title}</div>
        <div className={css.content}>
          <div className={css.subtitle}>{text}</div>
          <div>
            {/* <Link href={linkUrl}> */}
            <ButtonGhost onClick={handleShow}>{link}</ButtonGhost>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </>
  )
}
