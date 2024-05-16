export interface ITeacher {
  name?: string
  imageUrl?: string
  imageId?: string
  speciality?: string
  linkedinLink?: string
  facebookLink?: string
  telegramLink?: string
  instagramLink?: string
  about_me?: string
  about_help?: string
  about_me_en?: string
  about_help_en?: string
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
  instagramLink?: string
  about_me_en?: string
  about_help_en?: string
}
