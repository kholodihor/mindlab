'use client'

import Image from 'next/image'
import eye from '@/animations/eye.json'
import Lottie from 'lottie-react'
import ArrowPartners from '../icons/ArrowPartners'
import ArrowSliderPartners from '../icons/ArrowSliderPartners'
import Fire from '../icons/Fire'
import { partners } from '@/data/data'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel, Scrollbar } from 'swiper/modules'
import Link from 'next/link'
import ArrowPartnersTablet from '../icons/ArrowPartnersTablet'
import { motion } from 'framer-motion'
import { useWidth } from '@/hooks/useWidth'
import { useTranslations } from 'next-intl'

import css from '../partners/Partners.module.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'


const Partners = () => {
  const currentWidth = useWidth()
  const t = useTranslations("Partners");
  return (
    <section className={`${css.partners} container`} id="partners">
      <div className={css.part__left}>
        <Lottie className={css.icon__eye} animationData={eye} />
        <motion.h2
          viewport={{ once: true }}
          initial={{ translateY: 100, opacity: 0 }}
          whileInView={{ translateY: 0, opacity: 1 }}
          transition={{ ease: 'easeOut', duration: 0.75 }}
          className={`title ${css.partners__title}`}
        >
          {t("title")}
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
        <p className={css.partners__question}>{t("question")}</p>
        <div className={css.icon__fire}>
          <Fire />
          <Fire />
          <Fire />
        </div>
        <p className={css.partners__text}>{t("text")}</p>
        <p className={css.partners__list}>{partners.map(({ name }) => `${name}, `)}</p>
      </div>
      <div className={css.part__right}>
        <Swiper
          spaceBetween={0}
          slidesPerView={'auto'}
          mousewheel={true}
          loop={true}
          modules={[Navigation, Mousewheel, Scrollbar]}
        >
          {partners.map(({ name, logo, text, color, link }) => (
            <SwiperSlide key={name} className={css.swiperSlide} style={{ background: `${color}` }}>
              <Image
                width={180}
                height={170}
                src={logo}
                alt="logo"
                className={css.partners__logo}
              />
              <p className={css.partners__description}>{t(text)}</p>
              <Link href={link} className={css.swiper__link}>
                <p className={css.partners__name}>{t(name)}</p>
                <div className={css.link__icon}>
                  <ArrowSliderPartners />
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Partners
