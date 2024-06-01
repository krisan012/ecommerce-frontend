import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-black text-white py-20 mx-20 my-20 rounded-3xl">
            <div className="container mx-auto py-8 text-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start">
                        <Image
                            src="/logo-white.png" // Replace with your logo path
                            alt="Logo"
                            width={100}
                            height={100}
                        />
                    </div>

                    {/* Payment Methods */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4">Payment Methods</h4>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <Image
                                src="/images/payment-methods/mastercard.png" // Replace with your image path
                                alt="MasterCard"
                                width={50}
                                height={30}
                            />
                            <Image
                                src="/images/payment-methods/visa.png" // Replace with your image path
                                alt="Visa"
                                width={50}
                                height={30}
                            />
                            <Image
                                src="/images/payment-methods/amex.png" // Replace with your image path
                                alt="American Express"
                                width={50}
                                height={30}
                            />
                            <Image
                                src="/images/payment-methods/discover.png" // Replace with your image path
                                alt="Discover"
                                width={50}
                                height={30}
                            />
                        </div>
                    </div>

                    {/* Our Site */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4">Our Site</h4>
                        <ul>
                            <li className="mb-2">
                                <Link href="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/faqs" className="hover:underline">
                                   FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* About */}
                    <div className="text-center md:text-left">
                        <h4 className="text-lg font-semibold mb-4">About</h4>
                        <ul>
                            <li className="mb-2">
                                <Link href="/about" className="hover:underline">
                                    About Uplink Health Rx
                                </Link>
                            </li>
                            <li className="mb-2">
                                <Link href="/terms" className="hover:underline">
                                    Terms and Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
