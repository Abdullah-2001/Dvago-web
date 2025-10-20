import Slider from 'react-slick';

const testimonials = [
    {
        name: "Cloud Solutions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du"
    },
    {
        name: "Cloud Solutions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du"
    },
    {
        name: "Cloud Solutions",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus nisl libero, sollicitudin vel tempor sed, ullamcorper quis diam. Ut eros elit, luctus eu pulvinar a, lacinia a justo. Sed felis sapien, rutrum ut tempus quis, elementum eu du"
    },
];

function SliderComp() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        customPaging: (i) => <div className="w-10 h-1 rounded-full bg-[#ef8c91]" />,
        dotsClass: "slick-dots !bottom-0"
    };

    return (
        <div className="w-full">
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="px-2">
                        <div className="bg-white rounded-lg p-8 md:p-10 shadow-2xl">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                                {testimonial.name}
                            </h3>
                            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                                {testimonial.text}
                            </p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderComp;