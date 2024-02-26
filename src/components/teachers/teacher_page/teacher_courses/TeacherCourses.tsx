import ArrowTop from '@/components/icons/ArrowTop'
import { ICourseResponse } from '@/types/courses'
import styles from './TeacherCourses.module.css'
import { getCourseColor } from '@/helpers/getCourseColor'

const TeacherCourses = ({ data }: { data: ICourseResponse[] }) => {
  return (
    <>
      {data &&
        Array.isArray(data) &&
        data.map((item, index) => (
          <div className={styles.content} key={index}>
            <h1 className={styles.content_title} style={{ color: `${getCourseColor(item.title)}` }}>
              {item.title} <ArrowTop color={getCourseColor(item.title)} width={15} height={15} />
            </h1>

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
