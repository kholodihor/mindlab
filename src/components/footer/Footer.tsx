'use client'

import Image from 'next/image'
import { Link } from '@/navigation'
import { useLocale, useTranslations } from 'next-intl'
import { useDocuments } from '@/hooks/swr/useDocuments'
import { useContacts } from '@/hooks/swr/useContacts'
import { menuList } from '@/data/data'
import MailIcon from '../icons/MailIcon'
import TelegramIcon from '../icons/TelegramIcon'
import PhoneIcon from '../icons/PhoneIcon'
import css from '../footer/Footer.module.css'

const Footer = () => {
  const t = useTranslations()
  const locale = useLocale()

  const { documents } = useDocuments()
  const { contacts } = useContacts()

  return (
    <footer className={css.footer}>
      <div className={`${css.footer_container} `}>
        <div className={css.footer__wrapper}>
          <Link href="/" className={css.logo}>
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
              <a
                href={contacts?.[0]?.instagram ?? ''}
                className={css.social__link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image
                  src="/svg/footer/instagram.svg"
                  alt="icon instagram"
                  width={40}
                  height={40}
                />
              </a>
            </li>
            <li>
              <a
                href={contacts?.[0]?.facebook ?? ''}
                className={css.social__link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src="/svg/footer/facebook.svg" alt="icon facebook" width={40} height={40} />
              </a>
            </li>
          </ul>
          <div className={css.wrapper__contacts}>
            <ul className={css.contact__list}>
              <li className={css.contact__item}>
                <p className={css.contact__text}>{t('Footer.help')}</p>
                <a href={`mailto:${contacts?.[0]?.email ?? ''}`} className={css.contact__link}>
                  <MailIcon />
                  <p>{t('Footer.mail')}</p>
                </a>
              </li>
              <li className={css.contact__item}>
                <p className={css.contact__text}>{t('Footer.answer')}</p>
                <a
                  href={contacts?.[0]?.telegram ?? ''}
                  className={css.contact__link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TelegramIcon />
                  <p>{t('Footer.telegram')}</p>
                </a>
              </li>
              <li className={css.contact__item}>
                <p className={css.contact__text}>{t('Footer.talk')}</p>
                <a
                  href={`tel:${(contacts?.[0]?.phone ?? '').replace(/[^\d+]/g, '')}`}
                  className={css.contact__link}
                >
                  <PhoneIcon />
                  <p>{t('Footer.phone')}</p>
                </a>
              </li>
            </ul>
            <Link href="/#feedback" className={css.link__advice}>
              {t('Footer.btn')}
            </Link>
          </div>
        </div>
        <div className={css.thumb}>
          <ul className={css.menu__list}>
            {menuList.map(({ link, menu }) => (
              <li key={menu} className={css.menu__item}>
                <Link href={`/${link}`} className={css.menu__link}>
                  {t(menu)}
                </Link>
              </li>
            ))}
          </ul>
          <div className={css.thumb__copyright}>
            <p className={css.copyright}>
              Copyright © 2023-2024 MindLab.{' '}
              <span className={css.spanCopyright}>{t('Footer.rights')}</span>
            </p>
            <div className={css.rules__site}>
              {documents &&
                documents.map((document) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={document.fileUrl}
                    className={css.rule__item}
                    key={document.fileId}
                  >
                    {locale === 'en' ? document.fileName_en : document.fileName_ua}
                  </a>
                ))}
            </div>
          </div>
        </div>
        <div className={css.footer__contact}></div>
      </div>
    </footer>
  )
}

export default Footer
