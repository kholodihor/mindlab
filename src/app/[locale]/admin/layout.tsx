import Sidebar from '@/components/admin/sidebar/Sidebar'
import styles from './AdminLayout.module.css'

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.pages}>{children}</div>
    </div>
  )
}
