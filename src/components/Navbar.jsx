'use client'

import { useState } from 'react'
import Link from 'next/link'
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa'
import { siteMetadata } from '@/lib/metadata'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <nav className="navbar fixed top-0 left-0 right-0 z-50 px-6 backdrop-blur-md bg-white/5 border-b border-white/10 flex flex-col items-stretch h-auto transition-all duration-300">

            {/* Top row */}
            <div className="flex items-center w-full py-3">

                {/* Logo */}
                <div className="flex-1">
                    <Link
                        href="/"
                        className="text-xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    >
                        Nuruddin Jewel.dev
                    </Link>
                </div>

                {/* Desktop menu */}
                <div className="gap-4 hidden md:flex items-center">
                    <Link href="/about" className="text-sm font-medium hover:text-purple-400 transition-colors">
                        About
                    </Link>
                    <Link href="/projects" className="text-sm font-medium hover:text-purple-400 transition-colors">
                        Projects
                    </Link>
                    <Link href="/contact" className="btn btn-primary btn-sm rounded-xl px-5 bg-purple-600 hover:bg-purple-700 border-none text-white">
                        Contact
                    </Link>

                    {/* GitHub Icon  */}
                    <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-ghost btn-sm btn-circle flex items-center justify-center hover:bg-white/10"
                        aria-label="GitHub Profile"
                    >
                        <FaGithub size={20} />
                    </a>
                </div>

                {/* Hamburger button — mobile only */}
                <button
                    className="flex md:hidden btn btn-ghost btn-sm btn-circle hover:bg-white/10"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                </button>

            </div>

            {/* Mobile dropdown menu */}
            {isOpen && (
                <div className="flex flex-col w-full pb-6 gap-3 md:hidden border-t border-white/10 pt-4 animate-in fade-in slide-in-from-top-2 duration-200">
                    <Link
                        href="/about"
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium px-2 py-1 hover:text-purple-400 transition-colors"
                    >
                        About
                    </Link>
                    <Link
                        href="/projects"
                        onClick={() => setIsOpen(false)}
                        className="text-lg font-medium px-2 py-1 hover:text-purple-400 transition-colors"
                    >
                        Projects
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsOpen(false)}
                        className="btn btn-primary btn-sm rounded-xl bg-purple-600 hover:bg-purple-700 border-none text-white w-fit px-6"
                    >
                        Contact
                    </Link>

                    {/* GitHub Mobile  */}
                    <a
                        href={siteMetadata.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 px-2 py-1 text-lg font-medium hover:text-purple-400 transition-colors"
                    >
                        <FaGithub size={20} />
                        GitHub
                    </a>
                </div>
            )}

        </nav>
    )
}