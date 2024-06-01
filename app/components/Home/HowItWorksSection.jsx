export default function HowItWorksSection() {
    const steps = [
        {
            number: 1,
            title: 'Select Your Treatment',
            description:
                'Explore our diverse treatment options to discover the simplest, most convenient, and cost-effective solutions for typical men’s health issues.',
        },
        {
            number: 2,
            title: 'Complete Online Health Evaluation',
            description:
                'Fill out a brief 3-minute health questionnaire, which will be reviewed by a US-licensed physician. This evaluation aids in determining the most appropriate Total Male Rx treatments for your needs.',
        },
        {
            number: 3,
            title: 'Finalize Your Order',
            description:
                'Upon approval, proceed to our secure checkout and verification process. Once processed, your order will be discreetly shipped to the address you provided. It’s as simple as that!',
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto py-8">
                <h2 className="text-4xl font-bold text-gray-900">Here’s how it works</h2>
                <div className="mt-12 space-y-8">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-800 text-white">
                                    <span className="text-lg font-bold">{step.number}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 md:flex-1 bg-gray-200 rounded-3xl flex items-center">
                                <h3 className="text-xl ml-4 font-bold text-gray-900 flex-auto w-32">{step.title}</h3>
                                <p className="mt-2 text-gray-700 flex-auto w-64">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
