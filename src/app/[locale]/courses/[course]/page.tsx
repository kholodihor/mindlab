import css from './page.module.css'
import prisma from '@/lib/prisma'
import AboutCourse from '@/components/courses/coursePage/aboutCourse/AboutCourse'
import Course from '@/components/courses/coursePage/course/Course'
import ComeBackLink from '@/components/courses/coursePage/ComeBack'
import Page404 from '@/components/page_404/Page404'

const isObjectId = (id: string) => /^[a-f\d]{24}$/i.test(id)

const CoursePage = async ({ params }: { params: { course: string } }) => {
  const courseExists =
    isObjectId(params.course) && (await prisma.course.count({ where: { id: params.course } })) > 0

  if (!courseExists) return <Page404 />

  return (
    <div className={`container ${css.course__container}`}>
      <ComeBackLink />
      <AboutCourse params={params} />
      <Course params={params} />
    </div>
  )
}

export default CoursePage
