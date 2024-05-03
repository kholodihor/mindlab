import { z } from 'zod'
import { isURL } from 'validator'

export const ContactsFormValidation = z.object({
  email: z
    .string()
    .min(1, { message: "Це поле повинно бути заповнене." })
    .email("Невірний формат пошти."),
  phone: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value), {
      message: 'Неправильний формат номеру'
    }),
  instagramLink: z
    .string()
    .refine((value) => value === '' || isURL(value), {
      message: 'Invalid URL format or empty string'
    }),
  facebookLink: z
    .string()
    .refine((value) => value === '' || isURL(value), {
      message: 'Invalid URL format or empty string'
    }),
  telegramLink: z
    .string()
    .refine((value) => value === '' || isURL(value), {
      message: 'Invalid URL format or empty string'
    })
})

export type FormFields = z.infer<typeof ContactsFormValidation>
