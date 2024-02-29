import phone from '@/animations/phone.json'
import certificate from '@/animations/certificate1.json'
import scanMe from '@/animations/scanMe.json'
import verified from '@/animations/verified.json'

type CertificateType = {
  question: string
  answer: string
  color: string
  img: string
  animation: string
  href: string
  className: string
  animationData: any;
   
}

export const certificateList: Array<CertificateType> = [
  {
    question: 'authenticity',
    answer: 'authenticity',
    color: '#ffecd0',
    img: '/certificate/cert_art.jpg',
    animation: 'string;',
    href: '/',
    className: 'roseLight',
    animationData: verified
  },
  {
    question: 'social',
    answer: 'authenticity',
    color: '#03aa89',
    img: '/certificate/cert_IT.jpg',
    animation: 'string;',
    href: '/',
    className: 'green',
    animationData: phone
  },
  {
    question: 'resume',
    answer: 'authenticity',
    color: '#fed1ce',
    img: '/certificate/cert_business.jpg',
    animation: 'string;',
    href: '/',
    className: 'rose',
    animationData: certificate
  },
  {
    question: 'qrCode',
    answer: 'authenticity',
    color: '#8d83ff',
    img: '/certificate/cert_Leadership.jpg',
    animation: 'string;',
    href: '/',
    className: 'violet',
    animationData: scanMe
  }
]
