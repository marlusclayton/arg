'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
    return (
        <header>
            <Navbar />
        </header>
    );
}

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link href="/" className="text-xl font-bold text-gray-800">
                    ARG
                </Link>

                <div className="hidden md:flex space-x-6">
                    <Link href="/1" className="text-gray-600 hover:text-gray-900">
                        Menu 1
                    </Link>
                    <Link href="/2" className="text-gray-600 hover:text-gray-900">
                        Menu 2
                    </Link>
                    <Link href="/3" className="text-gray-600 hover:text-gray-900">
                        Menu 3
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-2 bg-white shadow-md p-4">
                    <Link href="/1" className="block text-gray-600 hover:text-gray-900">
                        Menu 1
                    </Link>
                    <Link href="/2" className="block text-gray-600 hover:text-gray-900">
                        Menu 2
                    </Link>
                    <Link href="/3" className="block text-gray-600 hover:text-gray-900">
                        Menu 3
                    </Link>
                </div>
            )}
        </nav>
    );
}