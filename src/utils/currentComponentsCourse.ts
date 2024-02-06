import {ComponentsCourse} from '@/types/index'

export const currentComponentsCourse = (list: ComponentsCourse, screenWidth: number) => {
    if(screenWidth < 768) {
 return list.mob
    } else {
      return list.tab
    }
  }