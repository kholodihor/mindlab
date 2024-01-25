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

import css from '../partners/Partners.module.css'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

const Partners = () => {
  return (
    <section className={css.partners} id="partners">
      <div className={`container`}>
        <div className={css.part__left}>
          <Lottie className={css.icon__eye} animationData={eye} />
          <h2 className={`title ${css.partners__title}`}>
            Гайс, подивіться, які круті партнери співпрацюють з MindLab
          </h2>
          <div className={css.icon__arrow}>
            <ArrowPartners />
          </div>

          <p className={css.partners__question}>Хочеш познайомитися з ними ближче?</p>
          <div className={css.icon__fire}>
            <Fire />
            <Fire />
            <Fire />
          </div>
          <p className={css.partners__text}>Ми маємо чим пишатися, бо нашими партнерами стали:</p>
          <p className={css.partners__list}>{partners.map(({ name }) => `${name}, `)}</p>
        </div>
        <div className={css.part__right}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            mousewheel={true}
            loop={true}
            modules={[Navigation, Mousewheel, Scrollbar]}
          >
            {partners.map(({ name, logo, text, color, link }) => (
              <SwiperSlide
                key={name}
                className={css.swiperSlide}
                style={{ background: `${color}` }}
              >
                <Image
                  width={200}
                  height={200}
                  src={logo}
                  alt="logo"
                  className={css.partners__logo}
                />
                <p className={css.partners__description}>{text}</p>
                <a href={link} className={css.swiper__link}>
                  <p className={css.partners__name}>{name}</p>
                  <div className={color === '#f9f9fa' ? `${css.icon}` : ''}>
                    <ArrowSliderPartners />
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Partners
