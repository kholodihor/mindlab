export type questionParents = {
  question: string
  answer: Array<string>
  color: string
}

export type iconParents = {
  src: string
  width: number
  height: number
  className: string
}

export const questionList: Array<questionParents> = [
  {
    color: '#aaaedf',
    question: 'Parents.platform.name',
    answer:
      ["Parents.platform.description", "Parents.platform.inforvation"]
  },
  {
    color: '#ffecd0',
    question: 'Parents.spiker.name',
    answer:
      ["Parents.spiker.description" ]
  },
  {
    color: '#8d83ff',
    question: 'Parents.guidanc.name',
    answer:
      ["Parents.guidanc.description"]
  },
  {
    color: '#03aa89',
    question: "Parents.counseling.name",
    answer:
      ["Parents.counseling.description"]
  },
  {
    color: '#fed1ce',
    question: "Parents.comunication.name",
    answer:
      ["Parents.comunication.description", "Parents.comunication.inforvation"]
  }
]

export const iconParents: Array<iconParents> = [
  {
    src: '/parents/lineIcon-1.svg',
    width: 70,
    height: 107,
    className: 'lineIcon1'
  }, 
  {
    src: '/parents/lineIcon-2.svg',
    width:109,
    height: 70,
    className: 'lineIcon2'
  },
  {
    src: '/parents/starIcon.svg',
    width: 26,
    height: 26,
    className: 'star1'
  },
  {
    src: '/parents/starIcon.svg',
    width: 19,
    height: 19,
    className: 'star2'
  },
  {
    src: '/parents/starIcon.svg',
    width: 19,
    height: 19,
    className: 'star3'
  }
]
