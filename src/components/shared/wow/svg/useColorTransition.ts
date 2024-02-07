import { useState, useEffect } from 'react'

const useColorTransition = (initialColor: string, transitionColors: string[]) => {
  const [currentColor, setCurrentColor] = useState(initialColor)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((prevColor) => {
        const currentIndex = transitionColors.indexOf(prevColor)
        const nextIndex = (currentIndex + 1) % transitionColors.length
        return transitionColors[nextIndex]
      })
    }, 1500)

    return () => clearInterval(interval)
  }, [initialColor, transitionColors])

  return currentColor
}

export default useColorTransition
