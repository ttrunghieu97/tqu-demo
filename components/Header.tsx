'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Moon, Sun, Menu, X } from 'lucide-react'
import menuData, { DepartmentName } from '../lib/Header'

// Props and Types
interface NavigationProps {
	department: DepartmentName
}

interface NavItemProps {
	href: string
	children: React.ReactNode
}

interface DropdownItemProps {
	href: string
	children: React.ReactNode
}

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

// Individual Navigation Item Component
const NavItem = ({ href, children }: NavItemProps) => (
	<li>
		<Link
			href={href}
			className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase transition-colors duration-200"
		>
			{children}
		</Link>
	</li>
)

// Dropdown Item Component
const DropdownItem = ({ href, children }: DropdownItemProps) => (
	<Link
		href={href}
		className="block px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
	>
		{children}
	</Link>
)
// Custom Hook for Dark Mode
const useDarkMode = () => {
	const [darkMode, setDarkMode] = useState(false)

	useEffect(() => {
		const theme = localStorage.theme
		if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			setDarkMode(true)
			document.documentElement.classList.add('dark')
		} else {
			setDarkMode(false)
			document.documentElement.classList.remove('dark')
		}
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

	return { darkMode, toggleDarkMode }
}

const Header: React.FC<NavigationProps> = ({ department }) => {
	const { universityName, items: menuItems } = menuData[department]
	const [isOpen, setIsOpen] = useState(false)
	const [isSticky, setIsSticky] = useState(false)
	const { darkMode, toggleDarkMode } = useDarkMode()

	useEffect(() => {
		const handleScroll = () => setIsSticky(window.scrollY > 100)
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	// Function to get grid columns class based on number of columns
	const getGridColumnsClass = (columns?: number) => {
		if (!columns || columns <= 1) return 'grid-cols-1'
		if (columns === 2) return 'grid-cols-2'
		if (columns === 3) return 'grid-cols-3'
		if (columns === 4) return 'grid-cols-4'
		if (columns === 5) return 'grid-cols-5'
		if (columns === 6) return 'grid-cols-6'
		if (columns === 7) return 'grid-cols-7'
		if (columns === 8) return 'grid-cols-8'
		return 'grid-cols-2' // fallback to 2 columns
	}

	// Function to get dropdown width class based on number of columns
	const getDropdownWidthClass = (columns?: number) => {
		if (!columns || columns <= 1) return 'w-64'
		if (columns === 2) return 'w-96'
		return 'w-[1000px]'
	}

	const renderMenuItem = useCallback((item: MenuItem) => {
		if (item.type === 'simple' || item.type === 'title') {
			return <NavItem href={item.href!}>{item.label}</NavItem>
		}
		return (
			<li className="relative group">
				<button
					aria-haspopup="true"
					className="text-gray-800 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-2 rounded-md text-lg font-bold uppercase inline-flex items-center transition-colors duration-200"
				>
					{item.label}
				</button>
				<div
					className={`absolute left-1/2 transform -translate-x-1/2 mt-2 ${getDropdownWidthClass(item.columns)} rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50`}
				>
					<div className={`py-1 grid ${getGridColumnsClass(item.columns)} gap-4`} role="menu" aria-orientation="vertical">
						{item.items?.map((column, idx) => (
							<div key={idx}>
								{column.title && <div className="font-bold text-center text-gray-800 dark:text-gray-100">{column.title}</div>}
								{column.links.map((link, linkIdx) => (
									<DropdownItem key={linkIdx} href={link.href}>{link.label}</DropdownItem>
								))}
							</div>
						))}
					</div>
				</div>
			</li>
		)
	}, [])

	return (
		<>
			{/* Top bar */}
			<div className="bg-white-100 mx-auto px-4 py-1 z-40 relative">
				<div className="container flex justify-end text-lg">
					<nav className="inline-flex space-x-4">
						<Link href="#" className="hover:underline">Tân sinh viên</Link>
						<Link href="#" className="hover:underline">Người học</Link>
						<Link href="#" className="hover:underline">Cán bộ giảng viên</Link>
						<Link href="#" className="hover:underline">Cựu sinh viên</Link>
						<Link href="#" className="hover:underline">Lịch tuần</Link>
						<button
							onClick={toggleDarkMode}
							aria-label="Toggle dark mode"
							className="p-0 rounded-md text-gray-400 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none"
						>
							{darkMode ? <Sun className="h-7 w-7" /> : <Moon className="h-7 w-7" />}
						</button>
					</nav>
				</div>
			</div>

			{/* Logo and university name */}
			<div className="bg-yellow-500 dark:bg-gray-800 px-4 py-4 z-30 relative">
				<div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
					<Link href="/" className="flex items-center mb-4 lg:mb-0">
						<Image src="/img/logo.png" alt="TTrU Logo" width={100} height={100} className="mr-4" />
						<div className="text-center lg:text-left">
							<h1 className="text-2xl font-bold uppercase dark:text-gray-100 text-center">UBND Tỉnh Tuyên Quang</h1>
							<h2 className="text-2xl uppercase font-bold dark:text-gray-100 text-center">Trường Đại học Tân Trào</h2>
							<p className="text-lg uppercase dark:text-gray-400 text-center">{universityName}</p>
						</div>
					</Link>
					<div className="hidden md:flex space-x-4 lg:space-x-8">
						{['Chất lượng', 'Phát triển bền vững', 'Hội nhập'].map((value, index) => (
							<div key={index} className="flex flex-col items-center">
								<div className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-yellow-400 dark:bg-gray-700 flex items-center justify-center text-red-900 dark:text-yellow-400 font-bold text-xs md:text-sm lg:text-base">
									{value.split(' ')[0]}
								</div>
								<span className="mt-1 text-xs text-center dark:text-gray-300">{value}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Main navigation */}
			<nav className={`bg-white dark:bg-gray-900 shadow-lg ${isSticky ? 'fixed top-0 left-0 w-full z-50' : 'relative z-20'}`}>
				<div className="container mx-auto whitespace-nowrap">
					<div className="flex items-center justify-center h-16">
						<ul className="hidden md:flex items-baseline space-x-4">
							{menuItems.map((item, index) => (
								<React.Fragment key={index}>{renderMenuItem(item)}</React.Fragment>
							))}
						</ul>
						<button
							onClick={() => setIsOpen(!isOpen)}
							type="button"
							className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 transition-colors duration-200"
							aria-controls="mobile-menu"
							aria-expanded={isOpen}
							aria-label="Toggle mobile menu"
						>
							{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
						</button>
					</div>
				</div>
			</nav>

			{/* Mobile menu */}
			{isOpen && (
				<div className="md:hidden z-50 relative" id="mobile-menu">
					<div className="px-2 pt-2 pb-3 space-y-1 bg-white dark:bg-gray-900">
						{menuItems.map((item, index) => (
							<React.Fragment key={index}>{renderMenuItem(item)}</React.Fragment>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default Header