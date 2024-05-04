import { z } from 'zod'
import { isURL } from 'validator'

export const ContactsFormValidation = z.object({
  email: z
    .string()
    .min(1, { message: 'Це поле повинно бути заповнене.' })
    .email('Невірний формат пошти.')
    .optional(),
  phone: z
    .string()
    .refine((value) => /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value), {
      message: 'Неправильний формат номеру'
    })
    .optional(),
  instagram: z
    .string()
    .refine((value) => value === '' || isURL(value), {
      message: 'Invalid URL format or empty string'
    })
    .optional(),
  facebook: z
    .string()
    .refine((value) => value === '' || isURL(value), {
      message: 'Invalid URL format or empty string'
    })
    .optional(),
  telegram: z
    .string()
    .refine((value) => value === '' || isURL(value), {
      message: 'Invalid URL format or empty string'
    })
    .optional()
})

export type FormFields = z.infer<typeof ContactsFormValidation>
