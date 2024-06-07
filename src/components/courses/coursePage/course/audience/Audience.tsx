import { useLocale, useTranslations } from 'next-intl'
import { ICourseResponse } from '@/types/courses'
import css from './Audience.module.css'

const Audiense = ({ currentCourse }: { currentCourse: ICourseResponse }) => {
  const t = useTranslations('Courses')
  const locale = useLocale()
  return (
    <div>
      <h2 className={css.title}>{t('audience.title')}</h2>
      <div className={css.wrapper}>
        <ul className={css.list}>
          <li className={css.item}>
            <div className={css.characteristic}>
              <p className={css.characteristic__number}>
                1<span className={css.characteristic__span}></span>
              </p>
              <p className={css.characteristic__description}>
                {locale === 'ua' ? currentCourse.forWhomTitleUa1 : currentCourse.forWhomTitleEn1}
              </p>
            </div>
            <p className={css.text}>
              {locale === 'ua'
                ? currentCourse.forWhomDescriptionUa1
                : currentCourse.forWhomDescriptionEn1}
            </p>
          </li>
          <li className={css.item}>
            <div className={css.characteristic}>
              <p className={css.characteristic__number}>
                2<span className={css.characteristic__span}></span>
              </p>
              <p className={css.characteristic__description}>
                {locale === 'ua' ? currentCourse.forWhomTitleUa2 : currentCourse.forWhomTitleEn2}
              </p>
            </div>
            <p className={css.text}>
              {locale === 'ua'
                ? currentCourse.forWhomDescriptionUa2
                : currentCourse.forWhomDescriptionEn2}
            </p>
          </li>
        </ul>
        <ul className={css.skills}>
          <li className={`${css.skills__item} ${css.own__skill}`}>
            <h3 className={css.skills__name}>{t('skills.skill1.name')}</h3>
            <p className={css.skills__description}>
              {locale === 'ua' ? currentCourse.experienceUa : currentCourse.experienceEn}
            </p>
          </li>
          <li className={`${css.skills__item} ${css.time__skill}`}>
            <h3 className={css.skills__name}>{t('skills.skill2.name')}</h3>
            <p className={css.skills__description}>
              {locale === 'ua' ? currentCourse.timeForLearningUa : currentCourse.timeForLearningEn}
            </p>
          </li>
          <li className={`${css.skills__item} ${css.english__skill}`}>
            <h3 className={css.skills__name}>{t('skills.skill3.name')}</h3>
            <p className={css.skills__description}>
              {locale === 'ua' ? currentCourse.languageLevelUa : currentCourse.languageLevelEn}
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Audiense
