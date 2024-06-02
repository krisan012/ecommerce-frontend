export default function TestimonialsSection() {
    const testimonials = [
        {
            id: 1,
            quote: "I’ve been looking for a service that I could trust, and only Uplink Health made perfect sense for me. The savings, plus the convenience makes all the difference!",
            name: "Rick G.",
            status: "verified customer",
            image: "/images/person1.png",
        },
        {
            id: 2,
            quote: "Uplink Health’s generic Viagra has transformed my intimate experiences. The results are impressive, and I couldn’t be more satisfied.",
            name: "Will E.",
            status: "verified customer",
            image: "/images/person1.png",
        },
        {
            id: 3,
            quote: "It only took me a few minutes to get my order in and fill out the forms. Now, I don’t even have to worry about getting my refills done!",
            name: "Jack W.",
            status: "verified customer",
            image: "/images/person1.png",
        },
    ];

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-gray-900">Here’s what our clients say about us</h2>
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                            <div className="text-red-600 text-7xl mb-4">“</div>
                            <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                            <div className="flex items-center justify-center">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full mr-4"
                                />
                                <div className="text-left">
                                    <p className="font-bold text-gray-900">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.status}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
