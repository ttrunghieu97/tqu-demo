'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'
import menuData, { DepartmentName } from '../data/Header'

interface NavigationProps {
	department: DepartmentName;
}

interface NavItemProps {
	href: string
	children: React.ReactNode
}

interface DropdownItemProps {
	href: string
	children: React.ReactNode
}

// Define MenuItem interface
interface MenuItem {
	type: 'simple' | 'dropdown' | 'title'
	label: string
	href?: string
	columns?: number
	items?: {
		title?: string
		links: Array<{
			label: string
			href: string
		}>
	}[]
}

const NavItem = ({ href, children }: NavItemProps) => (
	<li>
		<Link href={href} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase">
			{children}
		</Link>
	</li>
)

const DropdownItem = ({ href, children }: DropdownItemProps) => (
	<Link href={href} className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900">
		{children}
	</Link>
)

const Header: React.FC<NavigationProps> = ({ department }) => {
	const { universityName, items: menuItems } = menuData[department];
	const [isOpen, setIsOpen] = useState(false)
	const [darkMode, setDarkMode] = useState(false)
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

	useEffect(() => {
		const handleDarkMode = () => {
			if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
				setDarkMode(true)
				document.documentElement.classList.add('dark')
			} else {
				setDarkMode(false)
				document.documentElement.classList.remove('dark')
			}
		}

		handleDarkMode()
	}, [])

	const toggleDarkMode = () => {
		if (darkMode) {
			localStorage.theme = 'light'
			document.documentElement.classList.remove('dark')
		} else {
			localStorage.theme = 'dark'
			document.documentElement.classList.add('dark')
		}
		setDarkMode(!darkMode)
	}

	const renderMenuItem = (item: MenuItem) => {
		if (item.type === 'simple') {
			return <NavItem href={item.href!}>{item.label}</NavItem>
		} else if (item.type === 'title') {
			return (
				<NavItem href={item.href!}>{item.label}</NavItem>
			)
		}

		return (
			<li className="relative group">
				<button className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center">
					{item.label}
				</button>
				<div className={`absolute left-1/2 transform -translate-x-1/2 mt-2 ${item.columns && item.columns > 2 ? 'w-[1000px]' : 'w-96'} rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}>
					<div className={`py-1 grid grid-cols-${item.columns || 2} gap-4`} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
						{item.items?.map((column, idx: number) => (
							<div key={idx}>
								{column.title && (
									<div className="font-bold text-center">{column.title}</div>
								)}
								{column.links.map((link: { label: string; href: string }, linkIdx: number) => (
									<DropdownItem key={linkIdx} href={link.href}>
										{link.label}
									</DropdownItem>
								))}
							</div>
						))}
					</div>
				</div>
			</li>
		)
	}

	return (
		<>
			<div className="bg-white-100 mx-auto px-4 py-1">
				<div className='container flex justify-end text-lg'>
					<nav className="inline-flex space-x-4">
						<Link href="#" className="hover:underline">Tân sinh viên</Link>
						<Link href="#" className="hover:underline">Người học</Link>
						<Link href="#" className="hover:underline">Cán bộ giảng viên</Link>
						<Link href="#" className="hover:underline">Cựu sinh viên</Link>
						<Link href="#" className="hover:underline">Lịch tuần</Link>
						<button
							onClick={toggleDarkMode}
							className="p-0 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
						>
							{darkMode ? <Sun className="h-7 w-7" /> : <Moon className="h-7 w-7" />}
						</button>
					</nav>
				</div>
			</div>

			<div className="bg-yellow-500 dark:bg-gray-800 px-4 py-4 ">
				<div className="container mx-auto">
					<div className="flex flex-col lg:flex-row items-center justify-between">
						<Link href="/" className="flex items-center mb-4 lg:mb-0">
							<Image src="/img/logo.png" alt="TTrU Logo" width={100} height={100} className="mr-4" />
							<div className="text-center lg:text-left">
								<h1 className="text-2xl font-bold uppercase dark:text-gray-100 text-center">UBND Tỉnh Tuyên Quang</h1>
								<h2 className="text-2xl uppercase font-bold dark:text-gray-100 text-center">Trường Đại học Tân Trào</h2>
								<p className="text-lg uppercase dark:text-gray-400 text-center">{universityName}</p>
							</div>
						</Link>
						<div className="hidden lg:flex space-x-8">
							{['Chất lượng', 'Phát triển bền vững', 'Hội nhập'].map((value, index) => (
								<div key={index} className="flex flex-col items-center">
									<div className="w-16 h-16 rounded-full bg-yellow-400 dark:bg-gray-700 flex items-center justify-center text-red-900 dark:text-yellow-400 font-bold">
										{value.split(' ')[0]}
									</div>
									<span className="mt-1 text-xs text-center dark:text-gray-300">{value}</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<nav className={`bg-white dark:bg-black shadow-lg transition-all duration-300 ${isSticky ? 'fixed top-0 left-0 w-full z-50' : ''}`}>
				<div className="container mx-auto whitespace-nowrap">
					<div className="flex items-center justify-center h-16">
						<div className="flex items-center">
							<div className="hidden md:block">
								<ul className="ml-10 flex items-baseline space-x-4">
									{menuItems.map((item, index) => (
										<React.Fragment key={index}>
											{renderMenuItem(item)}
										</React.Fragment>
									))}
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
									aria-expanded={isOpen}
								>
									<span className="sr-only">Open main menu</span>
									{isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
								</button>
							</div>
						</div>
					</div>
				</div>
			</nav>

			{isOpen && (
				<div className="md:hidden" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{menuItems.map((item, index) => (
							<React.Fragment key={index}>
								{renderMenuItem(item)}
							</React.Fragment>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Header
