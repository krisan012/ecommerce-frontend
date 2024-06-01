import Image from 'next/image';

export default function SimpleAffordableSection() {
    const products = [
        {
            image: '/images/testosterone.png', // Replace with your image path
            title: 'an efficient testosterone-boosting medication',
            description:
                'Enclomiphene, a nonsteroidal SERM (selective estrogen receptor modulator), contributes to elevating testosterone levels without the usual side effects linked to testosterone replacement therapy and anabolic steroids.',
            buttonText: 'Get Started',
            bgColor: 'bg-yellow-100',
        },
        {
            image: '/images/shred-protocol.png', // Replace with your image path
            title: 'top-notch weight loss medication',
            description:
                'The Shred Compound combines Acarbose, Orlistat, and Naltrexone in an all-encompassing treatment designed to markedly enhance weight loss. This is accomplished by regulating blood glucose, reducing fat absorption, and curbing appetite.',
            buttonText: 'Get Started',
            bgColor: 'bg-yellow-200',
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto py-8">
                <h2 className="text-4xl font-bold text-gray-900">Simple, Convenient, Affordable</h2>

                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {products.map((product, index) => (
                        <div key={index} className={`p-8 rounded-lg flex flex-col items-center`}>
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={900}
                                height={300}
                                className="object-contain rounded-lg"
                            />
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-gray-900">{product.title}</h3>
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
