import React from 'react'
import Link from 'next/link'
import ModeToggle from '@/components/ModeToggle';

export default function Topbar() {
    return (
        <div className="bg-white-100 mx-auto px-4 py-1">
            <div className='container flex justify-end text-lg'>
                <nav className="inline-flex space-x-4">
                    <Link href="#" className="hover:underline">Tân sinh viên</Link>
                    <Link href="#" className="hover:underline">Người học</Link>
                    <Link href="#" className="hover:underline">Cán bộ giảng viên</Link>
                    <Link href="#" className="hover:underline">Cựu sinh viên</Link>
                    <ModeToggle />
                </nav>
            </div>
        </div>
    )
}