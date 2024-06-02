export default function StepFive({prevStep}) {
    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Now, create your password</h2>
            <p className="text-gray-600 mb-8">To secure your account.</p>
            <form>
                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-3">
                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div className="mt-2">
                            <input type="password" name="password" id="password" autoComplete="given-name"
                                   className="w-full p-2 border border-gray-300 rounded mt-1"/>
                        </div>
                    </div>

                    <div className="sm:col-span-3">
                        <label htmlFor="confirm_password" className="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
                        <div className="mt-2">
                            <input type="password" name="confirm_password" id="confirm_password" autoComplete="family-name"
                                   className="w-full p-2 border border-gray-300 rounded mt-1"/>
                        </div>
                    </div>
                </div>

                <div className="mb-4">
                    <input type="checkbox" className="mr-2"/>
                    <label className="text-gray-700">
                        I agree to the{' '}
                        <a href="/terms" className="text-blue-800 underline">
                            terms and conditions
                        </a>
                        ,{' '}
                        <a href="/privacy" className="text-blue-800 underline">
                            privacy policy
                        </a>{' '}
                        and consent to{' '}
                        <a href="/telehealth" className="text-blue-800 underline">
                            telehealth policy
                        </a>
                    </label>
                </div>
                <button
                    type="button"
                    onClick={prevStep}
                    className="w-full py-2 bg-gray-300 text-gray-700 rounded mt-4"
                >
                    Back
                </button>
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-800 text-white rounded mt-4"
                >
                    Continue
                </button>
            </form>
        </div>
    );
}
