import React from 'react'
import { teachers } from '@/data/teachers'

const page = ({ params }: { params: { teacher: string } }) => {
  const teacher = teachers.find((teacher) => teacher.key === params.teacher)
  console.log(teacher)
  return (
    <div>
      <h1>{teacher?.name}</h1>
    </div>
  )
}

export default page
