import Slider from "react-slick";
import Product from "./product";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Button from "../ui/button";
import { colors } from "../../utils/colors";
import Actions from "../../hooks/useActions";

const ProductSlider = ({ products }) => {


  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow next-arrow" onClick={onClick}>
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
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="custom-arrow prev-arrow" onClick={onClick}>
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
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="product-slider-container max-w-7xl mx-auto px-4 py-8 relative">
      <Slider {...settings}>
        {products.map((product, index) => <Product key={index} product={product} />)}
      </Slider>
      <div className="text-center mt-8">
        <Button
          className="font-semiBold py-[15px] px-[15px] h-10 rounded-full text-[14px]"
          variant="secondary"
          bg={colors.secondary}
        >View All Products</Button>
      </div>
    </div>
  );
};

export default ProductSlider;
