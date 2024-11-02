'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Moon, Sun } from 'lucide-react'

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link href={href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase">
      {children}
    </Link>
  </li>
)

export default function Header() {
  const [isSticky, setIsSticky] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100)
    }

    const handleDarkMode = () => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        setDarkMode(true)
        document.documentElement.classList.add('dark')
      } else {
        setDarkMode(false)
        document.documentElement.classList.remove('dark')
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleDarkMode()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const toggleDarkMode = () => {
    if (darkMode) {
      localStorage.theme = 'light'
      document.documentElement.classList.remove('dark')
    } else {
      localStorage.theme = 'dark'
      document.documentElement.classList.add('dark')
    }
    setDarkMode(!darkMode)
  }

  return (
    <>
      <div className="bg-white-100 mx-auto px-4 py-1">
        <div className='container flex justify-end text-lg'>
          <nav className="inline-flex space-x-4">
            <Link href="#" className="hover:underline">Tân sinh viên</Link>
            <Link href="#" className="hover:underline">Người học</Link>
            <Link href="#" className="hover:underline">Cán bộ giảng viên</Link>
            <Link href="#" className="hover:underline">Cựu sinh viên</Link>
            <Link href="#" className="hover:underline">Lịch tuần</Link>
            <button
              onClick={toggleDarkMode}
              className="p-0 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              {darkMode ? <Sun className="h-7 w-7" /> : <Moon className="h-7 w-7" />}
            </button>
          </nav>
        </div>
      </div>

      <div className="bg-yellow-500 dark:bg-gray-800 px-4 py-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <Link href="/" className="flex items-center mb-4 lg:mb-0">
              <Image src="/img/logo.png" alt="VTT Logo" width={100} height={100} className="mr-4" />
              <div className="text-center lg:text-left">
                <h1 className="text-2xl font-bold uppercase dark:text-gray-100 text-center">Trường Đại học Tân Trào</h1>
                <h2 className="text-2xl uppercase font-bold dark:text-gray-100 text-center">Khoa Sư Phạm</h2>
              </div>
            </Link>
            <div className="hidden lg:flex space-x-8">
              {['Chất lượng', 'Phát triển bền vững', 'Hội nhập'].map((value, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-yellow-400 dark:bg-gray-700 flex items-center justify-center text-red-900 dark:text-yellow-400 font-bold">
                    {value.split(' ')[0]}
                  </div>
                  <span className="mt-1 text-xs text-center dark:text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <nav className={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
        <div className="container mx-auto">
          <div className="flex items-center justify-center h-16">
            <div className="flex items-center">
              <div className="hidden md:block">
                <ul className="ml-10 flex items-baseline space-x-4">
                  <NavItem href="/khoa/su-pham/co-cau-to-chuc">Cơ cấu tổ chức</NavItem>
                  <NavItem href="/khoa/su-pham/tuyen-sinh">Tuyển sinh</NavItem>
                  <NavItem href="/khoa/su-pham/nckh">NCKH</NavItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
