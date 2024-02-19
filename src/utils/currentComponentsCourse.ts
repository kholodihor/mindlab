import {ComponentsCourse} from '@/types/index'

export const currentComponentsCourse = (list: ComponentsCourse, screenWidth: number) => {
    if(screenWidth < 430) {
 return list.mob
    } else if(screenWidth >= 625){
      return list.desk
    } else { return list.tab}
  }