'use client'

import { useEffect, useCallback } from 'react'

interface ScrollLockOptions {
  reserveScrollBarGap?: boolean
}

// Keep track of multiple scroll locks
let lockCount = 0

export const useBodyScrollLock = (
  shouldLock: boolean,
  options: ScrollLockOptions = {}
) => {
  const { reserveScrollBarGap = true } = options

  const getScrollbarWidth = useCallback(() => {
    const scrollDiv = document.createElement('div')
    scrollDiv.style.cssText = `
      width: 99px;
      height: 99px;
      overflow: scroll;
      position: absolute;
      top: -9999px;
    `
    document.body.appendChild(scrollDiv)
    const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    document.body.removeChild(scrollDiv)
    return scrollbarWidth
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    const documentElement = document.documentElement
    const originalOverflow = documentElement.style.overflow
    const originalPaddingRight = documentElement.style.paddingRight
    const originalTouchAction = documentElement.style.touchAction
    let scrollbarWidth = 0

    if (shouldLock) {
      lockCount++
      
      // Only apply styles if this is the first lock
      if (lockCount === 1) {
        // Store current scroll position
        const scrollY = window.scrollY
        
        // Calculate scrollbar width if we need to reserve the gap
        if (reserveScrollBarGap) {
          scrollbarWidth = getScrollbarWidth()
          if (scrollbarWidth > 0) {
            documentElement.style.paddingRight = `${scrollbarWidth}px`
          }
        }

        // Apply scroll lock styles
        documentElement.style.overflow = 'hidden'
        documentElement.style.touchAction = 'none' // Prevents iOS bounce

        // iOS specific fix
        documentElement.style.position = 'fixed'
        documentElement.style.top = `-${scrollY}px`
        documentElement.style.width = '100%'
      }
    } else {
      lockCount = Math.max(0, lockCount - 1)
      
      // Only remove styles if this is the last unlock
      if (lockCount === 0) {
        // Restore original styles
        documentElement.style.overflow = originalOverflow
        documentElement.style.paddingRight = originalPaddingRight
        documentElement.style.touchAction = originalTouchAction

        // iOS specific fix cleanup
        const scrollY = parseInt(documentElement.style.top, 10) * -1
        documentElement.style.position = ''
        documentElement.style.top = ''
        documentElement.style.width = ''
        window.scrollTo(0, scrollY)
      }
    }

    return () => {
      if (shouldLock) {
        lockCount = Math.max(0, lockCount - 1)
        
        // Only remove styles if this is the last unlock
        if (lockCount === 0) {
          documentElement.style.overflow = originalOverflow
          documentElement.style.paddingRight = originalPaddingRight
          documentElement.style.touchAction = originalTouchAction

          // iOS specific fix cleanup
          const scrollY = parseInt(documentElement.style.top, 10) * -1
          documentElement.style.position = ''
          documentElement.style.top = ''
          documentElement.style.width = ''
          window.scrollTo(0, scrollY)
        }
      }
    }
  }, [shouldLock, reserveScrollBarGap, getScrollbarWidth])
}
