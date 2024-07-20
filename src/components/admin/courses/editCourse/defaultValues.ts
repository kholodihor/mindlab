import { ICourse } from '@/types/courses'

export const defaultValue = (course: ICourse) => {
  return {
    title: course ? course.title : '',
    color: course ? course.color : '',
    descriptionUa: course ? course.descriptionUa : '',
    descriptionEn: course ? course.descriptionEn : '',
    tagsUa1: course ? course.tagsUa[0] : '',
    tagsUa2: course ? course.tagsUa[1] : '',
    tagsUa3: course ? course.tagsUa[2] : '',
    tagsUa4: course?.tagsUa[3] ? course.tagsUa[3] : '#',
    tagsEn1: course ? course.tagsEn[0] : '',
    tagsEn2: course ? course.tagsEn[1] : '',
    tagsEn3: course ? course.tagsEn[2] : '',
    tagsEn4: course?.tagsEn[3] ? course.tagsEn[3] : '#',
    courseDescriptionUa1: course ? course.courseDescriptionUa1 : '',
    courseDescriptionEn1: course ? course.courseDescriptionEn1 : '',
    startDateUa: course ? course.startDateUa : '',
    startDateEn: course ? course.startDateEn : '',
    courseDurationUa: course ? course.courseDurationUa : '',
    courseDurationEn: course ? course.courseDurationEn : '',
    priceUa: course ? course.priceUa : '',
    priceEn: course ? course.priceEn : '',
    fullpriceUa: course ? course.fullpriceUa : '',
    fullpriceEn: course ? course.fullpriceEn : '',
    numberOfPlacesUa: course ? course.numberOfPlacesUa : '',
    numberOfPlacesEn: course ? course.numberOfPlacesEn : '',
    experienceUa: course ? course.experienceUa : '',
    experienceEn: course ? course.experienceEn : '',
    languageLevelUa: course ? course.languageLevelUa : '',
    languageLevelEn: course ? course.languageLevelEn : '',
    timeForLearningUa: course ? course.timeForLearningUa : '',
    timeForLearningEn: course ? course.timeForLearningEn : '',
    forWhomTitleUa1: course ? course.forWhomTitleUa1 : '',
    forWhomTitleUa2: course ? course.forWhomTitleUa2 : '',
    forWhomDescriptionUa1: course ? course.forWhomDescriptionUa1 : '',
    forWhomDescriptionUa2: course ? course.forWhomDescriptionUa2 : '',
    forWhomTitleEn1: course ? course.forWhomTitleEn1 : '',
    forWhomTitleEn2: course ? course.forWhomTitleEn2 : '',
    forWhomDescriptionEn1: course ? course.forWhomDescriptionEn1 : '',
    forWhomDescriptionEn2: course ? course.forWhomDescriptionEn2 : '',
    themeTitleUa: course ? course.themeTitleUa : '',
    themeTitleEn: course ? course.themeTitleEn : '',
    themesUa1: course.themesUa[0] ? course.themesUa[0] : '',
    themesUa2: course.themesUa[1] ? course.themesUa[1] : '',
    themesUa3: course.themesUa[2] ? course.themesUa[2] : '',
    themesUa4: course.themesUa[3] ? course.themesUa[3] : '',
    themesUa5: course.themesUa[4] ? course.themesUa[4] : '',
    themesUa6: course?.themesUa[5] ? course.themesUa[5] : '',
    themesUa7: course?.themesUa[6] ? course.themesUa[6] : '',
    themesUa8: course?.themesUa[7] ? course.themesUa[7] : '',
    themesUa9: course?.themesUa[8] ? course.themesUa[8] : '',
    themesUa10: course?.themesUa[9] ? course.themesUa[9] : '',
    themesUa11: course?.themesUa[10] ? course.themesUa[10] : '',
    themesUa12: course?.themesUa[11] ? course.themesUa[11] : '',
    themesUa13: course?.themesUa[12] ? course.themesUa[12] : '',
    themesUa14: course?.themesUa[13] ? course.themesUa[13] : '',
    themesUa15: course?.themesUa[14] ? course.themesUa[14] : '',
    themesUa16: course?.themesUa[15] ? course.themesUa[15] : '',
    themesUa17: course?.themesUa[16] ? course.themesUa[16] : '',
    themesUa18: course?.themesUa[17] ? course.themesUa[17] : '',
    themesEn1: course.themesEn[0] ? course.themesEn[0] : '',
    themesEn2: course.themesEn[1] ? course.themesEn[1] : '',
    themesEn3: course.themesEn[2] ? course.themesEn[2] : '',
    themesEn4: course.themesEn[3] ? course.themesEn[3] : '',
    themesEn5: course.themesEn[4] ? course.themesEn[4] : '',
    themesEn6: course?.themesEn[5] ? course.themesEn[5] : '',
    themesEn7: course?.themesEn[6] ? course.themesEn[6] : '',
    themesEn8: course?.themesEn[7] ? course.themesEn[7] : '',
    themesEn9: course?.themesEn[8] ? course.themesEn[8] : '',
    themesEn10: course?.themesEn[9] ? course.themesEn[9] : '',
    themesEn11: course?.themesEn[10] ? course.themesEn[10] : '',
    themesEn12: course?.themesEn[11] ? course.themesEn[11] : '',
    themesEn13: course?.themesEn[12] ? course.themesEn[12] : '',
    themesEn14: course?.themesEn[13] ? course.themesEn[13] : '',
    themesEn15: course?.themesEn[14] ? course.themesEn[14] : '',
    themesEn16: course?.themesEn[15] ? course.themesEn[15] : '',
    themesEn17: course?.themesEn[16] ? course.themesEn[16] : '',
    themesEn18: course?.themesEn[17] ? course.themesEn[17] : '',
    faqUa1: course.faqUa[0] ? course.faqUa[0]?.questionUa : '',
    faqEn1: course.faqEn[0] ? course.faqEn[0]?.questionEn : '',
    faqUa2: course.faqUa[1] ? course.faqUa[1]?.questionUa : '',
    faqEn2: course.faqEn[1] ? course.faqEn[1]?.questionEn : '',
    faqUa3: course.faqUa[2] ? course.faqUa[2]?.questionUa : '',
    faqEn3: course.faqEn[2] ? course.faqEn[2]?.questionEn : '',
    faqUa4: course.faqUa[3] ? course.faqUa[3]?.questionUa : '',
    faqEn4: course.faqEn[3] ? course.faqEn[3]?.questionEn : '',
    faqUa5: course.faqUa[4] ? course.faqUa[4]?.questionUa : '',
    faqEn5: course.faqEn[4] ? course.faqEn[4]?.questionEn : '',
    answerUa1: course.faqUa[0] ? course.faqUa[0]?.answerUa : '',
    answerUa2: course.faqUa[1] ? course.faqUa[1]?.answerUa : '',
    answerUa3: course.faqUa[2] ? course.faqUa[2]?.answerUa : '',
    answerUa4: course.faqUa[3] ? course.faqUa[3]?.answerUa : '',
    answerUa5: course.faqUa[4] ? course.faqUa[4]?.answerUa : '',
    answerEn1: course.faqEn[0] ? course.faqEn[0]?.answerEn : '',
    answerEn2: course.faqEn[1] ? course.faqEn[1]?.answerEn : '',
    answerEn3: course.faqEn[2] ? course.faqEn[2]?.answerEn : '',
    answerEn4: course.faqEn[3] ? course.faqEn[3]?.answerEn : '',
    answerEn5: course.faqEn[4] ? course.faqEn[4]?.answerEn : '',
    teacherIds: { value: '', label: '' }
  }
}
