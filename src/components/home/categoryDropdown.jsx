import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button";
import { categories } from "../../mock/mockData";
import Product from "./product";
import { size } from "../../utils/responsiveFonts";

const CategoryDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);
  const [openSubCategory, setOpenSubCategory] = useState(null);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  return (
    
    <div
      className="relative"
      onMouseEnter={() => window.innerWidth >= 768 && setIsOpen(true)}
      onMouseLeave={() => window.innerWidth >= 768 && setIsOpen(false)}
    >

      <Button
        variant=""
        onClick={toggleDropdown}
        className="cursor-pointer font-medium flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-md"
        style={{ fontSize: size.paragraphMedium }}
      >
        Shop By Category
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""
            }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </Button>

      {isOpen && (
        <div
          className="absolute left-0 md:w-56 w-[90vw] max-h-[80vh] bg-white shadow-lg rounded-lg border border-gray-100 
                     transition-all duration-300 ease-in-out animate-fadeIn z-30 
                     md:overflow-visible overflow-y-auto"
        >
          {categories.map((cat, index) => (
            <div key={index} className="group relative">
              <div
                onClick={() => navigate(`/categories/${cat.name}`)}
                className="flex justify-between items-center ml-2 px-4 py-3 font-medium text-gray-700 hover:text-white hover:bg-[#74BD43] rounded-md cursor-pointer">
                <span
                  className="flex-1"
                  style={{ fontSize: size.paragraphMedium }}
                >
                  {cat.name}
                </span>

                {cat.subcategories && (
                  <svg
                    onClick={(e) => {
                      e.stopPropagation(); // prevent triggering navigation
                      setOpenCategory(openCategory === index ? null : index);
                    }}
                    className={`w-4 h-4 ml-2 transition-transform md:hidden ${openCategory === index ? "rotate-180" : ""
                      }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </div>

              {(window.innerWidth >= 768 ? true : openCategory === index) &&
                cat.subcategories && (
                  <div
                    className={`${window.innerWidth >= 768
                      ? "hidden group-hover:block absolute left-full top-0"
                      : "block"
                      } w-full md:w-56 bg-white shadow-lg rounded-lg transition-all duration-200 ease-in-out z-20`}
                  >
                    {cat.subcategories.map((sub, i) => (
                      <div key={i} className="relative group/sub">
                        <div onClick={() =>
                              navigate(`/categories/${cat.name}/${sub.name}`)
                            } className="flex justify-between items-center ml-2 px-4 py-3 font-medium text-gray-700 hover:text-white hover:bg-[#74BD43] rounded-md cursor-pointer">
                          <span
                            
                            className="flex-1"
                            style={{ fontSize: size.paragraphMedium }}

                          >
                            {sub.name}
                          </span>

                          {/* Arrow for mobile */}
                          {sub.children && (
                            <svg
                              onClick={(e) => {
                                e.stopPropagation();
                                setOpenSubCategory(
                                  openSubCategory === `${index}-${i}`
                                    ? null
                                    : `${index}-${i}`
                                );
                              }}
                              className={`w-4 h-4 ml-2 transition-transform md:hidden ${openSubCategory === `${index}-${i}`
                                ? "rotate-180"
                                : ""
                                }`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19 9l-7 7-7-7"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Level 3 - Products */}
                        {(window.innerWidth >= 768
                          ? true
                          : openSubCategory === `${index}-${i}`) &&
                          sub.children && (
                            <div
                              className={`${window.innerWidth >= 768
                                ? "hidden group-hover/sub:block absolute left-full top-0 w-[420px]"
                                : "block w-full"
                                } bg-white shadow-lg rounded-xl transition-all duration-200 ease-in-out z-10 max-h-[400px] overflow-y-auto p-3`}
                            >
                              <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
                                {sub.children.map((product, idx) => (
                                  <Product
                                    key={idx}
                                    productType="category"
                                    product={product}
                                  />
                                ))}
                              </div>
                            </div>
                          )}
                      </div>
                    ))}
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryDropdown;