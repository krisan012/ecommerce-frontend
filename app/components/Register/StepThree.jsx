export default function StepThree({ nextStep, prevStep }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">What is your Email Address?</h2>
            <p className="text-gray-600 mb-8">Please enter your email.</p>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">Email</label>
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <button
                    type="button"
                    onClick={prevStep}
                    className="w-full py-2 bg-gray-300 text-gray-700 rounded mt-4"
                >
                    Back
                </button>
                <button
                    type="button"
                    onClick={nextStep}
                    className="w-full py-2 bg-blue-800 text-white rounded mt-4"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}
