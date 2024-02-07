'use client'
import { useEffect, useState } from 'react'

export const useWindowScrollY = () => {
  const [scrollPosition, setPosition] = useState({ scrollY: 0 })

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollY: window.scrollY })
    }

    window.addEventListener('scroll', updatePosition)
    updatePosition()

    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

  return scrollPosition
}
