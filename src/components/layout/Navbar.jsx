import CategoryDropdown from "../home/categoryDropdown";
import { colors } from "../../utils/colors";
import logo from "../../assets/icons/dvago-logo.svg";
import heartIcon from "../../assets/icons/dvago.svg";
import Button from "../ui/button";
import SvgIcon from "../../assets/icons/svg/icons";
import Input from "../ui/input";
import Categories from "../home/categories";
import { mainCategories } from "../../mock/mockData";

const Navbar = () => {
    return (
        <header className="w-full">
            {/* Main Header */}
            <div className="bg-[#7cc043] h-16 md:h-24 flex items-center justify-between px-4 md:px-16 relative py-2">

                {/* Logo Section - Mobile & Desktop */}
                <div className="md:absolute md:left-0 md:top-0 flex h-12 md:h-full w-auto md:w-64 bg-white rounded-r-full items-center justify-center md:justify-end md:pr-10 z-10">
                    <img
                        style={{ width: "120px", height: "auto" }}
                        className="md:w-150px"
                        src={logo}
                        alt="logo"
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
                        text="Instant Order"
                    />
                    <div className="flex items-center gap-3">
                        <SvgIcon name='user' size={24} color={colors.white} strokeWidth={2} />
                        <img src={heartIcon} alt="wishlist" className="w-5 h-5 cursor-pointer" color={colors.white} strokeWidth={2} />
                        <SvgIcon name='cart' size={24} color={colors.white} strokeWidth={2} />
                    </div>
                </div>

                {/* Mobile Right Icons */}
                <div className="flex md:hidden items-center gap-4">
                    <SvgIcon name='search' size={20} color={colors.white} />
                    <SvgIcon name='cart' size={20} color={colors.white} />
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

            {/* Mobile Bottom Navigation */}
            {/* <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around items-center py-2 z-50">
                <div className="flex flex-col items-center text-xs text-gray-600">
                    <SvgIcon name='home' size={20} color={colors.darkGrey} />
                    <span>Home</span>
                </div>
                <div className="flex flex-col items-center text-xs text-gray-600">
                    <SvgIcon name='categories' size={20} color={colors.darkGrey} />
                    <span>Categories</span>
                </div>
                <div className="flex flex-col items-center text-xs text-gray-600">
                    <SvgIcon name='user' size={20} color={colors.darkGrey} />
                    <span>Account</span>
                </div>
                <div className="flex flex-col items-center text-xs text-gray-600">
                    <img src={heartIcon} alt="wishlist" className="w-5 h-5" />
                    <span>Wishlist</span>
                </div>
                <div className="flex flex-col items-center text-xs text-gray-600">
                    <SvgIcon name='cart' size={20} color={colors.darkGrey} />
                    <span>Cart</span>
                </div>
            </div> */}
        </header>
    );
};

export default Navbar;