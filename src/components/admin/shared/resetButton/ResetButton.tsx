"use client";

import { useRouter } from "next/navigation"
import styles from './ResetButton.module.css'

type ResetButtonProps = {
  text: string,
}

const ResetButton = ({ text } : ResetButtonProps) => {
  const router = useRouter()

  return <button className={styles.reset_btn} type="button" onClick={() => router.back()}>{text}</button>
}

export default ResetButton