import { z } from 'zod'


export const addCourseValidation = z.object({
  title: z
    .string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(125, 'Текст має містити максимум 125 символи'),
    color: z
    .string()
    .nonempty('Виберіть колір'),
    descriptionUa: z.string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(300, 'Текст має містити максимум 300 символи'),
    descriptionEn: z.string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(300, 'Текст має містити максимум 300 символи'),
    tagsUa1: z.string()
    .nonempty('Заповніть поле')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(24, 'Текст має містити максимум 24 символи'),
      tagsUa2:z.string()
      .nonempty('Заповніть поле')
      .min(2, 'Текст має містити мінімум 2 символи')
      .max(24, 'Текст має містити максимум 24 символи'),
      tagsUa3: z.string()
      .nonempty('Заповніть поле')
      .min(2, 'Текст має містити мінімум 2 символи')
      .max(24, 'Текст має містити максимум 24 символи'),
      tagsUa4: z.string(),
      tagsEn1: z.string()
      .nonempty('Заповніть поле')
      .min(2, 'Текст має містити мінімум 2 символи')
      .max(24, 'Текст має містити максимум 24 символи'),
        tagsEn2:z.string()
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи'),
        tagsEn3: z.string()
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи'),
        tagsEn4: z.string(),
        courseDescriptionUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(300, 'Текст має містити максимум 300 символи'),
        startDateUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи'),
        numberOfPlacesUa:z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(7, 'Текст має містити мінімум 7 символи')
        .max(9, 'Текст має містити максимум 9 символи'),
        priceUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи'),
        courseDescriptionEn1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(300, 'Текст має містити максимум 300 символи'),
        startDateEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи'),
        numberOfPlacesEn:z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(7, 'Текст має містити мінімум 7 символи')
        .max(9, 'Текст має містити максимум 9 символи'),
        priceEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи'),
        themeTitleUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи'),
        themesUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(60, 'Текст має містити максимум 60 символи'), 
        themesUa2: z.string(), themesUa3: z.string(), themesUa4: z.string(), themesUa5: z.string(),themesUa6: z.string(),themesUa7: z.string(),themesUa8: z.string(),themesUa9: z.string(),themesUa10: z.string(),themesUa11: z.string(),themesUa12: z.string(),themesUa13: z.string(), themesUa14: z.string(), themesUa15: z.string(), themesUa16: z.string(), themesUa17: z.string(), themesUa18: z.string(),
        themesEn1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(60, 'Текст має містити максимум 60 символи'), 
        themesEn2: z.string(), themesEn3: z.string(), themesEn4: z.string(), themesEn5: z.string(),themesEn6: z.string(),themesEn7: z.string(),themesEn8: z.string(),themesEn9: z.string(),themesEn10: z.string(),themesEn11: z.string(),themesEn12: z.string(),themesEn13: z.string(), themesEn14: z.string(), themesEn15: z.string(), themesEn16: z.string(), themesEn17: z.string(), themesEn18: z.string(),
})
