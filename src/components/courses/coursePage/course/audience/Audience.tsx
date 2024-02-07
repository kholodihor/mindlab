import { skillList } from '@/data/courses';
import css from './Audience.module.css'

const Audiense = () => {
    return (
<div>
    <h2 className={css.title}>Курс для вас, якщо ви</h2>
    <div className={css.wrapper}>
    <ul className={css.list}>
        <li className={css.item}>
            <div className={css.characteristic}>
            <p className={css.characteristic__number}>1<span className={css.characteristic__span}></span></p>
            <p className={css.characteristic__description}>Ще не дизайнер</p>
            </div>
            <p className={css.text}>Вивчимо базові інструменьти для створення UI дизайну сайтів та основні принципи роботи з ними.</p>
        </li>
        <li className={css.item}>
            <div className={css.characteristic}>
            <p className={css.characteristic__number}>2<span className={css.characteristic__span}></span></p>
            <p className={css.characteristic__description}>Ще не дизайнер</p>
            </div>
            <p className={css.text}>Вивчимо базові інструменьти для створення UI дизайну сайтів та основні принципи роботи з ними.</p>
        </li>
    </ul>
    <ul className={css.skills}>
       {skillList.map(({name, description, className}) => <li key={name} className={`${css.skills__item} ${css[className]}`}>
        <h3 className={css.skills__name}>{name}</h3>
        <p className={css.skills__description}>{description}</p>
       </li>)}
    </ul>
    </div>
</div>
    )
};

export default Audiense;