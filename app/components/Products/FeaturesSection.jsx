export default function FeaturesSection() {
    const features = [
        {
            id: 1,
            color: "bg-blue-800",
            text: "100% online health platform",
        },
        {
            id: 2,
            color: "bg-red-600",
            text: "No in-person appointments required",
        },
        {
            id: 3,
            color: "bg-teal-400",
            text: "Safe and secure service",
        },
        {
            id: 4,
            color: "bg-cyan-500",
            text: "FDA-approved ED medication",
        },
        {
            id: 5,
            color: "bg-blue-500",
            text: "No hidden charges – pay only for your medication",
        },
        {
            id: 6,
            color: "bg-black",
            text: "100% money-back guarantee",
        },
    ];

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Why Choose Uplink Health?</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="flex flex-col items-center">
                            <div className={`w-12 h-12 ${feature.color} rounded-full mb-4`}></div>
                            <p className="text-gray-700">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
