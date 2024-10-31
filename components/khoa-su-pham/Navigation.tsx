'use client'

import React, { useState, useEffect } from 'react'
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuItem,
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


			<nav className="sticky top-0 z-50 w-full bg-yellow-500 font-sans flex justify-center">
				<div className="mx-auto max-w-7xl ">
					<NavigationMenu >
						<NavigationMenuList >
							{/*  */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									<a href="/khoa/su-pham/co-cau-to-chuc">cơ cấu tổ chức</a>
								</NavigationMenuTrigger>
							</NavigationMenuItem>
							{/*  */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									<a href="/khoa/su-pham/co-cau-to-chuc">tuyển sinh</a>
								</NavigationMenuTrigger>
							</NavigationMenuItem>
							{/*  */}
							<NavigationMenuItem>
								<NavigationMenuTrigger className="text-red-800 text-1xl bg-yellow-500 uppercase font-extrabold">
									<a href="/khoa/su-pham/co-cau-to-chuc">nghiên cứu khoa học</a>
								</NavigationMenuTrigger>
							</NavigationMenuItem>

						</NavigationMenuList>
					</NavigationMenu>
				</div>
			</nav >
		</div>
	);
}

