import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'
import ArrowLeft from '@/components/icons/ArrowLeft'
import css from '@/app/[locale]/courses/[course]/page.module.css'

const ComeBackLink = () => {
  const t = useTranslations('Courses')
  return (
    <Link href="/#courses" className={css.link}>
      <ArrowLeft />
      <p className={css.link__text}>{t('comeBack')}</p>
    </Link>
  )
}

export default ComeBackLink
