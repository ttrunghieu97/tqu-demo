'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-950 px-4 overflow-hidden">

      <div className="fixed inset-0 z-0">
        <Image
          src="/img/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>

      <div className="text-center z-10">
        <h1 className="flex items-center justify-center text-[120px] md:text-[150px] font-bold tracking-widest">
          4
          <div
            className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] mx-[-10px] tracking-widest"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            <Image
              src="/img/logo.png"
              alt="Logo trường đại học"
              layout="fill"
              objectFit="contain"
            />
          </div>
          4
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-2 mt-4">
          There&apos;s NOTHING here...
        </h2>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full text-lg font-medium transition-transform hover:translate-x-1 group"
        >
          Back to home
          <svg
            className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

