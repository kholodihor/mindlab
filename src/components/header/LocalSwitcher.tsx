'use client'

import { usePathname, useRouter } from '@/navigation'
import { useLocale, useTranslations } from 'next-intl'
import css from './Header.module.css'

const LanguageSwitcher = () => {
  const router = useRouter()
  const path = usePathname()
  const t = useTranslations('Langs')
  const locale = useLocale()

  const handleCheckLocale = (item: string) => {
    router.replace(path, { locale: item })
  }

  console.log(locale)

  return (
    <div>
      <span
        onClick={() => handleCheckLocale('ua')}
        className={`${css.btmSwitcher} ${locale === 'ua' && css.btmSwitcher__active}`}
      >
        {t('ua')}
      </span>
      <span className={css.span}>|</span>
      <span
        onClick={() => handleCheckLocale('en')}
        className={`${css.btmSwitcher} ${locale === 'en' && css.btmSwitcher__active}`}
      >
        {t('en')}
      </span>
    </div>
  )
}

export default LanguageSwitcher
