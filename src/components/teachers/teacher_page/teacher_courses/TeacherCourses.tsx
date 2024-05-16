'use client'

import ArrowTop from '@/components/icons/ArrowTop'
import { ICourseResponse } from '@/types/courses'
import { useState } from 'react'
import styles from './TeacherCourses.module.css'
import { getCourseColor } from '@/helpers/getCourseColor'
import { useWidth } from '@/hooks/useWidth'
import { useLocale } from 'next-intl'

const TeacherCourses = ({ data }: { data: ICourseResponse[] }) => {
  const locale = useLocale()
  const [isHovered, setIsHovered] = useState(false)
  const isLargeScreen = useWidth()

  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => (
          <div className={styles.content} key={index}>
            {isLargeScreen >= 1280 ? (
              <h1
                className={styles.content_title_desktop}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={
                  isHovered ? { color: `${getCourseColor(item?.title)}` } : { color: '#ffffff' }
                }
              >
                {item.title}{' '}
                {isHovered && (
                  <ArrowTop color={getCourseColor(item?.title)} width={15} height={15} />
                )}
              </h1>
            ) : (
              <h1
                className={styles.content_title}
                style={{ color: `${getCourseColor(item?.title)}` }}
              >
                {item.title} <ArrowTop color={getCourseColor(item?.title)} width={15} height={15} />
              </h1>
            )}
            <p className={styles.content_paragraph}>
              {locale === 'ua' ? item.descriptionUa : item.descriptionEn}
            </p>
            <div className={styles.tags}>
              {item.tagsUa.map((tag, index) =>
                isLargeScreen >= 1280 ? (
                  <span
                    className={styles.tag}
                    style={
                      index === 0
                        ? {
                            backgroundColor: isHovered
                              ? `${getCourseColor(item?.title)}`
                              : '#1d1d1e',
                            border: 'none',
                            color: isHovered ? '#09090a' : ''
                          }
                        : { backgroundColor: '#09090a' }
                    }
                    key={index}
                  >
                    {`${tag}`}
                  </span>
                ) : (
                  <span
                    className={styles.tag}
                    style={
                      index === 0
                        ? {
                            backgroundColor: `${getCourseColor(item?.title)}`,
                            border: 'none',
                            color: '#09090a'
                          }
                        : { backgroundColor: '#09090a' }
                    }
                    key={index}
                  >
                    {`${tag}`}
                  </span>
                )
              )}
            </div>
          </div>
        ))}
    </>
  )
}

export default TeacherCourses
