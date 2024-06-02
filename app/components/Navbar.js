import Link from 'next/link';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8 py-5">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <Link href="/profile" className="text-gray-700 hover:text-gray-500 px-5">
                            <UserIcon className="h-8 w-8" aria-hidden="true" />
                        </Link>
                        <Link href="/cart">
                            <ShoppingCartIcon className="h-8 w-8" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
