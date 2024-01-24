export type CoursesPage = {
  name: string;
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
  topic: Array<string>
}

export const coursesPage: Array<CoursesPage> = [
  {
    name: 'course',
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
    topic: [
      'Що таке політика',
      'Політика і політичне життя суспілсьтва',
      'Влада і політичні режими',
      'Демократія: поняття, теорія, модель',
      'Політична еліта та лідерство, Держава в політичній системі',
      'Громадянське суспільство та правова держава',
      'Політичні партії та системи',
      'Політична культура та етика'
    ]
  }
]
