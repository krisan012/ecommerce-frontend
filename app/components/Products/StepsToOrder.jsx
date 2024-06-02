export default function StepsToOrder() {
    const steps = [
        {
            number: 1,
            title: 'Select Your Desired Treatment Plan',
            description:
                'Choose from our available treatment plans based on your purpose and budget',
        },
        {
            number: 2,
            title: 'Answer a Quick Health Assessment Form',
            description:
                'Your answers will be reviewed by a qualified, US-licensed healthcare professional to determine the right treatment options for you.',
        },
        {
            number: 3,
            title: 'Complete Your Order',
            description:
                'If approved, you may proceed with finalizing your order! Once completed, you can expect your medication to arrive within 3-7 business days.',
        },
    ];

    return (
        <div className="bg-white py-16">
            <div className="container mx-auto py-8">
                <h2 className="text-4xl font-bold text-gray-900 text-center">3 steps to order</h2>
                <div className="mt-12 space-y-8">
                    {steps.map((step) => (
                        <div key={step.number} className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-800 text-white">
                                    <span className="text-lg font-bold">{step.number}</span>
                                </div>
                            </div>
                            <div className="mt-4 md:mt-0 md:flex-1 bg-gray-200 rounded-3xl flex items-center py-4">
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
