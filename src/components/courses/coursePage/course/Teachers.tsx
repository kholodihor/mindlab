import { useTeachers } from '@/hooks/swr/useTeachers'
import Link from 'next/link'
import TeacherCard from '@/components/shared/teacher_card/TeacherCard'
import css from '../course/Course.module.css'

type Prop = {
  course: string
}

const TeacherCourse = ({ course }: Prop) => {
  const { teachers } = useTeachers()
  const currentTeatchers = teachers?.filter((item) => item.speciality === course)

  return (
    <>
      <ul className={css.teachers__list}>
        {currentTeatchers?.map((teacher, index) => (
          <Link href={`/teachers/${teacher.id}`} key={index}>
            <TeacherCard teacher={teacher} />
          </Link>
        ))}
      </ul>
      {currentTeatchers?.length === 0 && <p>Щось пішло не так. Спробуйте будь ласка знову.</p>}
    </>
  )
}

export default TeacherCourse
