import Link from "next/link";
import Image from "next/image";



export default function Home() {
  return (
    <div className="bg-yellow-500 px-4 py-4">
      <div className="container mx-auto"> {/* Thêm mx-auto để căn giữa container */}
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Logo and name */}
          <Link href="/" className="flex items-center mb-4 lg:mb-0">
            <Image src="/img/logo.png" alt="VTT Logo" width={100} height={100} className="mr-4" />
            <div className="text-center lg:text-left">
              <h1 className="text-2xl text-center font-bold uppercase">trường đh tân trào</h1>
              <h2 className="text-2xl text-center uppercase font-bold">khoa sư phạm</h2>
              <p className="text-lg text-center uppercase"></p>
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
