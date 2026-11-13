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

export type QuestionCourse = {
  question: string
  answer: string
  id: number
}

export type SidebarCourses = Array<string>

export const sidebar = ['sideBar.topic', 'sideBar.teatcher', 'sideBar.forWhom', 'sideBar.questions']
