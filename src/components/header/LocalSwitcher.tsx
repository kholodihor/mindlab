"use client"

import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import css from "./Header.module.css";

const LanguageSwitcher = () => {
  const [currentLang, setCurentLang] = useState(useLocale());
  const router = useRouter();
const t = useTranslations("Langs")
// useEffect(()=>{console.log(currentLang)}, [currentLang])
 
  const switchLanguage = (newPath: string) => {
    router.push(newPath);
    setCurentLang(newPath);
  };

  return (
    <div>
      <button className={`${css.btmSwitcher} ${currentLang === 'ua' && css.btmSwitcher__active}`} onClick={() => switchLanguage('ua')}>
        {t("ua")}
      </button>
      <span className={css.span}>|</span>
      <button className={`${css.btmSwitcher} ${currentLang === 'en' && css.btmSwitcher__active}`} onClick={() => switchLanguage('en')}>
        {t("en")}
      </button>
    </div>
  );
};

export default LanguageSwitcher;