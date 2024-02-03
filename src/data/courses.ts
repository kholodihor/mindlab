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
      'Гайс, ви переймаєтесь тим, що вібувається в політиці? Думаєте, як поліпшити соціальне становище в своїй державі та мрієте про економічне зростання для України? Тоді тобі необхідно заглибитися і отримати сталі знання в галузі Рolitical science-sociology. В стоїх руках - реальні зміни!',
    time: {
      date: 'Квітень 2024',
      duration: '2 місяці'
    },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'Ми готові запускати новий напрямок Рolitical science-sociology, цікавишся цим напрямком?',
    topic: [
      'Що таке політика',
      'Політика і політичне життя суспілсьтва',
      'Влада і політичні режими',
      'Демократія: поняття, теорія, модель',
      'Політична еліта та лідерство, Держава в політичній системі',
      'Громадянське суспільство та правова держава',
      'Політичні партії та системи',
      'Політична культура та етика',
      'Соціально-політичні ідеології і течії у сучасному світі',
      'Політика Європейських держав',
      'Діяльність Міжнародних інфституцій',
      'Соціологія нації',
      'Соціологія особистості',
      'Альтернативна соціологія',
      'Функції соціології та її роль у розвитку суспільства',
      'Конфліктологія',
      'Теорія соціальних змін'
    ]
  },
  {
    name: 'leadership',
    title: 'Leadership',
    description:
      'Ти відчуваєш свій вплив на оточення, маєш здорові амбіції, а головне тобі не все рівно, що відбувається довкола і ти готовий брати відповідальність на себе? Опа, тоді курс “Leadership” точно допоможе тобі освоїти перші кроки на шляху до розвитку лідерських навичок. Вивчення лідерства може сприяти формуванню всебічно розвиненої особистості, та підготовці до викликів сучасного світу. Ти точно можеш стати ТОП-лідером, лише розпочни свій шлях!',
    time: {
      date: 'Квітень 2024',
      duration: '2 місяці'
    },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'Хей, Хей, ну що, ви готові? Ми запускаємо новий курс, будемо досліджувати тему “Leadership” і не просто так, а розкриваючи важливі питання, долучайтеся до нас буде дууууже цікаво!',
    topic: [
      'Поняття та стилі лідерства. Ретроспектива і сьогодення',
      'Розвиток лідерства в сучасних реаліях',
      'Формування системи лідерства',
      'Корпоративна влада',
      'Влада лідера',
      'Відповідальність',
      'Лідерська поведінка',
      'Інтелектуальний лідер. Хто він?',
      'Лідерство і менедмент: спільне чи відмінне?'
    ]
  },
  {
    name: 'business',
    title: 'Business',
    description:
      'Кожен з нас хоча б раз у житті замислювався над тим, якою б справою займатися, щоб не залежити від когось, отримувати дохід і самостійно управляти бізнесом. Правда такі думки приходили і до тебе теж? Ти маєш ідею, але не знаєш з чого почати? Ну що ж, ми можемо підказати, як монетизувати навіть крейзі ідею! Business - це ризик, але якщо він продуманий, то може бути точно вигідним. А спершу, ми навчимо розуміти економічні процеси, навчимо фінансовій грамотності, простимулюємо твою підприємницьку діяльність. А ще ти матимеш змогу зустрітися і поспілкуватися з бізнесменами що створили себе з нуля. Як вони самі про все розкажуть!',
    time: {
      date: 'Квітень 2024',
      duration: '2 місяці'
    },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'Зачекалися на наші новини? Цікавить який курс вийде в широкі маси наступним? Поспішаємо стартанути!!!!!!!!!! Раз, два, три лови! Business - нові заняття за темами:',
    topic: [
      'Соціальні навички та підприємницьке мислення',
      'Основи економічної грамотності',
      'Менеджмент ',
      'Запуск Start up',
      'Скіли ХХІ ст.',
      'Бізнес мислення та ініціативи',
      'Школа професій. Знайомство і мотивація'
    ]
  },
  {
    name: 'innovative',
    title: 'Іnnovative technologies',
    description:
      'Поспішаєш, щоб не пропустити нові тренди інноваційних технологій? Хочеш познайомитися і освоїти нові навички, які дуже швидко зможуть приносити тобі дохід, а іншим користь, тоді час познайомитися з Іnnovative technologies включно з (Game Dev, UI/UX Design, QA, AI).',
    time: {
      date: 'Квітень 2024',
      duration: '2 місяці'
    },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'Агоу гайс, що там далі? Готові до наших нивин? Ми запускаємо ще один напрямок і в ньому хочемо представити наших крутих друзів і партнерів Beetroot Academy, які точно знають все про ІТ і найкраще познайомлять тебе з цією професією. Вони організовують і проводять навчання з:',
    topic: [
      'Project managment in IT',
      'UI/UX Design',
      'FE/BE',
      'Digital Marketing',
      'AI',
      'IT-професії. Знайомство'
    ]
  },
  {
    name: 'art',
    title: 'ART',
    description:
      'Творчий, креативний, вмієш створювати круті речі власними руками? А як часто ти роздивляєшся картини відомих художників, слідкуєш за модними трендами, і новими віяннями в дизайні? Якщо тебе цікавить творчість, ти кайфуєш від мистецтва, любиш малювати, маєш власне бачення і вмієш його виражати, спробуй себе в напрямку ART (Moldern ART, Design). Кваліфіковані спеціалісти зможуть підтримати тебе у творчому пориві.',
    time: {
      date: 'Квітень 2024',
      duration: '2 місяці'
    },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'Питання в студію, ти коли небудь цікавився мистецтвом? Так, круто! Бо саме для тебе ми підготували кльовий курс, що знайомить тебе з різними напрямами та стилями мистецтва, а також навчить створювати щось власне - унікальне! Важко уявити собі, що це можливо у ХХІ ст, в епоху АІ, ми впевнені, що рука людини і інтелект завжди буде в ціні! Тож, не зволікай, долучайся! На тебе чекають такі цікавинки:',
    topic: [
      'Сучасне мистецтво',
      "Комп'ютерне мистецтво",
      'Відео-мистецтво',
      'Оп-арт',
      'Мінімалізм в мистецтві або мистецтво мінімалізму',
      'Медіа-арт',
      'Сучасна архітектура та дизайн'
    ]
  },
  {
    name: 'career',
    title: ' Career counseling/Career guidance',
    description:
      " У тебе виникають питання, що робити далі у житті, як зробити вірний вибір, і реалізуватися? Ми думаємо, що це доволі важливий єтап і тобі може бути складно, тож пропонуємо тобі фахову допомогу висококваліфікованих фахівців. Кар'єрне консультування допомагає їм зрозуміти свої інтереси, навички та цілі, щоб прийняти інформовані рішення щодо вибору кар'єрного шляху. Консультанти можуть допомагати учням і студентам у визначенні сфер діяльності, вивчення університетів, а також надавати поради з проходження вступних випробувань та складання документів. Консультанти допоможуть  розробити конкретний кар'єрний план, визначити короткострокові та довгострокові цілі, а також шляхи до їх досягнення. Career counseling/Career guidance - це важливий етап в процесі твого становленні, тож не прогав свій шанс.",
    time: {
      date: 'Квітень 2024',
      duration: '2 місяці'
    },
    price: {
      full: 1200,
      monthly: 700
    },
    seat: 15,
    text: 'Не можеш визначитися з майбутньою професією? Питання “Ким ти хочеш стати коли виростеш?”  вже тебе наздогнало… Батьки кажуть одне, а ти хочеш іншого ми допоможемо! Приєднуйся до курсу Career counseling/Career guidance і ми прокачаємо твої скіли, щоб вибір був 100% вдалим! ',
    topic: [
      'Профорієнтація',
      'Зустріч із стартаперами',
      'Зустріч з бізнесом',
      'Зустріч з політиком',
      'Кар’єрне консультування',
      'Кар’єрний супровід',
      'Портфоліо, резюме, інтерв’ю, що це?',
      'День ТІНІ. Стажування',
      'Знайомство із найуспішнішими студентами України'
    ]
  }
]

export const skillList: Array<SkillList> = [
  { name: 'Досвід', description: 'потрібно лише бажання й готовність багато працювати' },
  { name: 'English', description: 'для комфортного читання довгих статей про дизайн' },
  { name: 'Час', description: '10-12 годин на тиждень для виконання завдань' }
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

export const sidebar = ['Теми', 'Викладачі', 'Для кого', 'Питання'];
