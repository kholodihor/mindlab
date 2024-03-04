import { CoursesList, MenuList, Partners } from '@/types'


export const coursesList: Array<CoursesList> = [
  {
    title: 'Leadership',
    description:
      'leadership.description',
    component: 'leadership.component',
    components: { mob: [], tab: [], desk: ['leadership.power', 'leadership.power'] },
    color: '#aaaedf',
    classname: 'violetLight',
    href: '/courses/leadership'
  },
  {
    title: 'Career counseling / Career guidance ',
    description:
      'careerCounselin.description',
    component: 'careerCounselin.component',
    components: {
      mob: [],
      tab: ['careerCounselin.startUp'],
      desk: ['careerCounselin.startUp', 'careerCounselin.business']
    },
    color: '#ffecd0',
    classname: 'roseLight',
    href: '/courses/career'
  },
  {
    title: 'Business',
    description:
      'business.description',
    component: 'business.component',
    components: {
      mob: ['business.startUp'],
      tab: ['business.startUp'],
      desk: ['business.startUp', 'business.skills']
    },
    color: '#8d83ff',
    classname: 'violet',
    href: '/courses/business'
  },
  {
    title: 'Innovative technologies',
    description:
      'innovativeTechnologies.description',
    component: 'innovativeTechnologies.component',
    components: {
      mob: [],
      tab: ['innovativeTechnologies.ui'],
      desk: ['innovativeTechnologies.ui', 'innovativeTechnologies.fe', 'innovativeTechnologies.marketing']
    },
    color: '#03aa89',
    classname: 'green',
    href: '/courses/innovative'
  },
  {
    title: 'ART',
    description:
      'art.description',
    component: 'art.component',
    components: {
      mob: [],
      tab: ["art.computer"],
      desk: ["art.computer", 'art.video']
    },
    color: '#2928e3',
    classname: 'blue',
    href: '/courses/art'
  },
  {
    title: 'Political science-sociology',
    description:
      'politicalScienceSociology.description',
    component: 'politicalScienceSociology.component',
    components: {
      mob: [],
      tab: ['politicalScienceSociology.change'],
      desk: ['politicalScienceSociology.change', 'politicalScienceSociology.sociology']
    },
    color: '#fed1ce',
    classname: 'rose',
    href: '/courses/political'
  }
]

export const partners: Array<Partners> = [
  {
    name: 'patrners1.title',
    logo: '/partners/newPartnersLogo/logo-1.svg',
    text: 'patrners1.description',
    link: '/',
    color: '#ffecd0',
  },
  {
    name: 'patrners2.title',
    logo: 'partners/newPartnersLogo/logo-2.svg',
    text: 'patrners2.description',
    link: '/',
    color: '#E6EAFF',
  },
  {
    name: 'patrners3.title',
    logo: 'partners/newPartnersLogo/logo-3.svg',
    text: 'patrners3.description',
    link: '/',
    color: '#aaaedf',
  },
  {
    name: 'patrners4.title',
    logo: '/partners/newPartnersLogo/logo-4.svg',
    text: 'patrners4.description',
    link: '/',
    color: '#f9f9fa',
  },
];

export const partnersTablet: Array<Partners> = [
  {
    name: 'Ukrainian Global School',
    logo: '/partners/logo3.svg',
    text: 'Ukranian Global School —  освітній простір, що впливає на зміни в українському суспільстві. Допомагає учням знайти своє місце в світі, надихаючи їх до особистісного зростання, академічних досягнень та лідерства заради спільного блага.',
    link: 'https://globalschool.in.ua/',
    color: '#FED1CE'
  },
  {
    name: 'Історико-філософський факультет Київського столичного університету імені Бориса Грінченка',
    logo: 'partners/logo2.svg',
    text: ' Якісна підготовка, інноваційні навчальні програми та дослідження високого рівня є пріоритетами Університету.',
    link: 'https://kubg.edu.ua/',
    color: '#f9f9fa'
  },
  {
    name: 'Київська мала академія наук',
    logo: '/partners/logo1.svg',
    text: 'Київська Мала академія наук —  лідер позашкільної освіти в Україні, майданчик для  впровадження новацій, сприяє розвитку наукової освіти в Східноєвропейському регіоні. Ми вчимо робити відкриття та творити своє майбутнє!',
    link: 'https://kman.kyiv.ua/',
    color: '#AAAEDF'
  }
]

export const menuList: Array<MenuList> = [
  { link: '#courses', menu: 'Menu.ourCourses' },
  { link: '#teachers', menu: 'Menu.speakers' },
  { link: '#partners', menu: 'Menu.partners' },
  { link: '#testimonials', menu: 'Menu.reviews' },
  { link: '#parents', menu: 'Menu.parents' }
]
