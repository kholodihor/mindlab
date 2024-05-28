import { z } from 'zod'


export const addCourseValidation = z.object({
  title: z
    .string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(125, 'Текст має містити максимум 125 символи')
    .regex(/^[А-Яа-яЁёЇїІіЄєҐґA-Za-z\s/-]*$/, {
      message: "Введіть коректну назву"
    }),
    color: z
    .string()
    .nonempty('Виберіть колір'),
    descriptionUa: z.string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи')
    .regex(/^[А-Яа-яЁёЇїІіЄєҐґA-Za-z\s./,-;:’'"?!()”%]*$/, {
      message: `Введіть коректний текст`
    }),
    descriptionEn: z.string()
    .nonempty('Поле повинно бути заповнене')
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(500, 'Текст має містити максимум 500 символи')
    .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
      message: `Введіть коректний текст англійською.`
    }),
    tagsUa1: z.string()
    .nonempty('Заповніть поле')
    .regex(/^#/, {
      message: "Рядок повинен починатися з #"
    })
    .min(2, 'Текст має містити мінімум 2 символи')
    .max(40, 'Текст має містити максимум 40 символи'),
      tagsUa2:z.string()
      .nonempty('Заповніть поле')
      .min(2, 'Текст має містити мінімум 2 символи')
      .max(40, 'Текст має містити максимум 40 символи')
      .regex(/^#/, {
        message: "Рядок повинен починатися з #"
      }),
      tagsUa3: z.string()
      .nonempty('Заповніть поле')
      .min(2, 'Текст має містити мінімум 2 символи')
      .max(40, 'Текст має містити максимум 40 символи')
      .regex(/^#/, {
        message: "Рядок повинен починатися з #"
      }),
      tagsUa4: z.string().regex(/^#/, {
        message: "Рядок повинен починатися з #"
      }),
      tagsEn1: z.string()
      .nonempty('Заповніть поле')
      .min(2, 'Текст має містити мінімум 2 символи')
      .max(40, 'Текст має містити максимум 40 символи')
      .regex(/^#/, {
        message: "Рядок повинен починатися з #"
      })
      .regex(/^[A-Za-z\s.#/,-]*$/, {
        message: "Рядок повинен містити тільки англійські літери"
      }),
        tagsEn2:z.string()
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(40, 'Текст має містити максимум 40 символи')
        .regex(/^#/, {
          message: "Рядок повинен починатися з #"
        })
        .regex(/^[A-Za-z\s.#/,-]*$/, {
          message: "Рядок повинен містити тільки англійські літери"
        }),
        tagsEn3: z.string()
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(40, 'Текст має містити максимум 40 символи')
        .regex(/^#/, {
          message: "Рядок повинен починатися з #"
        })
        .regex(/^[A-Za-z\s.#/,-]*$/, {
          message: "Рядок повинен містити тільки англійські літери"
        }),
        tagsEn4: z.string().regex(/^#/, {
          message: "Рядок повинен починатися з #"
        }),
        courseDescriptionUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(900, 'Текст має містити максимум 900 символи')
        .regex(/^[А-Яа-яЁёЇїІіЄєҐґA-Za-z\s./,-;’:'"!?()”%]*$/, {
          message: "Введіть коректну назву"
        }),
        startDateUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[А-Яа-яЇїІіЄєҐґ0-9\s’]+$/, {
          message: "Введіть коректний текст українською"
        })
        ,
        numberOfPlacesUa:z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(7, 'Текст має містити мінімум 7 символи')
        .max(11, 'Текст має містити максимум 11 символи')
        .regex(/^[А-Яа-яЇїІіЄєҐґ0-9\s’]+$/, {
          message: "Введіть коректний текст українською"
        }),
        priceUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[А-Яа-яЇїІіЄєҐґ0-9\s./’-]+$/, {
          message: "Введіть коректний текст українською"
        }),
        fullpriceUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[А-Яа-яЁёЇїІіЄєҐґ0-9\s’.]+$/, {
          message: "Введіть коректний текст українською"
        }),
        courseDescriptionEn1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(900, 'Текст має містити максимум 900 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        startDateEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[A-Za-z0-9\s]+$/, {
          message: "Введіть коректний текст англійською"
        }),
        courseDurationUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[А-Яа-яЇїІіЄєҐґ0-9\s’]+$/, {
          message: "Введіть коректний текст українською"
        }),
        courseDurationEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[A-Za-z0-9\s]+$/, {
          message: "Введіть коректний текст англійською"
        }),
        numberOfPlacesEn:z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(7, 'Текст має містити мінімум 7 символи')
        .max(11, 'Текст має містити максимум 11 символи')
        .regex(/^[A-Za-z0-9\s]+$/, {
          message: "Введіть коректний текст англійською"
        }),
        priceEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[A-Za-z0-9\s./-]+$/, {
          message: "Введіть коректний текст англійською"
        }),
        fullpriceEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(24, 'Текст має містити максимум 24 символи')
        .regex(/^[a-zA-Z0-9\s.]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        themeTitleUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(500, 'Текст має містити максимум 500 символи'),
        themeTitleEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(500, 'Текст має містити максимум 500 символи')
        .regex(/^[A-Za-z0-9\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        themesUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(60, 'Текст має містити максимум 60 символи'), 
        themesUa2: z.string(), themesUa3: z.string(), themesUa4: z.string(), themesUa5: z.string(),themesUa6: z.string(),themesUa7: z.string(),themesUa8: z.string(),themesUa9: z.string(),themesUa10: z.string(),themesUa11: z.string(),themesUa12: z.string(),themesUa13: z.string(), themesUa14: z.string(), themesUa15: z.string(), themesUa16: z.string(), themesUa17: z.string(), themesUa18: z.string(),
        themesEn1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(60, 'Текст має містити максимум 60 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }), 
        themesEn2: z.string(), themesEn3: z.string(), themesEn4: z.string(), themesEn5: z.string(),themesEn6: z.string(),themesEn7: z.string(),themesEn8: z.string(),themesEn9: z.string(),themesEn10: z.string(),themesEn11: z.string(),themesEn12: z.string(),themesEn13: z.string(), themesEn14: z.string(), themesEn15: z.string(), themesEn16: z.string(), themesEn17: z.string(), themesEn18: z.string(),
        experienceUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(160, 'Текст має містити максимум 160 символи'),
        languageLevelUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(160, 'Текст має містити максимум 160 символи'),
        timeForLearningUa: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(160, 'Текст має містити максимум 160 символи'),
        forWhomTitleUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(160, 'Текст має містити максимум 160 символи'),
        forWhomDescriptionUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи'),
        forWhomTitleUa2: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи'),
        forWhomDescriptionUa2: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи'),
        experienceEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(160, 'Текст має містити максимум 160 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        languageLevelEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(160, 'Текст має містити максимум 160 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        timeForLearningEn: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(160, 'Текст має містити максимум 160 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        forWhomTitleEn1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(60, 'Текст має містити максимум 60 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        forWhomDescriptionEn1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        forWhomTitleEn2: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(60, 'Текст має містити максимум 60 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        forWhomDescriptionEn2: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        faqUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи'),
        faqEn1: z.string()
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }), 
        answerUa1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи'),
        answerEn1: z.string({required_error: 'Заповніть поле'})
        .nonempty('Заповніть поле')
        .min(2, 'Текст має містити мінімум 2 символи')
        .max(120, 'Текст має містити максимум 120 символи')
        .regex(/^[A-Za-z\s./,-;:'"!?()”%]*$/, {
          message: "Введіть коректний текст англійською"
        }),
        faqUa2: z.string(), faqUa3: z.string(), faqUa4: z.string(), faqUa5: z.string(), faqEn2: z.string(), faqEn3: z.string(), faqEn4: z.string(), faqEn5: z.string(), answerUa2: z.string(), answerUa3: z.string(), answerUa4: z.string(), answerUa5: z.string(), answerEn2: z.string(), answerEn3: z.string(), answerEn4: z.string(), answerEn5: z.string(),
        teacherId: z.object({value: z.string(),label: z.string()
          
        })
              
})
