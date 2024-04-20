import { z } from 'zod'
import { formatBytes } from '@/helpers/formatBytes'

const MAX_FILE_SIZE = 1024 * 1024 * 3

const ACCEPTED_IMAGE_TYPES = [
  'image/jpeg',
  'image/jpg',
  'image/png',
  'image/webp',
  'for-url'
]

export type TeachersFormInput = {
  name: string;
  speciality: string;
  about: string;
  help: string;
  image: any;
  linkedinUrl: string;
  facebookUrl: string;
  telegramUrl: string
}

export const TeachersFormValidation = z.object({
  name: z.string({ required_error: 'Поле повинно бути заповнене'})
  .trim()
  .min(4, { message: "Мінімум 4 символи" })
  .max(60, { message: "Максимум 60 символів" })
  .regex(/^[A-Za-z\s]*$/, { message: "Поле повинно містити тільки літери" }),
  speciality: z.string({ required_error: 'Поле повинно бути заповнене' })
  .max(52, { message: "Ваша спеціалізація повинна містити максимум 52 символи" }),
  about: z.string({ required_error: 'Поле повинно бути заповнене' })
  .max(140, { message: "Максимум 140 символів" }),
  help: z.string({ required_error: 'Поле повинно бути заповнене' })
  .max(140, { message: "Максимум 140 символів" }),
  image: z
    .any()
    .refine((value) => value?.length > 0, 'Додайте зображення')
    .refine((value) => {
      value && value?.[0]?.size === 0 && value?.[0]?.type === 'for-url';
      return true;
    })
    .refine(
      (value) => value?.[0]?.size <= MAX_FILE_SIZE,
      `Максимальний розмір зображення ${formatBytes(MAX_FILE_SIZE)} Mb`
    )
    .refine(
      (value) => ACCEPTED_IMAGE_TYPES.includes(value?.[0]?.type),
      'Оберіть фото в форматі .jpg, .jpeg, .png або .webp.'
    ),
  linkedinUrl: z
  .string()
  .url()
  .optional(),
  facebookUrl: z
  .string()
  .url()
  .optional(),
  telegramUrl: z
  .string()
  .url()
  .optional(),
});

export type FormFields = z.infer<typeof TeachersFormValidation>;

