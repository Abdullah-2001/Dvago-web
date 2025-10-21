import CategoryDropdown from "../home/categoryDropdown";
import { colors } from "../../utils/colors";
import logo from "../../assets/icons/dvago-logo.svg";
import heartIcon from "../../assets/icons/dvago.svg";
import Button from "../ui/button";
import SvgIcon from "../../assets/icons/svg/icons";
import Input from "../ui/input";
import Categories from "../home/categories";
import { mainCategories } from "../../mock/mockData";
import useNavigator from "../../hooks/useNavigator";
import Badge from "../ui/badge";
import { useSelector } from "react-redux";

const Navbar = ({ toggleSidebar }) => {

    const { goHome } = useNavigator()
    const cartItems = useSelector((state) => state.cart)

    return (
        <header className="w-full">
            {/* Main Header */}
            <div className="bg-[#7cc043] h-16 md:h-24 flex items-center justify-between px-4 md:px-16 relative py-2">
                {/* Logo Section - Mobile & Desktop */}
                <div className="md:absolute md:left-0 md:top-0 flex h-12 md:h-full w-auto md:w-64 bg-white rounded-r-full items-center justify-center md:justify-end md:pr-10 z-10">
                    <img
                        style={{ width: "120px", height: "auto" }}
                        className="md:w-150px cursor-pointer"
                        src={logo}
                        alt="logo"
                        onClick={goHome}
                    />
                </div>
                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button className="text-white p-2">
                        <SvgIcon name='menu' size={24} color={colors.white} />
                    </button>
                </div>
                {/* Search & Location Section */}
                <div className="hidden md:flex flex-col md:flex-row items-center gap-4 md:ml-64 flex-1 justify-center max-w-2xl">
                    <div className="hidden lg:flex items-center gap-2 text-white text-sm font-medium">
                        <SvgIcon name='location' size={24} color={colors.white} />
                        <span className="w-32">Select your nearest store</span>
                    </div>
                    <div className="relative flex-1 max-w-md">
                        <Input
                            type="text"
                            placeholder="Search for “Nutrition & Supplements”"
                            className="font-semiBold flex items-center bg-white border-1 border-white rounded-full pl-14 pr-10 py-2 w-full"
                            iconPosition="left"
                            variant="gradient"
                            icon={
                                <div className="bg-[#FFEA01] rounded-full p-1.5">
                                    <SvgIcon name='search' size={20} color={colors.darkGrey} />
                                </div>
                            }
                        />
                    </div>
                </div>
                {/* Right Section */}
                <div className="hidden md:flex items-center gap-4 ml-2">
                    <Button
                        className={`font-semiBold py-[15px] px-[15px] h-10 rounded-full text-[14px]`}
                        variant="secondary"
                        bg={colors.secondary}
                    >Instant Order</Button>
                    <div className="flex items-center gap-3 relative">
                        <SvgIcon className="cursor-pointer" name='user' size={24} color={colors.white} strokeWidth={2} />
                        <img src={heartIcon} alt="wishlist" className="w-5 h-5 cursor-pointer" color={colors.white} strokeWidth={2} />
                        <SvgIcon
                            className="cursor-pointer"
                            name='cart'
                            size={24}
                            color={colors.white}
                            strokeWidth={2}
                            onClick={toggleSidebar}
                        />
                        <Badge
                            text={cartItems?.length || 0}
                            variant="secondary"
                            size="sm"
                            className="absolute -top-3 -right-3 rounded-full w-6 h-6"
                        />
                    </div>
                </div>
                {/* Mobile Right Icons */}
                <div className="flex md:hidden items-center gap-4">
                    <SvgIcon name='search' className="cursor-pointer" size={20} color={colors.white} />
                    <SvgIcon name='cart' className="cursor-pointer" onClick={toggleSidebar} size={20} color={colors.white} />
                </div>
            </div>
            {/* Mobile Search Bar */}
            <div className="md:hidden bg-[#7cc043] px-4 pb-3">
                <div className="relative">
                    <Input
                        type="text"
                        placeholder="Search for products"
                        className="font-semiBold flex items-center bg-white border-1 border-white rounded-full pl-12 pr-4 py-3 w-full text-sm"
                        iconPosition="left"
                        variant="gradient"
                        icon={
                            <div className="bg-[#FFEA01] rounded-full p-1.5">
                                <SvgIcon name='search' size={18} color={colors.darkGrey} />
                            </div>
                        }
                    />
                </div>
                <div className="flex items-center justify-center gap-2 text-white text-xs font-medium mt-2">
                    <SvgIcon name='location' size={16} color={colors.white} />
                    <span>Select your nearest store</span>
                </div>
            </div>
            {/* CATEGORIES */}
            <nav className="flex items-center justify-center bg-[#F0F0F0] shadow border-t border-gray-200">
                <CategoryDropdown />
                <Categories mainCategories={mainCategories} />
            </nav>
        </header>
    );
};

export default Navbar;