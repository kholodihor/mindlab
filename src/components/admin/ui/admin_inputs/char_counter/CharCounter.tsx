import { FC } from 'react'

interface CharCounterProps {
  text: string
  maxCharQuantity: string
}

const CharCounter: FC<CharCounterProps> = ({ text, maxCharQuantity }) => {
  if (!maxCharQuantity) return null

  return (
    <p>
      <span>{text.length}</span>/<span>{maxCharQuantity}</span>
    </p>
  )
}

export default CharCounter
