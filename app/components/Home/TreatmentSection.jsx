import Image from 'next/image';

export default function TreatmentSection() {
    const features = [
        "100% Online healthcare platform",
        "FDA-approved medication",
        "Discreet shipping",
        "US-licensed physicians",
        "US-based pharmacy",
        "Ongoing care"
    ];

    const products = [
        "/products/product1.png",
        "/products/product2.png",
        "/products/product3.png",
        "/products/product4.png",
        "/products/product5.png",
        "/products/product6.png",
        "/products/product7.png",
    ];

    return (
        <div className="bg-white py-16 relative">
            <div className="container mx-auto py-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900">Men’s Health Made Simple</h2>

                <div className="mt-12 bg-gray-100 p-8 rounded-3xl pb-0">
                    <h3 className="text-2xl font-semibold text-gray-900">Start your treatment today.</h3>
                    <button className="mt-4 px-6 py-2 bg-red-600 text-white text-lg rounded-md">
                        start now
                    </button>
                    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
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

                    <div className="mt-12 flex justify-center overflow-hidden h-32">
                        {products.map((product, index) => (
                            <div key={index} className="flex-shrink-0 mx-4">
                                <Image
                                    src={product}
                                    alt={`Product ${index + 1}`}
                                    width={125}
                                    height={200}
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
}
