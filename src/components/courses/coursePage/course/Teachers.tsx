import { useTeachers } from '@/hooks/swr/useTeachers'
import { Link } from '@/navigation'
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
        {currentTeatchers?.map((teacher) => (
          <li key={teacher.id}>
            <Link href={`/teachers/${teacher.id}`}>
              <TeacherCard teacher={teacher} />
            </Link>
          </li>
        ))}
      </ul>
      {currentTeatchers?.length === 0 && <p>Щось пішло не так. Спробуйте будь ласка знову.</p>}
    </>
  )
}

export default TeacherCourse
