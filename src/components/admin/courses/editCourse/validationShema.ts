import { z } from 'zod'

export const editCourseValidation = z.object({
  title: z
    .string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(125, 'Текст має містити максимум 125 символи'),
  color: z.string().nonempty('Виберіть колір'),
  descriptionUa: z
    .string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи'),
  descriptionEn: z
    .string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи'),
  tagsUa1: z
    .string()
    .nonempty('Заповніть поле')
    .regex(/^#/, {
      message: 'Рядок повинен починатися з #'
    })
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(40, 'Текст має містити максимум 40 символи'),
  tagsUa2: z
    .string()
    .nonempty('Заповніть поле')
    .regex(/^#/, {
      message: 'Рядок повинен починатися з #'
    })
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(40, 'Текст має містити максимум 40 символи'),
  tagsUa3: z
    .string()
    .nonempty('Заповніть поле')
    .regex(/^#/, {
      message: 'Рядок повинен починатися з #'
    })
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(40, 'Текст має містити максимум 40 символи'),
  tagsUa4: z.string().regex(/^#/, {
    message: 'Рядок повинен починатися з #'
  }),
  tagsEn1: z
    .string()
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(40, 'Текст має містити максимум 40 символи')
    .regex(/^#/, {
      message: 'Рядок повинен починатися з #'
    })
    .regex(/^[A-Za-z\s.#/,-]*$/, {
      message: 'Рядок повинен містити тільки англійські літери'
    }),
  tagsEn2: z
    .string()
    .nonempty('Заповніть поле')
    .regex(/^#/, {
      message: 'Рядок повинен починатися з #'
    })
    .regex(/^[A-Za-z\s.#/,-]*$/, {
      message: 'Рядок повинен містити тільки англійські літери'
    })
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(40, 'Текст має містити максимум 40 символи'),
  tagsEn3: z
    .string()
    .nonempty('Заповніть поле')
    .regex(/^#/, {
      message: 'Рядок повинен починатися з #'
    })
    .regex(/^[A-Za-z\s.#/,-]*$/, {
      message: 'Рядок повинен містити тільки англійські літери'
    })
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(40, 'Текст має містити максимум 40 символи'),
  tagsEn4: z.string().regex(/^#/, {
    message: 'Рядок повинен починатися з #'
  }),
  courseDescriptionUa1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(900, 'Текст має містити максимум 900 символи'),
  startDateUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  numberOfPlacesUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(7, 'Текст має містити мінімум 7 символи')
    .max(9, 'Текст має містити максимум 9 символи'),
  priceUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  fullpriceUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  courseDescriptionEn1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(900, 'Текст має містити максимум 900 символи'),
  startDateEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  courseDurationUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  courseDurationEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  numberOfPlacesEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(7, 'Текст має містити мінімум 7 символи')
    .max(9, 'Текст має містити максимум 9 символи'),
  priceEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  fullpriceEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
  themeTitleUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи'),
  themeTitleEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи'),
  themesUa1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(60, 'Текст має містити максимум 60 символи'),
  themesUa2: z.any().optional(),
  themesUa3: z.string().optional(),
  themesUa4: z.string().optional(),
  themesUa5: z.string().optional(),
  themesUa6: z.string().optional(),
  themesUa7: z.string().optional(),
  themesUa8: z.string().optional(),
  themesUa9: z.string().optional(),
  themesUa10: z.string().optional(),
  themesUa11: z.string().optional(),
  themesUa12: z.string().optional(),
  themesUa13: z.string().optional(),
  themesUa14: z.string().optional(),
  themesUa15: z.string().optional(),
  themesUa16: z.string().optional(),
  themesUa17: z.string().optional(),
  themesUa18: z.string().optional(),
  themesEn1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(60, 'Текст має містити максимум 60 символи'),
  themesEn2: z.string().optional(),
  themesEn3: z.string().optional(),
  themesEn4: z.string().optional(),
  themesEn5: z.string().optional(),
  themesEn6: z.string().optional(),
  themesEn7: z.string().optional(),
  themesEn8: z.string().optional(),
  themesEn9: z.string().optional(),
  themesEn10: z.string().optional(),
  themesEn11: z.string().optional(),
  themesEn12: z.string().optional(),
  themesEn13: z.string().optional(),
  themesEn14: z.string().optional(),
  themesEn15: z.string().optional(),
  themesEn16: z.string().optional(),
  themesEn17: z.string().optional(),
  themesEn18: z.string().optional(),
  experienceUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  languageLevelUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  timeForLearningUa: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  forWhomTitleUa1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  forWhomDescriptionUa1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  forWhomTitleUa2: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  forWhomDescriptionUa2: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  experienceEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  languageLevelEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  timeForLearningEn: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(160, 'Текст має містити максимум 160 символи'),
  forWhomTitleEn1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(60, 'Текст має містити максимум 60 символи'),
  forWhomDescriptionEn1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(120, 'Текст має містити максимум 120 символи'),
  forWhomTitleEn2: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(60, 'Текст має містити максимум 60 символи'),
  forWhomDescriptionEn2: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(120, 'Текст має містити максимум 120 символи'),
  faqUa1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(120, 'Текст має містити максимум 120 символи'),
  faqEn1: z
    .string()
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(120, 'Текст має містити максимум 120 символи'),
  answerUa1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(120, 'Текст має містити максимум 120 символи'),
  answerEn1: z
    .string({ required_error: 'Заповніть поле' })
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(120, 'Текст має містити максимум 120 символи'),
  faqUa2: z.string().optional(),
  faqUa3: z.string().optional(),
  faqUa4: z.string().optional(),
  faqUa5: z.string().optional(),
  faqEn2: z.string().optional(),
  faqEn3: z.string().optional(),
  faqEn4: z.string().optional(),
  faqEn5: z.string().optional(),
  answerUa2: z.string().optional(),
  answerUa3: z.string().optional(),
  answerUa4: z.string().optional(),
  answerUa5: z.string().optional(),
  answerEn2: z.string().optional(),
  answerEn3: z.string().optional(),
  answerEn4: z.string().optional(),
  answerEn5: z.string().optional(),
  teacherId: z.object({ value: z.string(), label: z.string() })
})
