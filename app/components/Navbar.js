import Link from 'next/link';
import { UserIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="shrink-0 flex items-center">
                            <Link href="/">
                                <img className="h-8 w-auto" src="/logo.png" alt="Logo" />
                            </Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center">
                        <Link href="/profile" className="text-gray-700 hover:text-gray-500">
                            <UserIcon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                        <Link href="/cart">
                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
