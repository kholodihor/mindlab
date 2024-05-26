'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useDocuments } from '@/hooks/swr/useDocuments'
import { useContacts } from '@/hooks/swr/useContacts'
import { menuList } from '@/data/data'
import css from '../footer/Footer.module.css'
import MailIcon from '../icons/MailIcon'
import TelegramIcon from '../icons/TelegramIcon'
import PhoneIcon from '../icons/PhoneIcon'

const Footer = () => {
  const t = useTranslations()
  const locale = useLocale()

  const { documents } = useDocuments()
  const { contacts } = useContacts()

  return (
    <footer className={css.footer}>
      <div className={`${css.footer_container} `}>
        <div className={css.footer__wrapper}>
          <Link href={`/${locale}`} className={css.logo}>
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
              <Link
                href={contacts ? contacts?.[0].instagram : ''}
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
              </Link>
            </li>
            <li>
              <Link
                href={contacts ? contacts?.[0].facebook : ''}
                className={css.social__link}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Image src="/svg/footer/facebook.svg" alt="icon facebook" width={40} height={40} />
              </Link>
            </li>
          </ul>
          <div className={css.wrapper__contacts}>
            <ul className={css.contact__list}>
              <li className={css.contact__item}>
                <p className={css.contact__text}>{t('Footer.help')}</p>
                <Link href={contacts ? contacts?.[0].email : ''} className={css.contact__link}>
                  <MailIcon />
                  <p>{t('Footer.mail')}</p>
                </Link>
              </li>
              <li className={css.contact__item}>
                <p className={css.contact__text}>{t('Footer.answer')}</p>
                <Link
                  href={contacts ? contacts?.[0].telegram : ''}
                  className={css.contact__link}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TelegramIcon />
                  <p>{t('Footer.telegram')}</p>
                </Link>
              </li>
              <li className={css.contact__item}>
                <p className={css.contact__text}>{t('Footer.talk')}</p>
                <Link href={contacts ? contacts?.[0].phone : ''} className={css.contact__link}>
                  <PhoneIcon />
                  <p>{t('Footer.phone')}</p>
                </Link>
              </li>
            </ul>
            <Link href={`/${locale}#feedback`} className={css.link__advice}>
              {t('Footer.btn')}
            </Link>
          </div>
        </div>
        <div className={css.thumb}>
          <ul className={css.menu__list}>
            {menuList.map(({ link, menu }) => (
              <li key={menu} className={css.menu__item}>
                <Link href={`/${locale}${link}`} className={css.menu__link}>
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
                  <Link
                    target="_blank"
                    rel="noopener noreferrer"
                    href={document.fileUrl}
                    className={css.rule__item}
                    key={document.fileId}
                  >
                    {locale === 'en' ? document.fileName_en : document.fileName_ua}
                  </Link>
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
