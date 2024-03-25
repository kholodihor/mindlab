import React from 'react'

type LogoutIconProps = {
  isHovered: string
}

const LogoutIcon = ({ isHovered }: LogoutIconProps) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M23.3334 20H6.66671H23.3334ZM6.66671 20L11.6667 15L6.66671 20ZM6.66671 20L11.6667 25L6.66671 20Z"
        fill={isHovered === 'logout' ? '#09090A' : '#AAAEDF'}
      />
      <path
        d="M23.3334 20H6.66671M6.66671 20L11.6667 15M6.66671 20L11.6667 25"
        stroke={isHovered === 'logout' ? '#09090A' : '#AAAEDF'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.3334 20.0003C33.3334 16.4641 31.9286 13.0727 29.4281 10.5722C26.9276 8.07175 23.5363 6.66699 20 6.66699M20 33.3337C21.9991 33.3355 23.9728 32.8869 25.7747 32.0213C27.5766 31.1557 29.1604 29.8953 30.4084 28.3337"
        stroke={isHovered === 'logout' ? '#09090A' : '#AAAEDF'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default LogoutIcon
