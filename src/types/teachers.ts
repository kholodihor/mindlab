export interface ITeacher {
  name?: string
  imageUrl?: string
  imageId?: string
  speciality?: string
  linkedinLink?: string
  facebookLink?: string
  telegramLink?: string
  about_me?: string
  about_help?: string
}

export interface ITeacherResponse extends ITeacher {
  id: string
}

export type TeacherFormData = {
  name?: string
  speciality?: string
  about_me?: string
  about_help?: string
  image?: FileList
  linkedinLink?: string
  facebookLink?: string
  telegramLink?: string
}
