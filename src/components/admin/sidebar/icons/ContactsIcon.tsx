import React from 'react'

type ContactsIconProps = {
  isActive: boolean
  isHovered: string
}

const ContactsIcon = ({ isActive, isHovered }: ContactsIconProps) => {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M33 29H19L11 35V29H7C5.93333 29 5 28.0667 5 27V7C5 5.93333 5.93333 5 7 5H33C34.0667 5 35 5.93333 35 7V27C35 28.0667 34.0667 29 33 29Z"
        stroke={isActive || isHovered === 'contacts' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.9332 12.2002V21.5335"
        stroke={isActive || isHovered === 'contacts' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.6 17H15.2666"
        stroke={isActive || isHovered === 'contacts' ? '#09090A' : '#F9F9FA'}
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ContactsIcon
