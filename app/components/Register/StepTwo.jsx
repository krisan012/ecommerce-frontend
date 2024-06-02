export default function StepTwo({ nextStep, prevStep }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Which State do you live in?</h2>
            <p className="text-gray-600 mb-8">Let us know your state to see if your state qualifies for telehealth medication.</p>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700">State</label>
                    <select className="w-full p-2 border border-gray-300 rounded mt-1">
                        <option>Select State</option>
                        {/* Add your state options here */}
                    </select>
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
