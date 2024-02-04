type CertificateType = {
  question: string
  answer: string
  color: string
  img: string
  animation: string
  href: string
  className: string
}

export const certificateList: Array<CertificateType> = [
  {
    question: 'Підтвердити автентичність за посиланням ',
    answer: 'Підтвердити автентичність за посиланням ',
    color: '#ffecd0',
    img: '/certificate/cert_art.jpg',
    animation: 'string;',
    href: '/',
    className:'roseLight'
  },
  {
    question: 'Поділись посиланням в соц мережах',
    answer: 'Підтвердити автентичність за посиланням ',
    color: '#03aa89',
    img: '/certificate/cert_IT.jpg',
    animation: 'string;',
    href: '/',
    className:'green'
  },
  {
    question: 'Додай до свого резюме',
    answer: 'Підтвердити автентичність за посиланням ',
    color: '#fed1ce',
    img: '/certificate/cert_Career.jpg',
    animation: 'string;',
    href: '/',
    className:'rose'
  },
  {
    question: 'Завантаж, відсканувавши QR-код',
    answer: 'Підтвердити автентичність за посиланням ',
    color: '#8d83ff',
    img: '/certificate/cert_Leadership.jpg',
    animation: 'string;',
    href: '/',
    className:'violet'
  }
]
