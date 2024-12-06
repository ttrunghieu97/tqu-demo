'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Loading() {
  const [rotation, setRotation] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 5) % 360)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white dark:bg-gray-900 bg-opacity-75 dark:bg-opacity-75 z-50">
      <div
        className="w-32 h-32 relative"
        style={{ transform: `rotate(${rotation}deg)` }}
      >
        <Image
          src="/img/logo.png"
          alt="Logo trường đại học"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}

