import Slider from "react-slick";
import banner from "../../assets/images/banner.png"; // your uploaded image

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 700,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        customPaging: () => <div className="w-2 h-2 rounded-full bg-[#2e7d32] opacity-50 hover:opacity-100 transition-all"></div>,
        dotsClass: "slick-dots custom-dots",
    };

    const banners = [
        { banner: banner },
        { banner: banner },
        { banner: banner },
        { banner: banner },
        { banner: banner },
    ];

    return (
        <div className="relative w-full">
            <Slider {...settings}>
                {banners.map((banner, index) => (
                    <div key={index} className="relative">
                        <img
                            src={banner.banner}
                            alt={`Banner ${index + 1}`}
                            className="w-full h-[420px] object-cover"
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default BannerSlider;
