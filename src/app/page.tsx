import Hero from '@/components/hero/Hero';
import Courses from '@/components/courses/Courses';
import Partners from '@/components/partners/Partners';
import Reviews from '@/components/reviews/Reviews';
import About from '@/components/about/About';
import styles from './page.module.css';

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Hero />
      <About />
      <Courses />
      <Partners />
      <Reviews />
    </div>
  );
};

export default HomePage;
