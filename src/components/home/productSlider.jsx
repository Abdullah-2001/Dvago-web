import Slider from "react-slick";
import Product from "./product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../ui/button";
import { colors } from "../../utils/colors";
import Actions from "../../hooks/useActions";

const ProductSlider = ({ products }) => {

  const NextArrow = ({ onClick }) => (
    <div
      className="custom-arrow next-arrow"
      onClick={onClick}
      style={{ right: 0 }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="custom-arrow prev-arrow"
      onClick={onClick}
      style={{ left: 0 }}
    >
      <svg
        width="34"
        height="34"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" />
      </svg>
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1366,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "10px", // prevent overflow
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows: false,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };

  return (
    <div className="product-slider-container w-full overflow-hidden px-2 py-8 relative">
      <div className="max-w-7xl mx-auto">
        <Slider {...settings}>
          {products.map((product, index) => (
            <div key={index} className="px-1">
              <Product product={product} />
            </div>
          ))}
        </Slider>
        <div className="text-center mt-8">
          <Button
            className="font-semibold py-[15px] px-[15px] h-10 rounded-full text-[14px]"
            variant="secondary"
            bg={colors.secondary}
          >
            View All Products
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
