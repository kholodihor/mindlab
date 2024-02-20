import TeacherPage from '@/components/teachers/teacher_page/TeacherPage'

const page = ({ params }: { params: { id: string } }) => {
  return (
    <div className="container">
      <TeacherPage id={params.id} />
    </div>
  )
}

export default page
