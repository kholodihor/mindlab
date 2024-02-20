export type TTeacher = {
  name?: string
  image?: string
  speciality?: string
}

export type TTeacherResponse = TTeacher & {
  id: string
}
