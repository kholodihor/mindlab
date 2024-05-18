import { z } from 'zod'
import { isURL } from 'validator'
import { formatBytes } from '@/helpers/formatBytes'

const MAX_FILE_SIZE = 1024 * 1024 * 3

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'for-url']

export const TeachersFormValidation = z.object({
  name_ua: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .trim()
    .min(4, { message: 'Мінімум 4 символи' })
    .max(60, { message: 'Максимум 60 символів' })
    .regex(/^[а-яА-Яє-їЄ-Ї ]*$/, {
      message: 'Поле повинно містити тільки літери української мови'
    }),
  name_en: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .trim()
    .min(4, { message: 'Мінімум 4 символи' })
    .max(60, { message: 'Максимум 60 символів' })
    .regex(/^[a-zA-Z ]*$/, { message: 'Поле повинно містити тільки літери англійської мови' }),
  speciality: z
    .string()
    .min(1, { message: 'Поле повинно бути заповнене' })
    .max(52, { message: 'Ваша спеціалізація повинна містити максимум 52 символи' }),
  about_me: z
    .string()
    .min(1, { message: 'Поле повинно бути заповнене' })
    .max(200, { message: 'Максимум 200 символів' })
    .refine((value) => /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s\d'’ʼ.,:;"()!?-]+$/.test(value), {
      message: 'Введіть коректний текст українською мовою'
    }),
  about_help: z
    .string()
    .min(1, { message: 'Поле повинно бути заповнене' })
    .max(200, { message: 'Максимум 200 символів' })
    .refine((value) => /^[a-zA-Zа-яА-ЯҐґЄєІіЇї\s\d'’ʼ.,:;"()!?-]+$/.test(value), {
      message: 'Введіть коректний текст українською мовою'
    }),
  about_me_en: z
    .string()
    .min(1, { message: 'Поле повинно бути заповнене' })
    .max(200, { message: 'Максимум 200 символів' })
    .refine((value) => /^[a-zA-Z\s\d'’.,-:;"()!?-]+$/.test(value), {
      message: 'Введіть коректний текст англійською мовою'
    }),
  about_help_en: z
    .string()
    .min(1, { message: 'Поле повинно бути заповнене' })
    .max(200, { message: 'Максимум 200 символів' })
    .refine((value) => /^[a-zA-Z\s\d'’.,-:;"()!?-]+$/.test(value), {
      message: 'Введіть коректний текст англійською мовою'
    }),
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
  linkedinLink: z
    .string()
    .optional()
    .refine((value) => value === '' || isURL(value), {
      message: 'Невалідний формат URL'
    }),
  facebookLink: z
    .string()
    .optional()
    .refine((value) => value === '' || isURL(value), {
      message: 'Невалідний формат URL'
    }),
  telegramLink: z
    .string()
    .optional()
    .refine((value) => value === '' || isURL(value), {
      message: 'Невалідний формат URL'
    }),
  instagramLink: z
    .string()
    .optional()
    .refine((value) => value === '' || isURL(value), {
      message: 'Невалідний формат URL'
    })
})

export type FormFields = z.infer<typeof TeachersFormValidation>
