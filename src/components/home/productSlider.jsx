import Slider from 'react-slick';
import Product from './product';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../ui/button';
import { colors } from '../../utils/colors';

const ProductSlider = ({ products }) => {

  // Custom arrow components
  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow next-arrow`}
        style={{ ...style, display: 'block', right: '-25px' }}
        onClick={onClick}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" />
        </svg>
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={`${className} custom-arrow prev-arrow`}
        style={{ ...style, display: 'block', left: '-25px' }}
        onClick={onClick}
      >
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className="product-slider-container max-w-6xl mx-auto px-4 py-8">
      <div className="slider-wrapper relative">
        <Slider {...settings}>
          {products.map((product, index) => <Product key={index} product={product} />)}
        </Slider>
      </div>
      <div className="text-center mt-8">
        <Button className={`font-semiBold py-[15px] px-[15px] h-10 rounded-full text-[14px]`} variant="secondary" bg={colors.secondary} text="View All Products" />
      </div>
    </div>
  );
};

export default ProductSlider;