import TeacherPage from '@/components/teachers/teacher_page/TeacherPage'

const page = ({ params }: { params: { teacher: string } }) => {
  return (
    <div className="container">
      <TeacherPage nameKey={params.teacher} />
    </div>
  )
}

export default page
