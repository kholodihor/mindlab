export interface IContact {
  id: string
  email: string
  phone: string
  telegram: string
  instagram: string
  facebook: string
}

export type ContactFormData = {
  email?: string
  phone?: string
  instagramLink?: string
  facebookLink?: string
  telegramLink?: string
}
