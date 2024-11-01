import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin } from "lucide-react"
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-yellow-400 text-black pt-3">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-center text-center gap-4 mb-8">
              <Image
                src="/img/logo.png"
                alt="Logo"
                width={150}
                height={150}
                className="rounded-full bg-white p-1"
              />
              <div className="leading-tight">
                <h2 className="font-bold text-2xl uppercase">trường đại học tân trào</h2>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p className="font-bold">Km 6, xã Trung Môn, huyện Yên Sơn, tỉnh Tuyên Quang</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 flex-shrink-0" />
                <div>
                  <p className="font-bold">02073 892 012</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 flex-shrink-0" />
                <p>
                  <Link href="mailto:dhtt@tqu.edu.vn" className="text-blue-600 underline font-bold">dhtt@tqu.edu.vn</Link>
                </p>
              </div>
              <div className="flex justify-center space-x-4 mb-4">
                {/* Social Media Icons */}
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <FaFacebook className="text-2xl hover:text-blue-500" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                  <FaYoutube className="text-2xl hover:text-blue-500" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-2xl hover:text-blue-500" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-2xl hover:text-blue-400" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-2xl hover:text-blue-600" />
                </a>
                <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
                  <FaTiktok className="text-2xl hover:text-blue-600" />
                </a>
              </div>

            </div>
          </div>

          {/* General Information */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-red-600 mb-4">THÔNG TIN CHUNG</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-200">Lịch sử hình thành</Link></li>
              <li><Link href="#" className="hover:text-red-200">Sứ mệnh - Tầm nhìn - Giá trị cốt lõi</Link></li>
              <li><Link href="#" className="hover:text-red-200">Triết lý giáo dục</Link></li>
            </ul>
            <h3 className="font-bold text-red-500 mt-8 mb-4 uppercase">đảng - đoàn thể</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-200">Đảng bộ TTrU</Link></li>
              <li><Link href="#" className="hover:text-red-200">Công đoàn TTrU</Link></li>
              <li><Link href="#" className="hover:text-red-200">Đoàn trườngTTrU</Link></li>
            </ul>

          </div>

          {/* Admissions */}
          <div className="lg:col-span-1">
            <h3 className="font-bold text-red-500 mb-4">TUYỂN SINH</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-200">Thông tin tuyển sinh</Link></li>
              <li><Link href="#" className="hover:text-red-200">Đăng ký tuyển sinh</Link></li>
              <li><Link href="#" className="hover:text-red-200">Tư vấn tuyển sinh</Link></li>
              <li><Link href="#" className="hover:text-red-200">Tư vấn tuyển sinh</Link></li>
            </ul>

            <h3 className="font-bold text-red-500 mt-8 mb-4 uppercase">Hệ đào tạo</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="hover:text-red-200">Cao đẳng</Link></li>
              <li><Link href="#" className="hover:text-red-200">Đại học </Link></li>
              <li><Link href="#" className="hover:text-red-200">Sau Đại học </Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="font-bold text-red-500 mb-4 uppercase text-center"> bản đồ chỉ dẫn</h3>
            <ul className="space-y-2">
              <div className="flex-1">
                <div className="w-full h-48">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.5104543039156!2d105.17620949017925!3d21.837837824544515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134ac51ccd87fd5%3A0x6ac53cb7d9861b01!2sTan%20Trao%20in%20Tuyen%20Quang%20University!5e0!3m2!1sen!2sus!4v1728869998468!5m2!1sen!2sus"
                    width="100%"
                    height="150%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
            </ul>
          </div>

        </div>

      </div>
      <div className="border-t border-green-700 my-2"></div>
      <div className="container mx-auto text-center text-xs">
        <p>© {new Date().getFullYear()} ttrunghieu97 </p>
      </div>

    </footer>
  )
}