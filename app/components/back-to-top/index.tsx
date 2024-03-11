'use client'

import { TbArrowNarrowUp } from 'react-icons/tb'
import { Button } from '../button'
import { useCallback, useEffect, useState } from 'react'

export const BackToTop = () => {
  const [show, setShow] = useState(false)
  const [isMounted, setIsMounted] = useState<boolean>(false)

  const scrollTotTop = () => {
    isMounted && window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    !isMounted && setIsMounted(true)
  }, [])

  const handleScroll = useCallback(() => {
    if (isMounted) {
      if (!show && window.scrollY >= 500) {
        setShow(true)
      } else {
        setShow(false)
      }
    }
  }, [show, isMounted])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  return (
    <div className="fixed right-4 bottom-4 z-20">
      {isMounted && show ? (
        <Button
          onClick={scrollTotTop}
          className="shadow-lg shadow-emerald-400/20"
        >
          <TbArrowNarrowUp size={20} />
        </Button>
      ) : null}
    </div>
  )
}
