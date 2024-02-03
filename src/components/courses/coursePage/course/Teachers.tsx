import { teachers } from '@/data/teachers'
import css from '../course/Course.module.css'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'
import Link from 'next/link'

const TeacherCourse = () => {
  return (
    <ul className={css.teachers__list}>
      {teachers.map((teacher, index) => (
        <Link href={`teachers/${teacher.key}`} key={index}>
        <TeacherCard teacher={teacher} />
      </Link>
      ))}
    </ul>
  )
}

export default TeacherCourse
