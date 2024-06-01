'use client';

import Image from 'next/image'
import Link from "next/link";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from "@/app/components/Carousel";
import HealthSection from "@/app/components/Home/HealthSection";
import ProductSection from "@/app/components/Home/ProductSection";
import FinasterideSection from "@/app/components/Home/FinasterideSection";
import SimpleAffordableSection from "@/app/components/Home/SimpleAffordableSection";
import HowItWorksSection from "@/app/components/Home/HowItWorksSection";
import TreatmentSection from "@/app/components/Home/TreatmentSection";
import Footer from "@/app/components/Home/Footer";

export default function Home() {
	return (
		<main>
			<div className="bg-gradient-to-b from-white to-blue-100 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<h1 className="text-4xl font-bold text-gray-900">
						Men’s Health Made Simple.
					</h1>
					<p className="mt-4 text-xl text-gray-700">
						Your #1 Portal for Men’s Prescription Medication
					</p>
					<Link href="/"
						  className="mt-8 inline-block bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-md shadow-md hover:bg-red-700">
						FIND MY TREATMENT
					</Link>
					<div className="mt-16 flex justify-center space-x-8">
						<div className="flex flex-col items-center">
							<Image
								src="/products/product1.png" // Replace with your image paths
								alt="Extreme RX"
								width={150}
								height={200}
								className="object-contain"
							/>
							<p className="mt-4 text-gray-700 font-semibold">EXTREME RX</p>
						</div>
						<div className="flex flex-col items-center">
							<Image
								src="/products/product2.png" // Replace with your image paths
								alt="Shred Protocol"
								width={200}
								height={250}
								className="object-contain"
							/>
							<p className="mt-4 text-gray-700 font-semibold">SHRED PROTOCOL</p>
						</div>
						<div className="flex flex-col items-center">
							<Image
								src="/products/product3.png" // Replace with your image paths
								alt="Testosterone"
								width={150}
								height={200}
								className="object-contain"
							/>
							<p className="mt-4 text-gray-700 font-semibold">TESTOSTERONE</p>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-gradient-to-b from-white to-gray-100 py-16">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-bold">
					Experience 100% online care with our US-based pharmacy and US-licensed physicians.
				</div>
			</div>
			<Carousel/>

			<HealthSection />

			<ProductSection />

			<FinasterideSection />

			<SimpleAffordableSection />

			<HowItWorksSection />

			<TreatmentSection />
			<Footer />
		</main>
	)
}
