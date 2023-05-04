'use client'

import { Session } from "next-auth"
import Image from "next/image"
import SettingsSubMenu from "./SettingsSubMenu"
import { useState } from "react"
import HamburguerMenu from "./HamburguerMenu"

interface HeaderProps {
  session: Session | null | undefined
}

export default function Header({ session }: HeaderProps) {

  const [showSubMenu, setShowSubMenu] = useState(false)
  const [showHambuguerMenu, setShowHambuguerMenu] = useState(false)

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="https://flowbite.com/" className="flex items-center">
          <Image width={50} height={50} src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
      </a>
      <div className="flex items-center md:order-2">
          <button 
            type="button" 
            className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600 group focus:outline-none" 
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
            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={() => setShowHambuguerMenu(!showHambuguerMenu)}
          >
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      
      <HamburguerMenu show={showHambuguerMenu} />
      </div>
    </nav>
  )
}