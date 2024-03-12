'use client'

import { useState } from 'react'
import ArrowTop from '@/components/icons/ArrowTop'
import { useMediaQuery } from '@react-hook/media-query'
import { ICourseResponse } from '@/types/courses'
import styles from './TeacherCourses.module.css'
import { getCourseColor } from '@/helpers/getCourseColor'

const TeacherCourses = ({ data }: { data: ICourseResponse[] }) => {
  const [isHovered, setIsHovered] = useState(false)
  const isLargeScreen = useMediaQuery('(min-width: 1281px)')
  const isMediumScreen = useMediaQuery('(max-width: 1280px)')
  const isSmallScreen = useMediaQuery('(max-width: 768px)')
  const isExtraSmallScreen = useMediaQuery('(max-width: 450px)')

  console.log(isLargeScreen)

  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => (
          <div className={styles.content} key={index}>
            {isExtraSmallScreen ||
              isSmallScreen ||
              (isMediumScreen && (
                <h1
                  className={styles.content_title}
                  style={{ color: `${getCourseColor(item.title)}` }}
                >
                  {item.title}{' '}
                  <ArrowTop color={getCourseColor(item.title)} width={15} height={15} />
                </h1>
              ))}
            {isLargeScreen && (
              <h1
                className={styles.content_title_desktop}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={
                  isHovered ? { color: `${getCourseColor(item.title)}` } : { color: '#ffffff' }
                }
              >
                {item.title}{' '}
                {isHovered && (
                  <ArrowTop color={getCourseColor(item.title)} width={15} height={15} />
                )}
              </h1>
            )}

            <p className={styles.content_paragraph}>{item.description}</p>
            <div className={styles.tags}>
              {item.tags.map((tag, index) => (
                <span className={`${styles.tag} ${index === 0 && styles.first}`} key={index}>
                  {`#${tag}`}
                </span>
              ))}
            </div>
          </div>
        ))}
    </>
  )
}

export default TeacherCourses
