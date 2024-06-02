export default function FAQSection() {
    const faqs = [
        {
            question: "Is genuine Viagra expensive",
            answer:
                "On average, a single 100mg Viagra pill in the United States can set you back about $70-85. When you add up all the expenses involved in getting Viagra in the traditional way, like doctor fees and other medical costs, the total monthly expenditure may soar beyond $400. Now, with Uplink Health, you can acquire Generic Viagra (Sildenafil Citrate) 90% cheaper than your local pharmacy with exact same safety, effectiveness, and potency.",
        },
        {
            question: "Is it possible to buy Viagra online?",
            answer:
                "Many fake Viagra pills are being sold online. This often happens on websites that don't check your health or have any reviews. But with Uplink Health, you can trust that you're getting FDA-approved ED medication made in the USA. It comes from a pharmacy in the United States and will be sent to you in a way that's private and discreet.",
        },
        {
            question: "What’s the difference between sildenafil and Viagra?",
            answer:
                "Viagra is a brand name for a medication developed by Pfizer. The active drug ingredient in Viagra is Sildenafil Citrate, which empowers it to address erectile dysfunction. Tablets containing the same dosage of sildenafil citrate possess identical potency and effectiveness as the brand-name version.",
        },
        {
            question: "Do you require insurance?",
            answer:
                "Uplink Health provides authentic ED medication approved by the FDA, with no extra charges for insurance or related fees. We've simplified every step to cut down on costs, making your ED treatments and medication both convenient and accessible. For continuous support with your ED needs, all Uplink Health customers enjoy around-the-clock access to US-licensed healthcare professionals at no extra cost!",
        },
    ];

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row">
                <div className="md:w-1/2 rounded-3xl" style={{ backgroundColor: '#5CECD3'}}>
                    <img
                        src="/images/generic-viagra.png"
                        alt="Generic Viagra"
                        className="rounded-lg mt-32"
                    />
                </div>
                <div className="md:w-1/2 p-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-6 bg-gray-200 py-5 px-5 rounded-3xl">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                {faq.question}
                            </h3>
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
