import Slider from 'react-slick';
import Image from 'next/image';

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        {
            image: '/images/img.png',
            title: 'Erectile Dysfunction',
            buttonText: 'Get Started',
        },
        {
            image: '/images/img_1.png',
            title: 'Men’s Hair Loss',
            buttonText: 'Get Started',
        },
        {
            image: '/images/img_2.png',
            title: 'Testosterone',
            buttonText: 'Get Started',
        },,
        {
            image: '/images/img_3.png',
            title: 'Weight Loss',
            buttonText: 'Get Started',
        },,
        {
            image: '/images/img_4.png',
            title: 'Custom Rx',
            buttonText: 'Get Started',
        }
    ];

    return (
        <div className="container mx-auto py-8">
            <Slider {...settings}>
                {cards.map((card, index) => (
                    <div key={index} className="px-4">
                        <div className="relative">
                            <Image
                                src={card.image}
                                alt={card.title}
                                width={400}
                                height={600}
                                className="rounded-lg object-cover"
                            />
                            <div className="absolute bottom-4 left-4">
                                <h2 className="text-white text-lg font-bold">{card.title}</h2>
                                <button className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md">
                                    {card.buttonText}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;
