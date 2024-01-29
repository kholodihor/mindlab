import React, { FC, useState, useEffect } from 'react'

interface IconProps {
  width?: number
  height?: number
}

const OCharIcon: FC<IconProps> = ({ width = 33, height = 69 }) => {
  const [fillColor, setFillColor] = useState('#AAAEDF')

  useEffect(() => {
    const interval = setInterval(() => {
      setFillColor((prevColor) => {
        switch (prevColor) {
          case '#AAAEDF':
            return '#FFECD0'
          case '#FFECD0':
            return '#BEED3B'
          case '#BEED3B':
            return '#AAAEDF'
          default:
            return prevColor
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 33 69"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5024 0C6.10649 0 0.427734 6.15955 0.427734 16.9429V51.9825C0.427734 62.763 6.10649 68.9253 16.5024 68.9253C26.8984 68.9253 32.5771 62.7658 32.5771 51.9825V16.9429C32.5771 6.1623 26.8984 0 16.5024 0Z"
        fill={fillColor}
      />
      <path
        d="M16.5026 9.62981C13.1343 9.62981 11.0161 11.4595 11.0161 16.2729V19.9378L12.1865 20.3554L18.5136 22.611L12.3211 25.2155L11.0161 25.7649V52.6587C11.0161 57.472 13.1343 59.3017 16.5026 59.3017C19.8708 59.3017 21.989 57.472 21.989 52.6587V16.2729C21.989 11.4595 19.8708 9.62981 16.5026 9.62981Z"
        fill="#09090A"
      />
    </svg>
  )
}
export default OCharIcon
