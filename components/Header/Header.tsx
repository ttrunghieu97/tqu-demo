import React from 'react'
import Logo from './Logo'
import Topbar from './Topbar'
import Navigation from './Navigation'

export default function Header() {
    return (
        <header>
            <Topbar />
            <Logo />
            <Navigation />
        </header>
    )
}