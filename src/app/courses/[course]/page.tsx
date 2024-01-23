import React from 'react'

const page = ({ params }: { params: { course: string } }) => {
  return (
    <div>
      <h1>{params.course}</h1>
    </div>
  )
}

export default page
