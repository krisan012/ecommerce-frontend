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
import ProductCarousel from "@/app/components/Home/ProductCarousel";
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
						  className="mt-8 inline-block bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-3xl shadow-md hover:bg-red-700">
						FIND MY TREATMENT
					</Link>

					<div className="bg-cover bg-center" style={{ backgroundImage: 'url(/images/circle.png)', backgroundSize: "35%", backgroundRepeat: 'no-repeat' }}>
						<ProductCarousel />
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
