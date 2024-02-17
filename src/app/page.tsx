import Hero from '@/components/hero/Hero'
import Courses from '@/components/courses/Courses'
import Partners from '@/components/partners/Partners'
import Testimonials from '@/components/testimonials/Testimonials'
import About from '@/components/about/About'
import styles from './page.module.css'
import Teachers from '@/components/teachers/Teachers'
import Parents from '@/components/parents/Parents'
import FeedBack from '@/components/feedback/FeedBack'
import Certificate from '@/components/certificate/Certificate'
import Contacts from '@/components/contacts/Contacts'

const HomePage = () => {
  return (
    <div className={styles.page}>
      {/* <Hero />
      <About /> */}
      <Courses />
      <Partners />
      <Certificate />
      {/* <Teachers /> */}
      <Parents />
      {/* <FeedBack />
      <Contacts />
      <Testimonials /> */}
    </div>
  )
}

export default HomePage
