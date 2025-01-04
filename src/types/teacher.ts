export interface Teacher {
  id: string
  name_ua?: string
  name_en?: string
  speciality?: string
  imageUrl?: string
  imageId?: string
  linkedinLink?: string
  facebookLink?: string
  telegramLink?: string
  instagramLink?: string
  about_me?: string
  about_help?: string
  about_me_en?: string
  about_help_en?: string
}

export type TeacherFilterCriteria = {
  query: string
  speciality: string
}
