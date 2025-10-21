import Badge from "../ui/badge";
import SvgIcon from "../../assets/icons/svg/icons";
import { colors } from "../../utils/colors";
import { size } from '../../utils/responsiveFonts'
import useActions from "../../hooks/useActions";

const Product = ({ productType = "", product }) => {
    const { handleAddToCart } = useActions();
    return (
        <div className="mx-2">
            {productType === "category" ? (
                <div className="cursor-pointer flex items-center gap-3 bg-white border border-gray-200 rounded-xl p-3 hover:shadow-md transition-all duration-200">
                    <div className="w-12 h-12 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-sm font-medium text-gray-800 truncate w-20">
                            {product.name}
                        </h3>
                        <p className="text-xs text-gray-500 truncate w-20">
                            {product.description}
                        </p>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow duration-200">
                    <div className="relative border-[1px] border-gray-100 rounded-2xl">
                        <div className="absolute top-2 left-2 bg-[#FFDA0A] rounded-full w-10 h-10 p-7 flex justify-center items-center">
                            <div className="flex flex-col leading-4">
                                <p className='font-bold' style={{ fontSize: size.paragraph }}>20%</p>
                                <p className='font-bold' style={{ fontSize: size.paragraph }}>OFF</p>
                            </div>
                        </div>
                        <img className="rounded-2xl" src={product.image} alt="" />
                        <Badge
                            text="4.5"
                            variant="rating"
                            size="md"
                            className="justify-center absolute -bottom-3 left-3"
                            leftIcon={<SvgIcon name='star' size={20} color={colors.white} />}
                        />
                        <div onClick={() => handleAddToCart(product)} className="cursor-pointer absolute -bottom-4.5 right-2 border-1 bg-white border-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
                            <SvgIcon name='cart' size={20} color={colors.cherry} />
                        </div>
                        <div className="cursor-pointer absolute -bottom-4.5 right-15 border-1 bg-white border-gray-300 rounded-full w-10 h-10 flex justify-center items-center">
                            <SvgIcon name='dvago' size={20} color={colors.cherry} />
                        </div>
                    </div>
                    <div className="product-header mb-4 mt-8">
                        <h3 style={{ fontSize: size.paragraph, color: colors.darkGrey }} className='font-semiBold text-gray-800'>
                            {product.name}
                        </h3>
                        <p style={{ fontSize: size.paragraph, color: colors.darkGrey }} className='font-semiBold text-gray-800'>
                            {product.description}
                        </p>
                    </div>
                    <div className="product-price flex gap-2">
                        <p className="font-semiBold" style={{ color: colors.darkGrey2, fontSize: size.paragraph, color: colors.primary }}>
                            ${product.discountedPrice}
                        </p>
                        <del className={`font-medium`} style={{ color: colors.lightGrey, fontSize: size.paragraph }}>
                            ${product.originalPrice}
                        </del>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Product;