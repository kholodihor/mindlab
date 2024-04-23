export type CoursesList = {
  title: string
  description: string
  component: string
  components: ComponentsCourse
  color: string
  classname: string
  href: string
}

export type ComponentsCourse = {
  mob: Array<string>
  tab: Array<string>
  desk: Array<string>
}

export type Partners = {
  name: string
  logo: string
  text: string
  link: string
  color: string
}

export type MenuList = {
  link: string
  menu: string
}

export type Teacher = {
  key?: string
  image?: string
  name?: string
  speciality?: string
}

export type FeedBackFormInput = {
  name: string
  email: string
  message: string
}

export type PropsIconColor = {
  color: string
}

export type UploadResponse = {
  data: {
    message: string
    imageId: string
    imageUrl: string
  }
}
