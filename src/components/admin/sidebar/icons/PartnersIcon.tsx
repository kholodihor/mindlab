import React from 'react'

type PartnersIconProps = {
  isActive: boolean
  isHovered: string
}

const PartnersIcon = ({ isActive, isHovered }: PartnersIconProps) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 13H33C33 13 35 13 35 15V31C35 31 35 33 33 33H7C7 33 5 33 5 31V15C5 15 5 13 7 13Z"
        stroke={isActive || isHovered === 'partners' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 13C26 11.4087 25.3679 9.88258 24.2426 8.75736C23.1174 7.63214 21.5913 7 20 7C18.4087 7 16.8826 7.63214 15.7574 8.75736C14.6321 9.88258 14 11.4087 14 13"
        stroke={isActive || isHovered === 'partners' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 21H17"
        stroke={isActive || isHovered === 'partners' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 21H35"
        stroke={isActive || isHovered === 'partners' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 22.3334C17 23.129 17.3161 23.8921 17.8787 24.4547C18.4413 25.0173 19.2044 25.3334 20 25.3334C20.7956 25.3334 21.5587 25.0173 22.1213 24.4547C22.6839 23.8921 23 23.129 23 22.3334V20.7334C23 19.9377 22.6839 19.1747 22.1213 18.6121C21.5587 18.0495 20.7956 17.7334 20 17.7334C19.2044 17.7334 18.4413 18.0495 17.8787 18.6121C17.3161 19.1747 17 19.9377 17 20.7334V22.3334Z"
        stroke={isActive || isHovered === 'partners' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default PartnersIcon
