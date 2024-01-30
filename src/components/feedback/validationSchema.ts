import { z } from 'zod'

export const feedbackValidation = z.object({
  name: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .max(25, 'Ім’я має містити максимум 25 символів'),

  email: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(2, 'Електронна пошта має містити мінімум 2 символи')
    .max(55, 'Електронна пошта має містити максимум 55 символів')
    .refine(
      (value) =>
        /^[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+@[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+\.[a-zA-Z]{2,}$/.test(
          value
        ),
      {
        message: 'Введіть коректние ім’я англійською мовою'
      }
    ),

  message: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(2, 'Питання має містити мінімум 2 символи')
    .max(300, 'Питання має містити максимум 300 символів')
})