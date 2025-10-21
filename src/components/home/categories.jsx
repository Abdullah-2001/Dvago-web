import { useState } from "react";
import SvgIcon from "../../assets/icons/svg/icons";
import Button from "../ui/button";
import { size } from "../../utils/responsiveFonts";
import { colors } from "../../utils/colors";

const Categories = ({ mainCategories }) => {

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className="flex justify-between items-center sm:hidden px-4 py-2">
                <h2 className="font-semibold" style={{ fontSize: size.paragraph }}>Categories</h2>
                <Button variant="" onClick={() => setOpen(!open)}>
                    {open ? <SvgIcon name="hamburgerClose" /> : <SvgIcon name="hamburger" />}
                </Button>
            </div>
            <div
                className={`flex flex-wrap overflow-x-auto no-scrollbar transition-all duration-300 ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 sm:max-h-none sm:opacity-100"
                    } sm:flex sm:flex-wrap sm:opacity-100 sm:max-h-none`}
            >
                {mainCategories.map((category, index) => (
                    <p
                        key={index}
                        className="font-medium cursor-pointer px-3 py-2 sm:px-6 sm:py-4 whitespace-nowrap hover:text-green-600 duration-200 w-full sm:w-auto text-center sm:text-left"
                        style={{ fontSize: size.paragraph, color: colors.darkGrey2 }}
                    >
                        {category}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Categories;