import { z } from 'zod'
import { isURL } from 'validator'

export const FormValidation = z.object({
  name: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .trim()
    .min(4, { message: 'Мінімум 4 символи' })
    .max(60, { message: 'Максимум 60 символів' })
    .regex(/^[a-zA-Z0-9 ]*$/, { message: 'Вкажіть коректну назву англійською мовою' }),
  formLink: z.string().refine((value) => value === '' || isURL(value), {
    message: 'Невалідний формат URL'
  }),
  excelLink: z.string().refine((value) => value === '' || isURL(value), {
    message: 'Невалідний формат URL'
  })
})

export type FormFields = z.infer<typeof FormValidation>
