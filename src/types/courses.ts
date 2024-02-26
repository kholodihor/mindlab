export interface ICourse {
  title?: string
  description?: string
  tags?: string[]
  teacherIds?: string[]
}

export interface ICourseResponse extends ICourse {
  id: string
}
