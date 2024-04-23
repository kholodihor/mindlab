import EditPage from '@/components/admin/teachers/editPage/EditPage'
import React from 'react'

const EditTeacherPage = ({ params }: { params: { id: string } }) => {
  return <EditPage id={params.id} />
}

export default EditTeacherPage
