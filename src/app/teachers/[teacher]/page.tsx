import React from 'react'

const page = ({ params }: { params: { teacher: string } }) => {
  return (
    <div>
      <h1>{params.teacher}</h1>
    </div>
  )
}

export default page
