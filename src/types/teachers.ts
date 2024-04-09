export interface ITeacher {
  name?: string
  imageUrl?: string
  imageId?: string
  speciality?: string
  linkedinLink: string
  facebookLink: string
  telegramLink: string
  about_me?: string
  about_help?: string
  courseIds?: string[]
}

export interface ITeacherResponse extends ITeacher {
  id: string
}
