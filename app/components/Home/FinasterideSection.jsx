import Image from 'next/image';

export default function FinasterideSection() {
    return (
        <div className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-gray-900">Real Solutions, Made Simple</h2>
                <p className="mt-4 text-xl text-gray-700">
                    Uplink Health Rx provides high-quality medication for the at-home treatment of androgenic alopecia,
                    commonly known as male-pattern baldness.
                </p>

                <div className="mt-12 flex flex-col items-center">
                    <Image
                        src="/images/finasteride.png" // Replace with your image path
                        alt="Finasteride"
                        width={1200}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                    <div className="mt-8 max-w-7xl text-left">
                        <h3 className="text-2xl font-bold text-gray-900">Finasteride</h3>
                        <p className="mt-4 text-gray-700">
                            Finasteride is an FDA-approved pharmacological treatment designed to treat androgenic alopecia, often referred to as male-pattern hair loss. Its mechanism involves the inhibition of the androgen DHT, effectively slowing down hair loss and fostering the growth of strong and healthy hair.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-red-600 text-white rounded-md">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
