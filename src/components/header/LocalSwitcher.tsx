"use client"

import { useLocale, useTranslations } from 'next-intl';
import css from "./Header.module.css";
import Link from 'next/link';

const LanguageSwitcher = () => {
const t = useTranslations("Langs")
const locale = useLocale();
  return (
    <div>
      <Link href={'/ua'} className={`${css.btmSwitcher} ${locale === 'ua' && css.btmSwitcher__active}`}>
        {t("ua")}
      </Link>
      <span className={css.span}>|</span>
      <Link href={'/en'} className={`${css.btmSwitcher} ${locale === 'en' && css.btmSwitcher__active}`}>
        {t("en")}
      </Link>
    </div>
  );
};

export default LanguageSwitcher;