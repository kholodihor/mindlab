import { skillList } from '@/data/courses';
import css from './Audience.module.css'
import { useTranslations } from 'next-intl';

const Audiense = () => {
    const t = useTranslations("Courses")
    return (
<div>
    <h2 className={css.title}>{t("audience.title")}</h2>
    <div className={css.wrapper}>
    <ul className={css.list}>
        <li className={css.item}>
            <div className={css.characteristic}>
            <p className={css.characteristic__number}>1<span className={css.characteristic__span}></span></p>
            <p className={css.characteristic__description}>{t("audience.description")}</p>
            </div>
            <p className={css.text}>{t("audience.text")}</p>
        </li>
        <li className={css.item}>
            <div className={css.characteristic}>
            <p className={css.characteristic__number}>2<span className={css.characteristic__span}></span></p>
            <p className={css.characteristic__description}>{t("audience.description")}</p>
            </div>
            <p className={css.text}>{t("audience.text")}</p>
        </li>
    </ul>
    <ul className={css.skills}>
       {skillList.map(({name, description, className}) => <li key={name} className={`${css.skills__item} ${css[className]}`}>
        <h3 className={css.skills__name}>{t(name)}</h3>
        <p className={css.skills__description}>{t(description)}</p>
       </li>)}
    </ul>
    </div>
</div>
    )
};

export default Audiense;