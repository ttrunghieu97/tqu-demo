'use client'

import React, { useState, useEffect } from 'react'
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navigation() {
	const [isSticky, setIsSticky] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 175)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
		<div
			className={cn(
				'w-full bg-primary transition-all duration-300 ease-in-out z-50',
				isSticky ? 'fixed top-0 left-0 shadow-md' : ''
			)}
		>


			<nav className="sticky top-0 z-50 w-full bg-yellow-500 font-sans">
				<div className="mx-auto max-w-7xl">
					<NavigationMenu >
						<NavigationMenuList >
							{/* Giới thiệu */}
							<NavigationMenuItem >
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									GIỚI THIỆU
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
										<li>
											<div className="mb-2 text-lg font-bold">Tỉnh Tuyên Quang</div>
											<ListItem href="/chung" title="Thông tin chung" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold">Trường ĐH Tân Trào</div>
											<ListItem href="/gioi-thieu-chung" title="Giới thiệu chung" />
											<ListItem href="/ttu/triet-li" title="Triết lí giáo dục" />
											<ListItem href="/ttu/ban-giam-hieu" title="Ban Giám hiệu" />
											<ListItem href="/ttu/hoi-dong" title="Hội đồng trường" />
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* Tuyển sinh - Đào tạo */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									TUYỂN SINH - ĐÀO TẠO
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
										<li>
											<div className="mb-2 text-lg font-bold">Tuyển sinh</div>
											<ListItem href="/tuyen-sinh/cao-dang" title="Hệ Cao đẳng" />
											<ListItem href="/tuyen-sinh/dai-hoc" title="Hệ Đại học" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Sau Đại học" />
											<ListItem href="/tuyen-sinh/vlvh" title="Tại chức - VLVH - Liên Kết" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold">Đào tạo</div>
											<ListItem href="/dao-tao/tin-chi" title="Đăng kí học tín chỉ" />
											<ListItem href="/dao-tao/ke-hoach" title="Kế hoạch chuyên môn" />
											<ListItem href="/dao-tao/ma-nganh" title="Mã ngành và VB liên quan" />
											<ListItem href="/dao-tao/chuong-trinh" title="Chương trình đào tạo" />
											<ListItem href="/dao-tao/tkb" title="Thời khóa biểu" />
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/* 								ql chất lượng - thanh tra */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									ql chất lượng - thanh tra
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[1000px] lg:w-[1500px] lg:grid-cols-6">
										<li>
											<div className="mb-2 text-lg font-bold uppercase">giới thiệu đbcl</div>
											<ListItem href="/tuyen-sinh/cao-dang" title="Chức năng - nhiệm vụ" />
											<ListItem href="/tuyen-sinh/dai-hoc" title="Hệ thống ĐBCL" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Liên hệ ĐBCL" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Khảo thí</div>
											<ListItem href="/dao-tao/tin-chi" title="Quy định khảo thí" />
											<ListItem href="/dao-tao/ke-hoach" title="Hướng dẫn khảo thí" />
											<ListItem href="/dao-tao/ma-nganh" title="Văn bản học phần" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Đảm bảo CLGD</div>
											<ListItem href="/dao-tao/tin-chi" title="Chiến lược - chính sách" />
											<ListItem href="/dao-tao/ke-hoach" title="Quy định - Hướng dẫn" />
											<ListItem href="/dao-tao/ma-nganh" title="Kế hoạch - Khảo sát" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Công khai CLGD</div>
											<ListItem href="/dao-tao/tin-chi" title="Công khai hàng năm" />
											<ListItem href="/dao-tao/ke-hoach" title="Văn bản pháp quy" />
											<ListItem href="/dao-tao/ma-nganh" title="Văn bằng - Chứng chỉ" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Chuẩn đầu ra</div>
											<ListItem href="/dao-tao/tin-chi" title="Các ngành Đại học" />
											<ListItem href="/dao-tao/tin-chi" title="Các ngành Cao đẳng" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Thanh tra nội bộ</div>
											<ListItem href="/dao-tao/tin-chi" title="VB pháp quy" />
											<ListItem href="/dao-tao/tin-chi" title="Kế hoạch thanh tra" />
											<ListItem href="/dao-tao/ke-hoach" title="Báo cáo thanh tra" />
											<ListItem href="/dao-tao/ma-nganh" title="Hồ sơ thanh tra" />
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/*ĐƠn vị */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									đơn vị
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[1000px] lg:w-[1500px] lg:grid-cols-5">
										<li>
											<div className="mb-2 text-lg font-bold uppercase">đơn vụ trực thuộc</div>
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Trường PT Tuyên Quang" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Các đoàn thể</div>
											<ListItem href="/dao-tao/tin-chi" title="Công đoàn" />
											<ListItem href="/dao-tao/ke-hoach" title="Ban Vì sự tiến bộ Phụ nữ" />
											<ListItem href="/dao-tao/ma-nganh" title="Đoàn thanh niên - Hội sinh viên" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Khoa chuyên môn</div>
											<ListItem href="/dao-tao/tin-chi" title="Khoa Sư phạm" />
											<ListItem href="/dao-tao/ke-hoach" title="Khoa Văn hóa - Du lịch" />
											<ListItem href="/dao-tao/ma-nganh" title="Khoa Y - Dược" />
											<ListItem href="/dao-tao/ma-nganh" title="Khoa Chính trị và TLGD" />
											<ListItem href="/dao-tao/ma-nganh" title="Khoa Kinh tế & Quản trị KD" />
											<ListItem href="/dao-tao/ma-nganh" title="Khoa Nông - Lâm - Ngư nghiệp" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Phòng - Ban</div>
											<ListItem href="/dao-tao/tin-chi" title="Văn Phòng" />
											<ListItem href="/dao-tao/ke-hoach" title="Phòng QLCL & Thanh tra" />
											<ListItem href="/dao-tao/ke-hoach" title="Phòng QLKH & Hợp tác QT" />
											<ListItem href="/dao-tao/ke-hoach" title="Phòng Đào tạo" />
											<ListItem href="/dao-tao/ke-hoach" title="Phòng Kế hoạch - Tài vụ" />
											<ListItem href="/dao-tao/ke-hoach" title="Phòng Quản lí sinh viên" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Bộ môn - trung tâm</div>
											<ListItem href="/dao-tao/tin-chi" title="TT THNN-TV và PTNN" />
											<ListItem href="/dao-tao/tin-chi" title="TT TN và Chuyển giao CN" />
											<ListItem href="/dao-tao/tin-chi" title="TT Thể dục - Thể thao" />
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/*NCKH - HTQT */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									NCKH - HTQT
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[1500px] lg:grid-cols-6">
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Khoa học công nghệ</div>
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Biểu mẫu NCKH" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Bài báo ISI/Scopus" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Bài báo trong nước và quốc tế" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Hộ nghị - Hội thảo" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Đề tài - Dự án" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="GT/TLTK/Sách chuyên khoa" />
											<ListItem href="/tuyen-sinh/sau-dai-hoc" title="Thông báo khoa học" />
										</li>
										<li>
											<div className="mb-2 text-lg font-bold uppercase">Hợp tác quốc tế</div>
											<ListItem href="/dao-tao/tin-chi" title="Hoạt động hợp tác quốc tế" />
											<ListItem href="/dao-tao/tin-chi" title="Các chương trình liên kết" />
											<ListItem href="/dao-tao/tin-chi" title="Khảo sát các đoàn vào" />
											<ListItem href="/dao-tao/tin-chi" title="Khảo sát các đoàn vào" />
											<ListItem href="/dao-tao/tin-chi" title="Hội thảo khoa học quốc tế" />
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/*Tin tức */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									tin tức
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[1500px] lg:grid-cols-6">
										<li>
											<a href="" >
												<div className="mb-2 text-lg font-bold">Tin tức - Sự kiện</div>
											</a>
										</li>
										<li>
											<a href="" >
												<div className="mb-2 text-lg font-bold">Thông báo</div>
											</a>
										</li>
										<li>
											<a href="" >
												<div className="mb-2 text-lg font-bold">Thông tin tuyển dụng</div>
											</a>
										</li>
										<li>
											<a href="" >
												<div className="mb-2 text-lg font-bold">Lịch công tác chung</div>
											</a>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/*Công tác HSSV */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									công tác HSSV
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[1500px] lg:grid-cols-6">
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Hoạt động ngoại khóa</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Học bổng - Trợ cấp XH</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Giải đáp</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Nội quy - Quy chế</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Phản hồi sinh viên</div>
											</a>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>
							{/*Tài nguyên */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									tài nguyên
								</NavigationMenuTrigger>
								<NavigationMenuContent>
									<ul className="grid gap-3 p-6 md:w-[400px] lg:w-[1500px] lg:grid-cols-6">
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Thủ tục hành chính</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Văn bản</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Văn bản đào tạo</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Giáo dục Pháp luật</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Tài liệu</div>
											</a>
										</li>
										<li>
											<a href="" className="block">
												<div className="mb-2 text-lg font-bold">Bài báo khoa học</div>
											</a>
										</li>
									</ul>
								</NavigationMenuContent>
							</NavigationMenuItem>

							{/*Công tác HSSV */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									<a href="" className="block">
										tin tức
									</a>
								</NavigationMenuTrigger>
							</NavigationMenuItem>

						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</nav >
		</div>
	);
}

const ListItem = React.forwardRef<
	React.ElementRef<"a">,
	React.ComponentPropsWithoutRef<"a"> & {
		title: string;
	}
>(({ className, title, children, ...props }, ref) => {
	return (
		<NavigationMenuLink asChild>
			<a
				ref={ref}
				className={cn(
					"block select-none rounded-md p-3 hover:bg-green-500 focus:bg-green-50",
					className
				)}
				{...props}
			>
				<div className="text-sm font-medium leading-none">{title}</div>
				{children && (
					<p className="line-clamp-2 text-sm leading-snug text-gray-600">
						{children}
					</p>
				)}
			</a>
		</NavigationMenuLink>
	);
});
ListItem.displayName = "ListItem";