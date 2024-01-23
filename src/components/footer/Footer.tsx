import Image from 'next/image'
import { menuList } from '@/data/data'
import css from '../footer/Footer.module.css'
import FacebookIcon from '../icons/FacebookIcon'
import InstagramIcon from '../icons/InstagramIcon'
import MailIcon from '../icons/MailIcon'
import TelegramIcon from '../icons/TelegramIcon'
import PhoneIcon from '../icons/PhoneIcon'

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Image
        src="/svg/logoFullName.svg"
        width={100}
        height={100}
        alt="logo"
        className={css.footer__logo}
      />
      <div className={css.footer_container}>
        <div className={css.footer__wraper}>
          <ul className={css.social__list}>
            <li>
              <a href="/" className={css.social__link} rel="noopener noreferrer" target="_blank">
                <FacebookIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/mind.lab_hub?igsh=bWl3dGt5Njdwd3Fk&utm_source=qr"
                className={css.social__link}
                rel="noopener noreferrer"
                target="_blank">
                <InstagramIcon />
              </a>
            </li>
          </ul>
          <p>
            Copyright © 2023-2024 MindLab.{' '}
            <span className={css.spanCopyright}>Усі права захищені</span>
          </p>
          <ul>
            <li>
              <a href="/">Політика конфіденційності </a>
            </li>
            <li>
              <a href="/">Правила користування сайтом</a>
            </li>
          </ul>
        </div>
        <ul className={css.menu__list}>
          {menuList.map(({ link, menu }) => (
            <li key={menu} className={css.menu__item}>
              <a href={link} className={css.menu__link}>
                {menu}
              </a>
            </li>
          ))}
        </ul>
        <div className={css.footer__contact}>
          <ul className={css.contact__list}>
            <li className={css.contact__item}>
              <p className={css.contact__text}>Ми допоможемо:</p>
              <a href="mailto:mind.lab.hub@gmail.com" className={css.contact__link}>
                <MailIcon />
                <p>пошта</p>
              </a>
            </li>
            <li className={css.contact__item}>
              <p className={css.contact__text}>Ми відповімо:</p>
              <a
                href="https://t.me/+Q8t3dkMH84hiYmNi"
                className={css.contact__link}
                rel="noopener noreferrer"
                target="_blank">
                <TelegramIcon />
                <p>телеграм</p>
              </a>
            </li>
            <li className={css.contact__item}>
              <p className={css.contact__text}>Ми поговоримо:</p>
              <a href="/" className={css.contact__link}>
                <PhoneIcon />
                <p>телефон</p>
              </a>
            </li>
          </ul>
          <a href="/" className={css.link__advice}>
            Отримати консультацію
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
