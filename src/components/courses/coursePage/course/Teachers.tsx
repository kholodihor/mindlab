import { teachers } from "@/components/teachers/slider/data";
import Image from "next/image";
import css from '../course/Course.module.css'

const TeacherCourse = () => {
    return (
        <ul className={css.teachers__list}>
        {teachers.map((teacher, index) => (
            <li key={index} className={css.teachers__item}>
              <Image
                width={275}
                height={295}
                src={teacher.image}
                alt={teacher.name}
                className={css.teachers__image}
              />
              <h3 className={css.teachers__name}>{teacher.name}</h3>
              <p className={css.teachers__speciality}>{teacher.speciality}</p>
              <Image
                width={281}
                height={302}
                src="/teachers/mask.png"
                alt="mask"
                className={css.teachers__mask}
              />
            </li>
          ))}
          </ul>
    )
};

export default TeacherCourse;