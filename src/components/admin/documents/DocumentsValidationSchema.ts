import { z } from 'zod'
import { formatBytes } from '@/helpers/formatBytes'

const MAX_FILE_SIZE = 1024 * 1024 * 5

const ACCEPTED_FILE_TYPES = ['application/pdf', 'for-url']

export const DocumentsFormValidation = z.object({
  fileName: z
    .string({ required_error: 'Поле повинно бути заповнене' })
    .trim()
    .min(4, { message: 'Мінімум 4 символи' })
    .max(60, { message: 'Максимум 60 символів' })
    .regex(/^[A-Za-zа-яА-ЯҐґЄєІіЇї\s]*$/, { message: 'Поле повинно містити тільки літери' }),
  file: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте файл')
    .refine((value) => {
      value && value?.[0]?.size === 0 && value?.[0]?.type === 'for-url'
      return true
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір файлу ${formatBytes(MAX_FILE_SIZE)} Mb`
    )
    .refine(
      (value) => ACCEPTED_FILE_TYPES.includes(value?.[0]?.type),
      'Оберіть файл в форматі .pdf.'
    )
})

export type FormFields = z.infer<typeof DocumentsFormValidation>
