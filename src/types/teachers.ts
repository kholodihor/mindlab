export interface ITeacher {
  name?: string
  image?: string
  speciality?: string
  about_me?: string
  about_help?: string
  courseIds?: string[]
}

export interface ITeacherResponse extends ITeacher {
  id: string
}
