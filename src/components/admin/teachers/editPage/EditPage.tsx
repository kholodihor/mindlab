import React from 'react'
import { teachers } from '../teacher'
import PageTitle from '../../shared/pageTitle/PageTitle'

const EditPage = ({ id }: { id: string }) => {
  const editedTeacher = teachers.find((teacher) => parseInt(teacher.id) === parseInt(id))

  return (
    <section>
      <PageTitle isAddButtonDisplayed={false} isSettingsButtonDisplayed={false} title='редагування викладача' />
      <div>{editedTeacher.name}</div>
    </section>
  )
  
}

export default EditPage
