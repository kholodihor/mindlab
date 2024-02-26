import { CoursesList, MenuList, Partners } from '@/types'

export const coursesList: Array<CoursesList> = [
  {
    title: 'Leadership',
    description:
      'Це курс, який розкриє в тобі здатність впливати на інших, надихати і керувати командою',
    component: '# Формування системи лідерства',
    components: { mob: [], tab: [], desk: ['#Корпоративна влада', '#Влада лідера'] },
    color: '#aaaedf',
    classname: 'violetLight',
    href: '/courses/leadership'
  },
  {
    title: 'Career counseling / Career guidance ',
    description:
      'Ця важлива складова обов’язково стане в нагоді при виборі професії, консультант допоможе з’ясувати твої інтереси, цілі, розпланує твою кар’єру, розробить стратегію самовдосконалення, підготує до вступу на ринок праці, навчить управляти кар’єрою',
    component: '# Профорієнтація',
    components: {
      mob: [],
      tab: ['#Зустріч із стартаперами'],
      desk: ['#Зустріч із стартаперами', '#Зустріч з бізнесом']
    },
    color: '#ffecd0',
    classname: 'roseLight',
    href: '/courses/career'
  },
  {
    title: 'Business',
    description:
      'Дасть можливість виокремити в тобі комерційну жиклу, спрямувати потенціал у розвиток та монетизацію власної ідеї з метою отримання прибутку',
    component: '#Менеджмент ',
    components: {
      mob: ['#Запуск Start up'],
      tab: ['#Запуск Start up'],
      desk: ['#Запуск Start up', '#Скіли ХХІ ст.']
    },
    color: '#8d83ff',
    classname: 'violet',
    href: '/courses/business'
  },
  {
    title: 'Innovative technologies',
    description:
      'Дозволяє пізнати нові передові методи, що використовують для вдосконалення чи створення нових продуктів, послуг або процесів, сприяючи технологічному прогресу та покращенню результатів',
    component: '#Project managment in IT ',
    components: {
      mob: [],
      tab: ['#UI/UX Design'],
      desk: ['#UI/UX Design', '#FE/BE', '#Digital Marketing']
    },
    color: '#03aa89',
    classname: 'green',
    href: '/courses/innovative'
  },
  {
    title: 'ART',
    description:
      'Ти зможеш осягнути надбання людської творчості доторкнутися до прекрасного і створити не менш круте, твої ідею матимуть місце в реалізації',
    component: '#Сучасне мистецтво ',
    components: {
      mob: [],
      tab: ["#Комп'ютерне мистецтво"],
      desk: ["#Комп'ютерне мистецтво", '#Відео-мистецтво']
    },
    color: '#2928e3',
    classname: 'blue',
    href: '/courses/art'
  },
  {
    title: 'Political science-sociology',
    description:
      'Допоможе тобі поглибити розуміння політичних явищ та суспільних процесів, а також їх взаємодію і вплив на соціум',
    component: '#Конфліктологія ',
    components: {
      mob: [],
      tab: ['#Теорія соціальних змін'],
      desk: ['#Теорія соціальних змін', '#Соціологія нації']
    },
    color: '#fed1ce',
    classname: 'rose',
    href: '/courses/political'
  }
]

export const partners: Array<Partners> = [
  {
    name: 'Mushroom Academy',
    logo: '/partners/newPartnersLogo/logo-1.svg',
    text: 'Mushroom Academy — західно-українська ІТ-школа. Понад 19 років сприяє українцям будувати успішну кар’єру у цифровій економіці: виховує наступне покоління айтівців, розвиває ІТ-кластер, допомає тим, кто цього потребує.',
    link: '/',
    color: '#ffecd0',
  },
  {
    name: 'Київський столичний учбовий заклад імені',
    logo: 'partners/newPartnersLogo/logo-2.svg',
    text: ' Місія нашого закладу —  сприяти кожному в цілісному розвитку і лідерському становленні, служити людині, громаді, суспільству. Якісна підготовка, інноваційні навчальні програми та дослідження високого рівня є нашими пріоритетами.',
    link: '/',
    color: '#E6EAFF',
  },
  {
    name: 'Київська дитяча академія',
    logo: 'partners/newPartnersLogo/logo-3.svg',
    text: 'Київська дитяча академія —  лідер позашкільної освіти в Україні, майданчик для апробування та впровадження новацій, сприяє розвитку наукової освіти в Східноєвропейському регіоні. Ми вчимо робити відкриття та творити своє майбутнє!',
    link: '/',
    color: '#aaaedf',
  },
  {
    name: 'Ukranian Cosmic Education',
    logo: '/partners/newPartnersLogo/logo-4.svg',
    text: 'Ukranian Cosmic Education —  освітній простір, що впливає на зміни в українському суспільстві. Допомагає учням знайти своє місце в світі, надихаючи їх до особистісного зростання, академічних досягнень та лідерства заради спільного блага. Ukranian Cosmic Education —  освітній простір, що впливає на зміни в українському суспільстві.',
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
  { link: '#courses', menu: 'Наші курси' },
  { link: '#teachers', menu: 'Викладачі' },
  { link: '#partners', menu: 'Партнери' },
  { link: '#testimonials', menu: 'Відгуки' },
  { link: '#parents', menu: 'Для батьків' }
]
