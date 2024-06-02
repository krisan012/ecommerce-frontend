import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './ProductCarousel.module.css'; // Import custom CSS module

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    afterChange: current => console.log(`Current slide is: ${current}`),
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                centerMode: true,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2,
                centerMode: true,
                centerPadding: '0',
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '0',
            }
        }
    ]
};

const ProductCarouselOld = () => {
    return (
        <div className="bg-gradient-to-b from-white to-blue-100 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl font-bold text-gray-900">
                    Men’s Health Made Simple.
                </h1>
                <p className="mt-4 text-xl text-gray-700">
                    Your #1 Portal for Men’s Prescription Medication
                </p>
                    <a className="mt-8 inline-block bg-red-600 text-white text-lg font-semibold py-3 px-8 rounded-md shadow-md hover:bg-red-700">
                        FIND MY TREATMENT
                    </a>

                <div className="mt-16">
                    <Slider {...settings}>
                        <div>
                            <Image
                                src="/products/product1.png" // Replace with your image paths
                                alt="Extreme RX"
                                width={150}
                                height={200}
                                className="object-contain"
                            />
                            <p className="mt-4 text-gray-700 font-semibold">EXTREME RX</p>
                        </div>
                        <div>
                            <Image
                                src="/products/product2.png" // Replace with your image paths
                                alt="Shred Protocol"
                                width={200}
                                height={250}
                                className="object-contain"
                            />
                            <p className="mt-4 text-gray-700 font-semibold">SHRED PROTOCOL</p>
                        </div>
                        <div>
                            <Image
                                src="/products/product3.png" // Replace with your image paths
                                alt="Testosterone"
                                width={150}
                                height={200}
                                className="object-contain"
                            />
                            <p className="mt-4 text-gray-700 font-semibold">TESTOSTERONE</p>
                        </div>
                        {/* Add more items here */}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default ProductCarouselOld;
