'use client';

import Image from 'next/image';
import {useState, useEffect} from 'react';
import Subscribe from "@/app/components/Products/Subscribe";
import TestimonialsSection from "@/app/components/Products/TestimonialsSection";
import FeaturesSection from "@/app/components/Products/FeaturesSection";
import FAQSection from "@/app/components/Products/FAQSection";
import StepsToOrder from "@/app/components/Products/StepsToOrder";
import PromotionalSection from "@/app/components/Products/PromotionalSection";
import Footer from "@/app/components/Home/Footer";

export default function ProductPage({productId}) {
    const [countdown, setCountdown] = useState({
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const products = {
        '1': {
            name: "Generic Viagra",
            image: "/products/product1.png",
            background: "#52C7B4"
        },
        '2': {
            name: "Finasteride",
            image: "/products/product2.png",
            background: "#B9393D"
        },
        '3': {
            name: "Finasteride",
            image: "/products/product3.png",
            background: "#B9393D"
        },
        '4': {
            name: "Testosterone",
            image: "/products/product4.png",
            background: "#D2CCC0"
        },
        '5': {
            name: "Shred Protocol",
            image: "/products/product5.png",
            background: "#96AEB4"
        },
        '6': {
            name: "Extreme RX",
            image: "/products/product6.png",
            background: "#C3A81B"
        },
    };

    const features = [
        "Genuine, FDA approved ED treatment",
        "FDA-approved medication",
        "Completely ONLINE - Access Healthcare Anywhere",
        "US-based pharmacy",
        "Ongoing care",
        "Discreet shipping",
    ];

    const currentProduct = products[productId]
    const productImage = products[productId].image || '/images/default.png';

    useEffect(() => {
        const targetDate = new Date();
        targetDate.setHours(targetDate.getHours() + 13);

        const interval = setInterval(() => {
            const now = new Date();
            const difference = targetDate - now;

            const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((difference / 1000 / 60) % 60);
            const seconds = Math.floor((difference / 1000) % 60);

            setCountdown({hours, minutes, seconds});

            if (difference < 0) clearInterval(interval);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="max-w-7xl mx-auto p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <nav className="mb-4">
                            <ol className="list-reset flex">
                                <li>
                                    <a href="/" className="text-blue-600 hover:text-blue-800">Home</a>
                                </li>
                                <li><span className="mx-2">/</span></li>
                                <li>
                                    <a href={`/products/${productId}`} className="text-blue-600 hover:text-blue-800">
                                        Generic Viagra
                                    </a>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-4xl font-bold mb-2">{currentProduct.name}</h1>
                        <p className="text-xl text-gray-600 mb-2">Sildenafil Citrate</p>
                        <p className="text-3xl font-semibold text-green-600 mb-2">$17</p>
                        <p className="text-gray-600 mb-4">100mg | 4 doses</p>
                        <div className="flex items-center mb-4">
                            <span className="text-yellow-500 mr-2">★★★★★</span>
                            <span className="text-gray-600">5.0</span>
                        </div>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4">
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-2">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center">
                                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd"
                                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h3a1 1 0 100-2h-2V7z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                        <span className="ml-2 text-gray-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <button className="w-full py-3 bg-red-600 text-white text-lg rounded-3xl mb-4">
                            Get Started Now
                        </button>
                        <div className="bg-gray-100 p-4 rounded-lg text-center">
                            <p className="text-gray-600 mb-2">Order within</p>
                            <div className="flex justify-center items-center space-x-2 mb-2">
                            <span
                                className="text-2xl font-semibold text-gray-900">{String(countdown.hours).padStart(2, '0')}</span>
                                <span>:</span>
                                <span
                                    className="text-2xl font-semibold text-gray-900">{String(countdown.minutes).padStart(2, '0')}</span>
                                <span>:</span>
                                <span
                                    className="text-2xl font-semibold text-gray-900">{String(countdown.seconds).padStart(2, '0')}</span>
                            </div>
                            <p className="text-gray-600">and get it by <strong>Feb 7, 2024</strong></p>
                        </div>
                    </div>
                    <div className="flex justify-center rounded-3xl"
                         style={{backgroundColor: currentProduct.background}}>
                        <Image
                            src={productImage} // Dynamically set the product image
                            alt="Product Image"
                            width={350}
                            height={400}
                            className="rounded-lg object-contain"
                        />
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <p className="text-gray-700">
                        <strong>Uplink Health</strong> makes access to FDA-approved prescription medication, without
                        compromising quality, safety, and affordability.
                    </p>
                </div>
            </div>

            <Subscribe />

            <TestimonialsSection />

            <FeaturesSection />

            <FAQSection />

            <StepsToOrder />

            <PromotionalSection />

            <Footer />
        </div>
    );
}
