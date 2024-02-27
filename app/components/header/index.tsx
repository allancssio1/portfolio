'use client'
import Image from 'next/image'
import Link from 'next/link'
import { Nav_item } from './nav-item'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Projetos',
    href: '/projects',
  },
]

export const Header = () => {
  return (
    <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <Link href="/">
          <Image width={58} height={49} src="/images/logo.svg" alt="Logo" />
        </Link>

        <nav className="flex items-center sm:gap-10 gap-4">
          {NAV_ITEMS.map((item) => (
            <Nav_item {...item} key={item.label} />
          ))}
        </nav>
      </div>
    </header>
  )
}
