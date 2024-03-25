import React from 'react'

type CoursesIconProps = {
  isActive: boolean
  isHovered: string
}

const CoursesIcon = ({ isActive, isHovered }: CoursesIconProps) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 9H32.5"
        stroke={isActive || isHovered === 'courses' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 19.5H32.5"
        stroke={isActive || isHovered === 'courses' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M6 31H17.5"
        stroke={isActive || isHovered === 'courses' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M28 24L28 32"
        stroke={isActive || isHovered === 'courses' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M24 28L32 28"
        stroke={isActive || isHovered === 'courses' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default CoursesIcon
