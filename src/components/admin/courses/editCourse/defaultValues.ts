type Courseprops = {
    title: string,
    color: string,
    descriptionUa: string,
    descriptionEn: string,
    tagsUa1: string,
    tagsUa2: string,
    tagsUa3: string,
    tagsUa4?: string,
    tagsEn1: string,
    tagsEn2: string,
    tagsEn3: string,
    tagsEn4?: string,
    courseDescriptionUa1: string,
    courseDescriptionEn1: string,
    startDateUa: string,
    startDateEn: string,
    courseDurationUa: string,
    courseDurationEn: string,
    priceUa: string,
    priceEn: string,
    fullpriceUa: string,
    fullpriceEn: string,
    numberOfPlacesUa: string,
    numberOfPlacesEn: string,
    themeTitleUa: string,
    themeTitleEn: string,
    themesUa1: string,themesUa2?: string,themesUa3?: string,themesUa4?: string, themesUa5?: string, themesUa6?: string, themesUa7?: string,themesUa8: string,themesUa9: string,
    themesUa10?: string,themesUa11?: string,themesUa12?: string,themesUa13?: string,themesUa14?: string, themesUa15?: string,themesUa16?: string,themesUa17?: string,themesUa18?: string,
    themesEn1: string,themesEn2: string,themesEn3: string,themesEn4: string, themesEn5: string, themesEn6: string, themesEn7: string,themesEn8: string,themesEn9: string,
    themesEn10: string,themesEn11: string,themesEn12: string,themesEn13: string,themesEn14: string, themesEn15: string,themesEn16: string,themesEn17: string,themesEn18: string,
    faqUa1: string,
    faqEn1: string,
    faqUa2: string,
    faqEn2: string,
    faqUa3: string,
    faqEn3: string,
    faqUa4: string,
    faqEn4: string,
    faqUa5: string,
    faqEn5: string,
    answerUa1: string,
    answerUa2: string,
    answerUa3: string,
    answerUa4: string,
    answerUa5: string,
    answerEn1: string,
    answerEn2: string,
    answerEn3: string,
    answerEn4: string,
    answerEn5: string,
    teacherId: { value: string, label: string}
}
export const defaultValue = (course: Courseprops) => {
    return {
        title: course ? course.title : "",
        color: course ? course.color : '',
        descriptionUa: course ? course.descriptionUa : '',
        descriptionEn: course ? course.descriptionEn : '',
        tagsUa1: course ? course.tagsUa1 : '',
        tagsUa2: course ? course.tagsUa2 : '',
        tagsUa3: course ? course.tagsUa3 : '',
        tagsUa4: course ? course.tagsUa4 : '',
        tagsEn1: course ? course.tagsEn1 : '',
        tagsEn2: course ? course.tagsEn2 : '',
        tagsEn3: course ? course.tagsEn3 : '',
        tagsEn4: course ? course.tagsEn4 : '',
        courseDescriptionUa1: course ? course.courseDescriptionUa1 : '',
        courseDescriptionEn1: course ? course.courseDescriptionEn1 : '',
        startDateUa: course ? course.startDateUa : '',
        startDateEn: course ? course.startDateEn : '',
        courseDurationUa: course ? course.courseDurationUa : '',
        courseDurationEn: course ? course.courseDurationUa : '',
        priceUa: course ? course.priceUa : '',
        priceEn: course ? course.priceEn : '',
        fullpriceUa: course ? course.fullpriceUa : '',
        fullpriceEn: course ? course.fullpriceEn : '',
        numberOfPlacesUa: course ? course.numberOfPlacesUa : '',
        numberOfPlacesEn: course ? course.numberOfPlacesEn : '',
        themeTitleUa: course ? course.themeTitleUa : '',
        themeTitleEn: course ? course.themeTitleEn : '',
        themesUa1: course ? course.themesUa1 : '',themesUa2: course ? course.themesUa2: '',themesUa3: course ? course.themesUa3: '',themesUa4: course ? course.themesUa4: '', themesUa5: course ? course.themesUa5: '', themesUa6: course ? course.themesUa6 : '', themesUa7: course ? course.themesUa7 : '',themesUa8: course ? course.themesUa8 : '',themesUa9: course ? course.themesUa9 : '',
        themesUa10: course ? course.themesUa10 : '',themesUa11: course ? course.themesUa10 : '',themesUa12: course ? course.themesUa12 : '',themesUa13: course ? course.themesUa13 : '',themesUa14: course ? course.themesUa14 : '', themesUa15: course ? course.themesUa15 : '',themesUa16: course ? course.themesUa16 : '',themesUa17: course ? course.themesUa17 : '',themesUa18: course ? course.themesUa18 : '',
        themesEn1: course ? course.themesEn1 : '',themesEn2: course ? course.themesEn2 : '',themesEn3: course ? course.themesEn3 : '',themesEn4: course ? course.themesEn4 : '', themesEn5: course ? course.themesEn5 : '', themesEn6: course ? course.themesEn6 : '', themesEn7: course ? course.themesEn7 : '',themesEn8: course ? course.themesEn8 : '',themesEn9: course ? course.themesEn9 : '',
        themesEn10: course ? course.themesEn10 : '',themesEn11: course ? course.themesEn11 : '',themesEn12: course ? course.themesEn12 : '',themesEn13: course ? course.themesEn13 : '',themesEn14: course ? course.themesEn14 : '', themesEn15: course ? course.themesEn15 : '',themesEn16: course ? course.themesEn16 : '',themesEn17: course ? course.themesEn17 : '',themesEn18: course ? course.themesEn18 : '',
        faqUa1: course ? course.faqUa1 : '',
        faqEn1: course ? course.faqEn1 : '',
        faqUa2: course ? course.faqUa2 : '',
        faqEn2: course ? course.faqEn2 : '',
        faqUa3: course ? course.faqUa3 : '',
        faqEn3: course ? course.faqEn3 : '',
        faqUa4: course ? course.faqUa4 : '',
        faqEn4: course ? course.faqEn4 : '',
        faqUa5: course ? course.faqUa5 : '',
        faqEn5: course ? course.faqEn5 : '',
        answerUa1: course ? course.answerUa1 : '',
        answerUa2: course ? course.answerUa2 : '',
        answerUa3: course ? course.answerUa3 : '',
        answerUa4: course ? course.answerUa4 : '',
        answerUa5: course ? course.answerUa5 : '',
        answerEn1: course ? course.answerEn1 : '',
        answerEn2: course ? course.answerEn2 : '',
        answerEn3: course ? course.answerEn3 : '',
        answerEn4: course ? course.answerEn4 : '',
        answerEn5: course ? course.answerEn5 : '',
        teacherId: course ? course.teacherId : { value: '', label: ''}
}
}

