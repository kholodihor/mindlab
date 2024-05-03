export interface IContact {
  id: string
  name?: string
  value?: string
  icon?: string
}

export type ContactFormData = {
  email?: string
  phone?: string
  instagramLink?: string
  facebookLink?: string
  telegramLink?: string
}
