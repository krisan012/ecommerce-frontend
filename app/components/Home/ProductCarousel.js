import Slider from 'react-slick';
import Image from 'next/image';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import './product.css';

const Carousel = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        autoplay: true,
        autoplaySpeed: 1500,
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
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
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
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    centerPadding: '0',
                    autoplay: true,
                    autoplaySpeed: 3000,
                    pauseOnHover: true,
                }
            }
        ]
    };

    const cards = [
        {
            image: '/products/product1.png',
            title: 'Erectile Dysfunction',
            buttonText: 'Get Started',
        },
        {
            image: '/products/product2.png',
            title: 'Men’s Hair Loss',
            buttonText: 'Get Started',
        },
        {
            image: '/products/product3.png',
            title: 'Testosterone',
            buttonText: 'Get Started',
        },
        {
            image: '/products/product4.png',
            title: 'Weight Loss',
            buttonText: 'Get Started',
        },
        {
            image: '/products/product5.png',
            title: 'Weight Loss',
            buttonText: 'Get Started',
        },
        {
            image: '/products/product6.png',
            title: 'Weight Loss',
            buttonText: 'Get Started',
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleAfterChange = (index) => {
        setCurrentSlide(index);
    };

    const buzzAnimation = {
        scale: [1, 1.1, 1.1, 1, 1],
        rotate: [0, 0, 3, -3, 0],
        transition: {
            duration: 0.3,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
        }
    };

    return (
        <div className="container mx-auto py-8">
            <Slider {...settings} afterChange={handleAfterChange}>
                {cards.map((card, index) => (
                    <div key={index} className="px-4 py-32 flex justify-center data-product-carousel">
                        <div className="relative w-full m-auto">
                            <motion.div
                                key={index}
                                animate={currentSlide === index ? buzzAnimation : { scale: 1 }}
                                transition={{duration: 0.2}}
                            >
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={200}
                                    height={200}
                                    className="object-contain"
                                    style={{margin: "0 auto"}}
                                />
                            </motion.div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
