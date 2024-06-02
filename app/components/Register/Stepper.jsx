export default function Stepper({ currentStep, steps }) {
    return (
        <div className="flex justify-center mb-8">
            {Array.from({ length: steps }).map((_, index) => (
                <div
                    key={index}
                    className={`w-2.5 h-2.5 rounded-full mx-1 ${
                        index <= currentStep ? 'bg-red-500' : 'bg-gray-300'
                    } ${
                        index === currentStep ? 'stepper active' : ''
                    }`}
                ></div>
            ))}
        </div>
    );
}
