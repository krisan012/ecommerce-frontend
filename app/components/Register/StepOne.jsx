export default function StepOne({ nextStep }) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Let us know your First and Last name</h2>
            <p className="text-gray-600 mb-8">Let us know your name to provide more personalized treatment options.</p>
            <form>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="first_name"
                               className="block text-sm font-medium leading-6 text-gray-900">First Name</label>
                        <div className="mt-2">
                            <input type="text" name="first_name" id="first_name" autoComplete="given-name"
                                   className="w-full p-2 border border-gray-300 rounded mt-1"/>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="last_name" className="block text-sm font-medium leading-6 text-gray-900">
                            Last Name
                        </label>
                        <div className="mt-2">
                            <input type="text" name="last_name" id="last_name"
                                   autoComplete="family-name"
                                   className="w-full p-2 border border-gray-300 rounded mt-1"/>
                        </div>
                    </div>
                </div>

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
