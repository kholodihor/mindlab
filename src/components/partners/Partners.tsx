'use client'

import Image from 'next/image'
import ArrowPartners from '../icons/ArrowPartners'
import ArrowSliderPartners from '../icons/ArrowSliderPartners'
import { usePartners } from '@/hooks/swr/usePartners'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel, Scrollbar } from 'swiper/modules'
import Link from 'next/link'
import ArrowPartnersTablet from '../icons/ArrowPartnersTablet'
import { motion } from 'framer-motion'
import { useWidth } from '@/hooks/useWidth'
import { useLocale, useTranslations } from 'next-intl'
import { LazyLottie } from '@/components/LazyLottie'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'
import css from '../partners/Partners.module.css'

const Partners = () => {
  const { partners } = usePartners()
  const locale = useLocale()
  const currentWidth = useWidth()
  const t = useTranslations('Partners')
  return (
    <section className={`${css.partners} container`} id="partners">
      <div className={`${css.part__left} `}>
        <LazyLottie
          getAnimationData={() => import('@/animations/eye.json')}
          id="partners_animation"
          loop={true}
          className={css.icon__eye}
        />
        <motion.h2
          viewport={{ once: true }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.75 }}
          className={`title ${css.partners__title}`}
        >
          {t('title')}
        </motion.h2>
        {currentWidth < 1280 ? (
          <div className={css.icon__arrowTablet}>
            <ArrowPartnersTablet />
          </div>
        ) : (
          <div className={css.icon__arrow}>
            <ArrowPartners />
          </div>
        )}
        <p className={css.partners__question}>{t('question')}</p>
        <div className={css.icon__fire}>
          <Image width={38} height={49} src={'/svg/Fire.svg'} alt="fire" className={css.img} />
          <Image width={38} height={49} src={'/svg/Fire.svg'} alt="fire" className={css.img} />
          <Image width={38} height={49} src={'/svg/Fire.svg'} alt="fire" className={css.img} />
        </div>
        <p className={css.partners__text}>{t('text')}</p>
        <p className={css.partners__list}>{t('partnersList')}</p>
      </div>
      <div className={css.part__right}>
        <Swiper
          spaceBetween={0}
          slidesPerView={'auto'}
          mousewheel={true}
          loop={true}
          modules={[Navigation, Mousewheel, Scrollbar]}
          // className={css.swiper}
        >
          {partners?.map(
            ({
              nameUa,
              nameEn,
              websiteLink,
              descriptionEn,
              descriptionUa,
              color,
              id,
              imageUrl
            }) => (
              <SwiperSlide key={id} className={css.swiperSlide} style={{ background: `${color}` }}>
                <Image
                  width={105}
                  height={105}
                  src={imageUrl}
                  alt="logo"
                  className={css.partners__logo}
                />
                <p className={css.partners__description}>
                  {locale === 'ua' ? descriptionUa : descriptionEn}
                </p>
                <Link href={websiteLink} className={css.swiper__link}>
                  <p className={css.partners__name}>{locale === 'ua' ? nameUa : nameEn}</p>
                  <div className={css.link__icon}>
                    <ArrowSliderPartners />
                  </div>
                </Link>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </div>
    </section>
  )
}

export default Partners
