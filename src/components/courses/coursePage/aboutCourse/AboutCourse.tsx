'use client'

// import Lottie from 'lottie-react'
// import racket from '@/animations/rocket.json'

import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { useCourses } from '@/hooks/swr/useCourses'
import { useForms } from '@/hooks/swr/useForms'
import { LazyLottie } from '@/components/LazyLottie'
import TimeIcon from '@/components/icons/TimeIcon'
import PriceIcon from '@/components/icons/PriceIcon'
import SeatIcon from '@/components/icons/SeatIcon'

import css from '../aboutCourse/AboutCourse.module.css'

const AboutCourse = ({ params }: { params: { course: string } }) => {
  const { getCourseById } = useCourses()
  const { forms } = useForms()

  const registrationForm =
    forms && forms?.find((form) => form.name.toLowerCase() === 'registration form')

  const currentCourse = getCourseById(params.course)
  const locale = useLocale()
  const t = useTranslations('Courses')
  return (
    <section>
      <div className={css.about__container}>
        <div className={css.about__leftSide}>
          <h2 className={css.title}>{currentCourse?.title}</h2>
          <p className={css.description}>
            {locale === 'ua'
              ? currentCourse?.courseDescriptionUa1
              : currentCourse?.courseDescriptionEn1}
          </p>
          <Link
            href={registrationForm ? registrationForm.formLink : ''}
            rel="noopener noreferrer"
            target="_blank"
            className={css.btn}
          >
            {t('signup')}
          </Link>
        </div>
        <div className={css.about__rightSide}>
          <div className={`${css.about__wrapper} ${css.wrapper__time}`}>
            <TimeIcon />
            <p className={css.text}>
              {locale === 'ua' ? currentCourse?.startDateUa : currentCourse?.startDateEn}
            </p>
            <p className={css.timeText}>
              {t('time.text')}{' '}
              {locale === 'ua' ? currentCourse?.courseDurationUa : currentCourse?.courseDurationEn}
            </p>
            <p>{t('time.lecture')}</p>
          </div>
          <div className={`${css.about__wrapper} ${css.wrapper__price}`}>
            <PriceIcon />
            <p className={`${css.text} ${css.seattext}`}>
              {locale === 'ua' ? currentCourse?.priceUa : currentCourse?.priceEn}
            </p>
            <p className={css.timeText}>
              {locale === 'ua' ? currentCourse?.fullpriceUa : currentCourse?.fullpriceEn}
              {t('price.fullprice')}
            </p>
            <p>
              {locale === 'ua' ? currentCourse?.priceUa : currentCourse?.priceEn}
              {t('price.monthlyprice')}
            </p>
          </div>
          <div className={`${css.about__wrapper} ${css.wrapper__seat}`}>
            <SeatIcon />
            <p className={css.text__seat}>
              {locale === 'ua' ? currentCourse?.numberOfPlacesUa : currentCourse?.numberOfPlacesEn}
            </p>
          </div>
        </div>
      </div>
      {/* <Lottie animationData={racket} loop={false} /> */}
      <LazyLottie
        getAnimationData={() => import('@/animations/rocket.json')}
        id="rocket_animation"
        loop={false}
      />
    </section>
  )
}

export default AboutCourse
