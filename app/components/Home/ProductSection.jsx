import Image from 'next/image';

export default function ProductSection() {
    const products = [
        {
            image: '/products/product6.png', // Replace with your image path
            title: 'Extreme Rx',
            description:
                'Extreme Rx is a custom medication that incorporates enclomiphene, an advanced remedy designed to naturally elevate testosterone levels. This highly-specialized formulation is made to enhance strength, promote muscle growth, elevate libido, and positively impact mood.',
            buttonText: 'Get Started',
            bgColor: '#C4A91C',
        },
        {
            image: '/products/product9.png', // Replace with your image path
            title: 'Lightning Rx',
            description:
                'Lightning Rx is a specifically crafted troche medication incorporating three prominent active ingredients – Sildenafil, Tadalafil, and Oxytocin. Diverging from conventional ED medications requiring 45 minutes to an hour for efficacy, the Lightning Rx starts working in just 15 minutes and can maintain its effects for up to 36 hours.',
            buttonText: 'Get Started',
            bgColor: '#C5603C',
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className={`flex flex-col items-center`}>
                            <div style={{backgroundColor: `${product.bgColor}`}} className="rounded-3xl w-full flex justify-center">
                                <Image
                                    src={product.image}
                                    alt={product.title}
                                    width={300}
                                    height={300}
                                    className="object-contain"
                                    style={{padding: '75px 50px'}}
                                />
                            </div>

                            <div className="mt-8">
                                <h3 className="text-2xl font-bold text-gray-900">{product.title}</h3>
                                <p className="mt-4 text-gray-700">{product.description}</p>
                                <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
                                    {product.buttonText}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
