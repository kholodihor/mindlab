import React from 'react'
import styles from './Loader.module.css'
import { Circles } from 'react-loader-spinner'

const Loader = () => {
  return (
    <div className={styles.loader_layout}>
      <Circles
        height="100"
        width="100"
        color="#beed3b"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
}

export default Loader
