export type CoursesPage = {
  name: string
  title: string
  description: string
  time: {
    date: string
    duration: string
  }
  price: {
    full: number
    monthly: number
  }
  seat: number
  text: string
  topic: Array<string>
}

type SkillList = {
  name: string
  description: string
  className: string
}


export type QuestionCourse = {
  question: string
  answer: string
  id: number
}

export type SidebarCourses = Array<string>

export const coursesPage: Array<CoursesPage> = [
  {
    name: 'political',
    title: 'Political science-sociology',
    description:
      'politicalScienceSociology.about',
    time: {
      date: 'politicalScienceSociology.time.date',
      duration: 'politicalScienceSociology.time.duration'
    },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'politicalScienceSociology.text',
    topic: [
    "politicalScienceSociology.topic.topic1",
    "politicalScienceSociology.topic.topic2",
    "politicalScienceSociology.topic.topic3",
    "politicalScienceSociology.topic.topic4",
    "politicalScienceSociology.topic.topic5",
    "politicalScienceSociology.topic.topic6",
    "politicalScienceSociology.topic.topic7",
    "politicalScienceSociology.topic.topic8",
    "politicalScienceSociology.topic.topic9",
    "politicalScienceSociology.topic.topic10",
    "politicalScienceSociology.topic.topic11",
    "politicalScienceSociology.topic.topic12",
    "politicalScienceSociology.topic.topic13",
    "politicalScienceSociology.topic.topic14",
    "politicalScienceSociology.topic.topic15",
    "politicalScienceSociology.topic.topic16",
    "politicalScienceSociology.topic.topic17",  
    ]
  },
  {
    name: 'leadership',
    title: 'Leadership',
    description:
    'leadership.about',
  time: {
    date: 'leadership.time.date',
    duration: 'leadership.time.duration'
  },
  price: {
    full: 1200,
    monthly: 700
  },
  seat: 15,
  text: 'leadership.text',
  topic: [
    "leadership.topic.topic1",
    "leadership.topic.topic2",
    "leadership.topic.topic3",
    "leadership.topic.topic4",
    "leadership.topic.topic5",
    "leadership.topic.topic6",
    "leadership.topic.topic7",
    "leadership.topic.topic8",
    "leadership.topic.topic9"
  ]
  },
  {
    name: 'business',
    title: 'Business',
    description:
    'business.about',
  time: {
    date: 'business.time.date',
    duration: 'business.time.duration'
  },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'business.text',
    topic: [
      "business.topic.topic1",
    "business.topic.topic2",
    "business.topic.topic3",
    "business.topic.topic4",
    "business.topic.topic5",
    "business.topic.topic6",
    "business.topic.topic7",
    ]
  },
  {
    name: 'innovative',
    title: 'Іnnovative technologies',
    description:
      'innovativeTechnologies.about',
      time: {
        date: 'innovativeTechnologies.time.date',
        duration: 'innovativeTechnologies.time.duration'
      },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'innovativeTechnologies.text',
    topic: [
      "innovativeTechnologies.topic.topic1",
    "innovativeTechnologies.topic.topic2",
    "innovativeTechnologies.topic.topic3",
    "innovativeTechnologies.topic.topic4",
    "innovativeTechnologies.topic.topic5",
    "innovativeTechnologies.topic.topic6"
    ]
  },
  {
    name: 'art',
    title: 'ART',
    description:
      'art.about',
      time: {
        date: 'art.time.date',
        duration: 'art.time.duration'
      },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'art.text',
    topic: [
      "art.topic.topic1",
      "art.topic.topic2",
      "art.topic.topic3",
      "art.topic.topic4",
      "art.topic.topic5",
      "art.topic.topic6",
      "art.topic.topic7"
    ]
  },
  {
    name: 'career',
    title: ' Career counseling/Career guidance',
    description:
      "careerCounselin.about",
      time: {
        date: 'careerCounselin.time.date',
        duration: 'careerCounselin.time.duration'
      },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'careerCounselin.text',
    topic: [
      "careerCounselin.topic.topic1",
      "careerCounselin.topic.topic2",
      "careerCounselin.topic.topic3",
      "careerCounselin.topic.topic4",
      "careerCounselin.topic.topic5",
      "careerCounselin.topic.topic6",
      "careerCounselin.topic.topic7"
    ]
  }
]

export const skillList: Array<SkillList> = [
  { name: 'Досвід', description: 'потрібно лише бажання й готовність багато працювати', className: 'own__skill' },
  { name: 'Час', description: '10-12 годин на тиждень для виконання завдань', className: 'time__skill' },
  { name: 'English', description: 'для комфортного читання довгих статей про дизайн', className: 'english__skill' }
]

export const questionCourse: Array<QuestionCourse> = [
  {
    question: 'Які навички необхдні для вступу?',
    answer: 'Потрібно лише бажання й готовність багато працювати',
    id: 1
  },
  {
    question: 'А сертифікат буде?',
    answer: 'Буде',
    id: 2
  },
  {
    question: 'Що, як мені не сподобається?',
    answer: 'Сподобається',
    id:3
  },
  {
    question: 'Чи будуть записуватися вебінари?',
    answer: 'Так',
    id: 4
  },
  {
    question: 'Який потрібен софт?',
    answer: 'Наполегливість',
    id: 5
  }
];

export const sidebar = ['sideBar.topic', 'sideBar.teatcher', 'sideBar.forWhom', 'sideBar.questions'];
