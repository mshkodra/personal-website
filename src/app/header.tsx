"use client"
import Link from 'next/link'
import { useState } from 'react'
enum Pages {
    HOME = 'home',
    ABOUT = 'about',
    BOOKSHELF = 'bookshelf'
  }
export default function Header() {

    const [currentPage, setCurrentPage] = useState<Pages>(Pages.HOME)
    return (
        <div className="space-x-6">
            <Link 
                href="/" 
                className={`${currentPage === Pages.HOME ? '' : 'text-blue-600 hover:underline'}`}
                onClick={() => setCurrentPage(Pages.HOME)}
            >
                Home
            </Link>
            <Link 
                href="/about" 
                className={`${currentPage === Pages.ABOUT ? '' : 'text-blue-600 hover:underline'}`}
                onClick={() => setCurrentPage(Pages.ABOUT)}
            >
                About
            </Link>
            <Link 
                href="/bookshelf" 
                className={`${currentPage === Pages.BOOKSHELF ? '' : 'text-blue-600 hover:underline'}`}
                onClick={() => setCurrentPage(Pages.BOOKSHELF)}
            >
                Bookshelf
            </Link>
        </div>
    )
}