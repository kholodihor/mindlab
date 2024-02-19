import { z } from 'zod'

export const loginScheme = z.object({
  email: z
    .string()
    .min(2, 'Електронна пошта має містити мінімум 2 символи')
    .max(55, 'Електронна пошта має містити максимум 55 символів')
    .refine(
      (value) =>
        /^[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+@[a-zA-Z0-9_%+-]*(?:\.[a-zA-Z0-9_%+-]+)?[a-zA-Z0-9_%+-]+\.[a-zA-Z]{2,}$/.test(
          value
        ),
      {
        message: 'Некоректно введений email'
      }
    ),

  password: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .min(6, 'Пароль має містити мінімум 6 символів')
    .max(14, 'Пароль має містити максимум 14 символів')
})
