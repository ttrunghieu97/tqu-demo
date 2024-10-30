"use client";
import Link from "next/link";
import { FunctionComponent } from "react";
import { FaFacebook, FaYoutube, FaTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa";

export const Footer: FunctionComponent = () => {
  return (
    <footer className="bg-gray-100 text-black dark:bg-gray-800 dark:text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between px-4">
        {/* Cột Bản đồ */}
        <div className="flex-1">
          <h4 className="text-lg font-bold mb-2 text-center">BẢN ĐỒ CHỈ DẪN</h4>
          <div className="w-full h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3703.5104543039156!2d105.17620949017925!3d21.837837824544515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134ac51ccd87fd5%3A0x6ac53cb7d9861b01!2sTan%20Trao%20in%20Tuyen%20Quang%20University!5e0!3m2!1sen!2sus!4v1728869998468!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Cột thông tin */}
        <div className="flex-1 flex flex-col items-center md:px-4">
          <h4 className="text-lg font-bold mb-2 text-center">BỘ GIÁO DỤC VÀ ĐÀO TẠO</h4>
          <p className="mb-1">Đơn vị trực thuộc:</p>
          <ul className="list-disc pl-5 mb-1">
            <li>Viện - Khoa đào tạo</li>
            <li>Viện - Trung tâm nghiên cứu</li>
            <li>Phòng - Ban - Trung tâm</li>
          </ul>
        </div>

        {/* Cột liên hệ */}
        <div className="flex-1 flex flex-col items-center md:px-4">
          <h4 className="text-lg font-bold mb-2 text-center">LIÊN HỆ</h4>
          <p>Điện thoại: 02073 892 012</p>
          <p>
            Email: <Link href="mailto:dhtt@tqu.edu.vn" className="text-blue-600 underline">dhtt@tqu.edu.vn</Link>
          </p>
          <div className="flex items-center mt-4">
            <h4 className="text-lg font-bold mb-2 text-center">MẠNG XÃ HỘI</h4>
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
      <div className="border-t border-gray-300 my-4"></div>
      <div className="container mx-auto text-center text-xs">
        <p>© {new Date().getFullYear()} ttrunghieu97 </p>
      </div>
    </footer>
  );
};