export const defaultdata = {
        title: 'PoliticaPolitical science-sociologyl science-sociology',
        color: '#AAAEDF',
        descriptionUa: 'Допоможе тобі поглибити розуміння політичних явищ та суспільних процесів, а також їх взаємодію і вплив на соціум',
        descriptionEn: '',
        tagsUa1: '# Конфліктологія ',
        tagsUa2: '#Теорія соціальних змін ',
        tagsUa3: '#Соціологія нації ',
        tagsUa4: '',
        tagsEn1: '',
        tagsEn2: '',
        tagsEn3: '',
        tagsEn4: '',
        courseDescriptionUa1: 'Ім’я Гайс, ви переймаєтесь тим, що вібувається в політиці? Думаєте, як поліпшити соціальне становище в своїй державі та мрієте про економічне зростання для України? Тоді тобі необхідно заглибитися і отримати сталі знання в галузі Рolitical science-sociology. В стоїх руках - реальні зміни!',
        courseDescriptionEn1: 'Ім’я Hey, are you worried about what is happening in politics? Thinking about how to improve the social situation in your country and dreaming of economic growth of Ukraine? Then you need to dig deeper and gain solid knowledge in the field of political science-sociology. Real changes are in your hands!',
        startDateUa: '23 березня 2024',
        startDateEn: '23 March 2024',
        courseDurationUa: '2 місяці',
        courseDurationEn: '2 months',
        priceUa: '700 грн/міс.',
        priceEn: 'UAH 700/month',
        fullpriceUa: '1200 грн.',
        fullpriceEn: 'UAH 1200',
        numberOfPlacesUa: '15 місць',
        numberOfPlacesEn: '15 places',
        themeTitleUa: 'Ім’я Ми готові запускати новий напрямок Рolitical science-sociology, цікавишся цим напрямком?',
        themeTitleEn: 'We are ready to launch a new field of political science-sociology, are you interested in this field? ',
        themesUa1: 'Що таке політика',themesUa2: 'Що таке політика',themesUa3: 'Що таке політика',themesUa4: 'Що таке політика', themesUa5: '', themesUa6: '', themesUa7: '',themesUa8: '',themesUa9: '',
        themesUa10: '',themesUa11: '',themesUa12: '',themesUa13: '',themesUa14: '', themesUa15: '',themesUa16: '',themesUa17: '',themesUa18: '',
        themesEn1: 'What is politics?',themesEn2: 'What is politics?',themesEn3: 'What is politics?',themesEn4: 'What is politics?', themesEn5: '', themesEn6: '', themesEn7: '',themesEn8: '',themesEn9: '',
        themesEn10: '',themesEn11: '',themesEn12: '',themesEn13: '',themesEn14: '', themesEn15: '',themesEn16: '',themesEn17: '',themesEn18: '',
        faqUa1: 'Які навички необхідні для вступу?',
        faqEn1: 'What skills are required for entry?',
        faqUa2: 'Які навички необхідні для вступу?',
        faqEn2: 'What skills are required for entry?',
        faqUa3: '',
        faqEn3: '',
        faqUa4: '',
        faqEn4: '',
        faqUa5: '',
        faqEn5: '',
        answerUa1: 'Для вступу необхідно базово знати інтерфейс Adobe After Effects та основи графічного дизайну.',
        answerUa2: 'Для вступу необхідно базово знати інтерфейс Adobe After Effects та основи графічного дизайну.',
        answerUa3: '',
        answerUa4: '',
        answerUa5: '',
        answerEn1: 'To get started, you need a basic knowledge of the Adobe After Effects interface and the basics of graphic design.',
        answerEn2: 'To get started, you need a basic knowledge of the Adobe After Effects interface and the basics of graphic design.',
        answerEn3: '',
        answerEn4: '',
        answerEn5: '',
        teacherId: { value: '1', label: 'Ana Garty'}
}