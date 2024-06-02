import { useState, useEffect } from 'react';

export default function PromotionalSection() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date("2024-02-07") - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    return (
        <div className="relative py-12 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10 bg-cover bg-center rounded-3xl" style={{ backgroundImage: 'url(/images/promotion.png)' }}>
                <div className="md:w-1/2 p-4">
                    <h2 className="text-3xl font-bold text-white">Get Started Today</h2>
                    <ul className="mt-4 space-y-2 text-white">
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2">✔</span> 100% Online Platform
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2">✔</span> US-based pharmacy
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-600 mr-2">✔</span> US-licensed healthcare professional
                        </li>
                    </ul>
                    <button className="mt-6 px-6 py-3 bg-red-600 text-white rounded-3xl shadow-md">
                        Get Started For FREE
                    </button>

                    <div className="mt-6 bg-white p-4 rounded-3xl shadow-md text-center opacity-75">
                        <p className="text-gray-700">Order within</p>
                        <div className="text-2xl font-bold text-gray-900">
                            {timeLeft.hours}:{timeLeft.minutes}:{timeLeft.seconds}
                        </div>
                        <p className="text-gray-700">and get it by <strong>Feb 7, 2024</strong></p>
                    </div>
                </div>

            </div>
        </div>
    );
}
