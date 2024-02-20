import Image from 'next/image'
import { menuList } from '@/data/data'
import css from '../footer/Footer.module.css'
import MailIcon from '../icons/MailIcon'
import TelegramIcon from '../icons/TelegramIcon'
import PhoneIcon from '../icons/PhoneIcon'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={`container ${css.footer_container} `}>
        <div className={css.footer__wraper}>
        <Link href={'/'} className={css.logo}>
      <Image
        src="/svg/footer/footer-logo.svg"
        width={118}
        height={26}
        alt="logo"
        className={css.footer__logo}
      />
      </Link>
          <ul className={css.social__list}>
            <li>
              <Link href="https://www.instagram.com/mind.lab_hub?igsh=bWl3dGt5Njdwd3Fk&utm_source=qr" className={css.social__link} rel="noopener noreferrer" target="_blank">
                <Image src='/svg/footer/instagram.svg' alt='icon instagram' width={40} height={40}/>
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className={css.social__link}
                rel="noopener noreferrer"
                target="_blank">
                <Image src='/svg/footer/facebook.svg' alt='icon facebook' width={40} height={40}/>
              </Link>
            </li>
          </ul>
          <div className={css.wrapper__contacts}>
          <ul className={css.contact__list}>
            <li className={css.contact__item}>
              <p className={css.contact__text}>Ми допоможемо:</p>
              <Link href="mailto:mind.lab.hub@gmail.com" className={css.contact__link}>
                <MailIcon />
                <p>пошта</p>
              </Link>
            </li>
            <li className={css.contact__item}>
              <p className={css.contact__text}>Ми відповімо:</p>
              <Link
                href="https://t.me/+Q8t3dkMH84hiYmNi"
                className={css.contact__link}
                rel="noopener noreferrer"
                target="_blank">
                <TelegramIcon />
                <p>телеграм</p>
              </Link>
            </li>
            <li className={css.contact__item}>
              <p className={css.contact__text}>Ми поговоримо:</p>
              <Link href="/" className={css.contact__link}>
                <PhoneIcon />
                <p>телефон</p>
              </Link>
            </li>
          </ul>
          <Link href="/" className={css.link__advice}>
            Отримати консультацію
          </Link>
          </div>
        </div>
        <div className={css.thumb}>
        <ul className={css.menu__list}>
          {menuList.map(({ link, menu }) => (
            <li key={menu} className={css.menu__item}>
              <Link href={link} className={css.menu__link}>
                {menu}
              </Link>
            </li>
          ))}
        </ul>
        <div className={css.thumb__copyright}>
          <p className={css.copyright}>
            Copyright © 2023-2024 MindLab.{' '}
            <span className={css.spanCopyright}>Усі права захищені</span>
          </p>
          <div className={css.rules__site}>
              <Link href="/" className={css.rule__item}>Політика конфіденційності </Link>
              <Link href="/" className={css.rule__item}>Правила користування сайтом</Link>
          </div>
          </div>
        </div>
        <div className={css.footer__contact}>
        
        </div>
      </div>
    </footer>
  )
}

export default Footer
