export default function HeroSection() {
    return (
        <div className="bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900">Men’s health made simple</h1>
                <p className="mt-4 text-lg text-gray-600">
                    Uplink Health is committed to delivering top-quality prescription medication without the
                    expensive cost of traditional healthcare channels
                </p>
                <div className="mt-6 flex justify-center space-x-4">
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h3a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-700">100% Online Platform</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h3a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-700">US-based pharmacy</span>
                    </div>
                    <div className="flex items-center">
                        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 001 1h3a1 1 0 100-2h-2V7z" clipRule="evenodd" />
                        </svg>
                        <span className="ml-2 text-gray-700">US-licensed healthcare professional</span>
                    </div>
                </div>
                <div className="mt-10 max-w-md mx-auto">
                    <h2 className="text-xl font-semibold text-gray-800">Enter Your Email</h2>
                    <p className="mt-2 text-sm text-gray-600">and save $35 on your first order</p>
                    <form className="mt-4">
                        <input
                            type="email"
                            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="your email"
                        />
                        <button
                            type="submit"
                            className="w-full mt-4 py-3 bg-red-600 text-white text-lg rounded-3xl shadow-sm"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
