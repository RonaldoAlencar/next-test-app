'use client'

import { Session } from "next-auth"
import Image from "next/image"
import SettingsSubMenu from "./SettingsSubMenu"
import { useState } from "react"
import HamburgerMenu from "./HamburgerMenu"

interface HeaderProps {
  session: Session | null | undefined
}

interface LinkItemProps {
  href: string;
  text: string;
  selected?: boolean;
}

function LinkItem({ href, text, selected }: LinkItemProps) {
  return (
    <li>
      <a 
        href={href}
        className={`${selected ? 'text-blue-700' : 'text-gray-100'} block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0`}
      >
          {text}
      </a>
    </li>
  )
}

export default function Header({ session }: HeaderProps) {
  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false)

  return (
    <nav className="border-gray-200 bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
        <Image width={50} height={50} src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Mural de Mensagens</span>
      </a>

      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-gray-800 md:bg-gray-900 border-gray-700">
          <LinkItem href="/" text="Início" />
          <LinkItem href="/about" text="Sobre" selected={true} />
          <LinkItem href="/my-account" text="Minha Conta" />
        </ul>
      </div>

      <div className="flex items-center md:order-2">
          <button 
            type="button" 
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 focus:ring-gray-600 group focus:outline-none" 
            onMouseEnter={() => setShowSubMenu(true)}
          >
            <Image 
              width={40} 
              height={40} 
              className="rounded-full"
              src={session?.user?.image || '/'}
              alt={session?.user?.name || ''} 
            />
          </button>

          <SettingsSubMenu 
            show={showSubMenu} 
            setShow={setShowSubMenu} 
            userName={session?.user?.name || ''} 
            userEmail={session?.user?.email || ''} 
          />

          <button 
            type="button" 
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
          >
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      
      <HamburgerMenu show={showHamburgerMenu} />
      </div>
    </nav>
  )
}