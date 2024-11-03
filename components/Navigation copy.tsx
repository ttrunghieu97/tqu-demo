'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const NavItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
	<li>
		<Link href={href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase">
			{children}
		</Link>
	</li>
)

const DropdownItem = ({ href, children }: { href: string; children: React.ReactNode }) => (
	<Link href={href} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 ">
		{children}
	</Link>
)

export default function Navigation() {
	const [isOpen, setIsOpen] = useState(false)
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 100)
		}


		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<nav className={`bg-white dark:bg-gray-800 shadow-lg transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
			<div className=" container mx-auto whitespace-nowrap">
				<div className="flex items-center justify-centre h-16">
					<div className="flex items-center">
						<div className="hidden md:block">
							<ul className="ml-10 flex items-baseline space-x-4">
								{/* start */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										Giới thiệu
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<div className='font-bold text-center'>Tỉnh Tuyên Quang</div>
												<DropdownItem href="/gioi-thieu/thong-tin-chung">Thông tin chung</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Trường ĐH Tân Trào</div>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Giới thiệu chung</DropdownItem>
												<DropdownItem href="/gioi-thieu/triet-li-giao-duc">Triết lí giáo dục</DropdownItem>
												<DropdownItem href="/gioi-thieu/ban-giam-hieu">Ban giám hiệu</DropdownItem>
												<DropdownItem href="/gioi-thieu/hoi-dong-truong">Hội đồng trường</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* end */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										Tuyển sinh đào tạo
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<div className='font-bold text-center'>Tuyển sinh</div>
												<DropdownItem href="#">Hệ Cao đẳng</DropdownItem>
												<DropdownItem href="#">Hệ Đại học</DropdownItem>
												<DropdownItem href="#">Sau Đại học</DropdownItem>
												<DropdownItem href="#">Tại chức - VLVH - Liên kết</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Đào tạo</div>
												<DropdownItem href="#">Đăng kí học tín chỉ</DropdownItem>
												<DropdownItem href="#">Kế hoạch chuyên môn</DropdownItem>
												<DropdownItem href="#">Mã ngành và VB liên quan</DropdownItem>
												<DropdownItem href="#">Chương trình đào tạo</DropdownItem>
												<DropdownItem href="#">Thời khóa biểu</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* end */}
								{/* start */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										QL chất lượng - thanh tra
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1200px] rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-6 gap-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<div className='font-bold text-center'>Giới thiệu ĐBCL</div>
												<DropdownItem href="#">Chức năng - Nhiệm vụ</DropdownItem>
												<DropdownItem href="#">Hệ thống ĐBLC</DropdownItem>
												<DropdownItem href="#">Liên hệ ĐBLC</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Khảo thí</div>
												<DropdownItem href="#">Quy định khảo thí</DropdownItem>
												<DropdownItem href="#">Hướng dẫn khảo thí</DropdownItem>
												<DropdownItem href="#">Văn bản học phần</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Đảm bảo CLGD</div>
												<DropdownItem href="#">Chiến lược - Chính sách</DropdownItem>
												<DropdownItem href="#">Quy định - Hướng dẫn</DropdownItem>
												<DropdownItem href="#">Kế hoạch - Khảo sát</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Công khai CLGD</div>
												<DropdownItem href="#">Công khai hàng năm</DropdownItem>
												<DropdownItem href="#">Văn bản pháp quy</DropdownItem>
												<DropdownItem href="#">Văn bằng - Chứng chỉ</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Chuẩn đầu ra</div>
												<DropdownItem href="#">Các ngành Đại học</DropdownItem>
												<DropdownItem href="#">Các ngành Cao đẳng</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Thanh tra nội bộ</div>
												<DropdownItem href="#">VB pháp quy</DropdownItem>
												<DropdownItem href="#">Kế hoạch thanh tra</DropdownItem>
												<DropdownItem href="#">Báo báo thanh tra</DropdownItem>
												<DropdownItem href="#">Hồ Sơ thanh tra</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* end */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										Đơn vị
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-[1000px] rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-5 gap-4" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<div className='font-bold text-center'>Đơn vị trực thuộc</div>
												<DropdownItem href="#">Trường PT Tuyên Quang</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Các đoàn thể</div>
												<DropdownItem href="#">Công Đoàn</DropdownItem>
												<DropdownItem href="#">Ban vì tiến bộ phụ nữ</DropdownItem>
												<DropdownItem href="#">Đoàn thanh niên - Hội sinh viên</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Khoa chuyên môn</div>
												<DropdownItem href="/khoa/su-pham">Khoa sư phạm</DropdownItem>
												<DropdownItem href="/khoa/van-hoa-du-lich">Khoa Văn hóa - Du lịch</DropdownItem>
												<DropdownItem href="/khoa/y-duoc">Khoa Y - Dược</DropdownItem>
												<DropdownItem href="/khoa/CT-TLGD">Khoa Chính trị & TLGD</DropdownItem>
												<DropdownItem href="/khoa/KT-QTKD">Khoa Kinh tế & Quản trị KD</DropdownItem>
												<DropdownItem href="/khoa/nong-lam-ngu">Khoa Nông - Lâm - Ngư nghiệp</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Phòng - Ban</div>
												<DropdownItem href="#">Văn Phòng</DropdownItem>
												<DropdownItem href="#">Phòng QLCL & Thanh tra</DropdownItem>
												<DropdownItem href="#">Phòng QLCL & Hợp tác QL</DropdownItem>
												<DropdownItem href="#">Phòng Đào tạo</DropdownItem>
												<DropdownItem href="#">Phòng Kế hoạch - Tài vụ</DropdownItem>
												<DropdownItem href="#">Phòng Quản lí sinh viên</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Bộ môn - Trung tâm</div>
												<DropdownItem href="#">TT TH-TV và PTNN</DropdownItem>
												<DropdownItem href="#">TT TN & Chuyển giao CN</DropdownItem>
												<DropdownItem href="#">TT Thể dục - Thể thao</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										NCKH
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-96 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-2" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<div className='font-bold text-center'>Khoa học công nghệ</div>
												<DropdownItem href="#">Biểu mẫu NCKH</DropdownItem>
												<DropdownItem href="#">Bài báo ISI/Scopus</DropdownItem>
												<DropdownItem href="#">Bài báo trong nước và quốc tế</DropdownItem>
												<DropdownItem href="#">Hội nghị - Hội thảo</DropdownItem>
												<DropdownItem href="#">Đề tài - Dự án</DropdownItem>
												<DropdownItem href="#">GT/TLTK/Sách chuyên khoa</DropdownItem>
												<DropdownItem href="#">Thông báo khoa học</DropdownItem>
											</div>
											<div>
												<div className='font-bold text-center'>Hợp tác quốc tế</div>
												<DropdownItem href="#">Hoạt động hợp tác quốc tế</DropdownItem>
												<DropdownItem href="#">Các chương trình liên kết</DropdownItem>
												<DropdownItem href="#">Khảo sát các đoàn vào</DropdownItem>
												<DropdownItem href="#">Hội thảo khoa học quốc tế</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* start */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										tin tức
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Tin tức - Sự kiện</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Thông báo</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Thông tin tuyển dụng</DropdownItem>
												<DropdownItem href="/gioi-thieu/triet-li-giao-duc">Lịch công tác chung</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* end */}
								{/* start */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										Công tác HSSV
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Hoạt động ngoại khóa</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Học bổng - Trợ cấp XH</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Giải đáp</DropdownItem>
												<DropdownItem href="/gioi-thieu/triet-li-giao-duc">Nội quy - Quy chế</DropdownItem>
												<DropdownItem href="/gioi-thieu/triet-li-giao-duc">Phản hồi sinh viên</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* end */}
								{/* start */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										Tài nguyên
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Thủ tục hành chính</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Văn bản</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Văn bản đào tạo</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Phổ biến, Giáo dục, Pháp luật</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Tài liệu</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Bài báo khoa học</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* end */}
								{/* start */}
								<li className="relative group">
									<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
										tin tức
									</button>
									<div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
										<div className="py-1 grid grid-cols-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
											<div>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Tin tức - Sự kiện</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Thông báo</DropdownItem>
												<DropdownItem href="/gioi-thieu/gioi-thieu-chung">Thông tin tuyển dụng</DropdownItem>
												<DropdownItem href="/gioi-thieu/triet-li-giao-duc">Lịch công tác chung</DropdownItem>
											</div>
										</div>
									</div>
								</li>
								{/* end */}
								<NavItem href="/tin-tuc">Album ảnh</NavItem>

							</ul>
						</div>
					</div>
					<div className="flex items-center">
						<div className="-mr-2 flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								type="button"
								className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open main menu</span>
								{isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
							</button>
						</div>
					</div>
				</div>
			</div>
			{/* {isOpen && (
					<div className="md:hidden" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
							<Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
								Trang chủ
							</Link>
							<div className="relative group">
								<button
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
								>
									Giới thiệu
								</button>
								<div className="pl-4">
									<Link href="/about/history" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Lịch sử
									</Link>
									<Link href="/about/mission" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Sứ mệnh
									</Link>
									<Link href="/about/vision" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Tầm nhìn
									</Link>
									<Link href="/about/values" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Giá trị cốt lõi
									</Link>
									<Link href="/about/leadership" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Ban lãnh đạo
									</Link>
									<Link href="/about/achievements" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Thành tựu
									</Link>
								</div>
							</div>
							<div className="relative group">
								<button
									className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium w-full text-left"
								>
									Tuyển sinh
								</button>
								<div className="pl-4">
									<Link href="/admission/undergraduate" className="block px-3 py-2 rounded-md  text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Chương trình cử nhân
									</Link>
									<Link href="/admission/master" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Chương trình thạc sĩ
									</Link>
									<Link href="/admission/phd" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Chương trình tiến sĩ
									</Link>
									<Link href="/admission/international" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Sinh viên quốc tế
									</Link>
									<Link href="/admission/tuition" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Học phí
									</Link>
									<Link href="/admission/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
										Liên hệ tuyển sinh
									</Link>
								</div>
							</div>
							<Link href="/academic" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
								Học thuật
							</Link>
							<Link href="/research" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
								Nghiên cứu
							</Link>
							<Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 block px-3 py-2 rounded-md text-base font-medium">
								Liên hệ
							</Link>
						</div>
					</div> 
			 )} */}d
		</nav>
	)
}