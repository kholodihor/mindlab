export interface ITeacher {
  name?: string
  imageUrl?: string
  imageId?: string
  speciality?: string
  linkedinUrl?: string
  facebookUrl?: string
  telegramUrl?: string
  about?: string
  help?: string
}

export interface ITeacherResponse {
  id: string
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

export type TeacherFormData = {
  name?: string
  speciality?: string
  about?: string
  help?: string
  image?: FileList
  linkedinUrl?: string
  facebookUrl?: string
  telegramUrl?: string
}
