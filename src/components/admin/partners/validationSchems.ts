import { z } from 'zod'
import { isURL } from 'validator'
import { formatBytes } from '@/helpers/formatBytes'

const MAX_FILE_SIZE = 1024 * 1024 * 3

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp', 'image/svg', 'image/svg+xml', 'for-url']

export const PartnersValidation = z.object({
  nameUa: z
    .string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(125, 'Текст має містити максимум 125 символи'),
    nameEn: z
    .string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(125, 'Текст має містити максимум 125 символи'),
    color: z
    .string()
    .nonempty('Виберіть колір'),
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
      'Оберіть фото в форматі .jpg, .jpeg, .png, .svg, або .webp.'
    ),
    websiteLink: z
    .string({required_error: 'Заповніть поле'})
    .nonempty('Поле повинно бути заповнене')
    .optional()
    .refine((value) => value === '' || isURL(value), {
      message: 'Invalid URL format or empty string'
    }),
    descriptionUa: z.string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи'),
    descriptionEn: z.string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи')
        })

        export type FormFields = z.infer<typeof PartnersValidation>