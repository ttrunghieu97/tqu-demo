import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
    return (
        <div className="bg-yellow-500 px-4 py-4">
            <div className="container mx-auto"> {/* Thêm mx-auto để căn giữa container */}
                <div className="flex flex-col lg:flex-row items-center justify-between">
                    {/* Logo and name */}
                    <Link href="/" className="flex items-center mb-4 lg:mb-0">
                        <Image src="/img/logo.png" alt="VTT Logo" width={100} height={100} className="mr-4" />
                        <div className="text-center lg:text-left">
                            <h1 className="text-2xl text-center font-bold uppercase">UBND Tỉnh Tuyên Quang</h1>
                            <h2 className="text-2xl uppercase font-bold">Trường Đại học Tân Trào</h2>
                            <p className="text-lg text-center uppercase">Tan Trao University</p>
                        </div>
                    </Link>
                    {/* University values */}
                    <div className="hidden lg:flex space-x-8">
                        {['Chất lượng', 'Phát triển bền vững', 'Hội nhập'].map((value, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-red-900 font-bold">
                                    {value.split(' ')[0]}
                                </div>
                                <span className="mt-1 text-xs text-center">{value}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
