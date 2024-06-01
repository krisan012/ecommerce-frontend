import Image from 'next/image';
import Link from "next/link";

export default function HealthSection() {
    return (
        <div className="bg-white py-16">
            <div className="container mx-auto py-8">

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center font-bold text-4xl mb-8">
                    Problem Getting Hard?
                </div>
                {/* Main Text Section */}
                <div className="mb-12">
                    <div className="relative">
                        <Image
                            src="/images/img_5.png" // Replace with your image path
                            alt="Erectile Dysfunction"
                            width={1900}
                            height={400}
                            className="rounded-lg object-cover"
                        />
                        <div className="absolute top-0 left-0 p-8 text-white bg-black bg-opacity-50 rounded-lg h-full">
                            <h2 className="text-3xl font-bold">Erectile Dysfunction</h2>
                            <p className="mt-4">
                                Uplink Health Rx makes treating erectile dysfunction simpler and easier! With Uplink
                                Health Rx, you can go through every step of the process from the comfort of your home!
                                Get evaluated by a US-licensed physician and have your medication delivered directly
                                from the pharmacy, to your doorstep!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Product Cards Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Product Card 1 */}
                    <div className="bg-green-200 p-8 rounded-lg flex">
                        <Image
                            src="/products/product1.png" // Replace with your image path
                            alt="Generic Viagra"
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                        <div className="ml-4 mt-7">
                            <h3 className="text-2xl font-bold text-gray-900">Generic Viagra</h3>
                            <p className="mt-4 text-gray-700">
                                Sildenafil Citrate is the generic counterpart of the well-known erectile dysfunction
                                (E.D.) medication, Viagra. Our Sildenafil Citrate tablets contain the same potency and
                                effectiveness as its brand-name counterpart, but without the expensive price tag.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
                                Get Started
                            </button>
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="bg-blue-200 p-8 rounded-lg flex" style={{backgroundColor: '#166EAD'}}>
                        <Image
                            src="/products/product7.png" // Replace with your image path
                            alt="Generic Cialis"
                            width={200}
                            height={200}
                            className="object-contain"
                        />
                        <div className="ml-4 mt-7">
                            <h3 className="text-2xl font-bold text-white">Generic Cialis</h3>
                            <p className="mt-4 text-gray-700 text-white">
                                Tadalafil, the generic counterpart Cialis, best known its extended duration of
                                effectiveness. While other E.D. medications typically last only a few hours, Tadalafil
                                stands out, offering up to 36 hours of efficacy with just one tablet.
                            </p>
                            <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center font-bold text-4xl mt-12">
                    <h1 className="text-4xl font-bold text-gray-900">
                        Personalized treatment plan with our Custom Rx
                    </h1>
                    <p className="mt-4 text-xl text-gray-600">
                        Uplink Health Rx has brought together a global team of experts to develop groundbreaking custom medications specifically tailored for individuals who only want the best results possible. Total Male Rx’s custom medications are made to deliver more advanced results compared to traditional medication.
                    </p>
                    <Link href="/"
                          className="mt-8 inline-block bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-md shadow-md hover:bg-red-700">
                        FIND MY TREATMENT
                    </Link>
                </div>
            </div>
        </div>
    );
}
