export interface ICourse {
  title: string
  descriptionUa: string
  descriptionEn: string
  tagsUa: string[]
  tagsEn: string[]
  color: string
  courseDescriptionUa1: string
  courseDurationUa: string
  courseDescriptionEn1: string
  courseDurationEn: string
  startDateUa: string
  startDateEn: string
  priceUa: string
  priceEn: string
  fullpriceUa: string
  fullpriceEn: string
  numberOfPlacesUa: string
  numberOfPlacesEn: string
  experienceUa: string
  experienceEn: string
  languageLevelUa: string
  languageLevelEn: string
  timeForLearningUa: string
  timeForLearningEn: string
  forWhomTitleUa1: string
  forWhomTitleUa2: string
  forWhomDescriptionUa1: string
  forWhomDescriptionUa2: string
  forWhomTitleEn1: string
  forWhomTitleEn2: string
  forWhomDescriptionEn1: string
  forWhomDescriptionEn2: string
  themeTitleUa: string
  themeTitleEn: string
  themesUa: string[]
  themesEn: string[]
  faqUa: FaqUa[]
  faqEn: FaqEn[]
  teacherIds: string[]
}

export interface ICourseResponse extends ICourse {
  id: string
}

type FaqEn = {
  questionEn: string
  answerEn: string
}

type FaqUa = {
  questionUa: string
  answerUa: string
}

export interface ICourseStatic {
  title?: string
  description?: string
  tags?: string[]
  teacherIds?: string[]
}

export interface ICourseResponseStatic extends ICourseStatic {
  id: string
}
