import { z } from 'zod'
import { formatBytes } from '@/helpers/formatBytes'

const MAX_FILE_SIZE = 1024 * 1024 * 3

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'for-url']

export const TeachersFormValidation = z.object({
  name: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .trim()
    .min(4, { message: 'Мінімум 4 символи' })
    .max(60, { message: 'Максимум 60 символів' })
    .regex(/^[a-zA-Zа-яА-Яє-їЄ-Ї ]*$/, { message: 'Поле повинно містити тільки літери' }),
  speciality: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .max(52, { message: 'Ваша спеціалізація повинна містити максимум 52 символи' }),
  about_me: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .max(140, { message: 'Максимум 140 символів' }),
  about_help: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .max(140, { message: 'Максимум 140 символів' }),
  image: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте зображення')
    .refine((value) => {
      value && value?.[0]?.size === 0 && value?.[0]?.type === 'for-url'
      return true
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)} Mb`
    )
    .refine(
      (value) => ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Оберіть фото в форматі .jpg, .jpeg, .png або .webp.'
    ),
  linkedinLink: z.string().url().optional(),
  facebookLink: z.string().url().optional(),
  telegramLink: z.string().url().optional()
})

export type FormFields = z.infer<typeof TeachersFormValidation>
