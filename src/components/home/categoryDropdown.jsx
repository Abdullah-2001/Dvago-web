import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button";
import { categories } from "../../mock/mockData";
import Product from "./product";

const CategoryDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Button
        variant=""
        className="cursor-pointer font-medium flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-md text-sm md:text-base"
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
        <div className="absolute left-0 w-56 bg-white shadow-lg rounded-lg border border-gray-100 transition-all duration-300 ease-in-out animate-fadeIn z-30">
          {categories.map((cat, index) => (
            <div key={index} className="group relative">
              {/* Main Category */}
              <div
                onClick={() => navigate(`/categories/${cat.name}`)}
                className="rounded-l-md ml-2 px-4 py-3 font-medium text-gray-700 hover:text-white hover:bg-[#74BD43] cursor-pointer"
              >
                {cat.name}
              </div>
              {/* Subcategories (level 2) */}
              {cat.subcategories && (
                <div className="hidden group-hover:block absolute left-full top-0 w-56 bg-white shadow-lg rounded-lg transition-all duration-200 ease-in-out z-20">
                  {cat.subcategories.map((sub, i) => (
                    <div key={i} className="relative group/sub">
                      <div
                        onClick={() => navigate(`/categories/${cat.name}/${sub.name}`)}
                        className="rounded-l-md ml-2 px-4 py-3 font-medium text-gray-700 hover:text-white hover:bg-[#74BD43] cursor-pointer flex justify-between items-center"
                      >
                        {sub.name}
                      </div>
                      {/* Children (level 3) - show only on sub hover */}
                      {sub.children && (
                        <div className="hidden group-hover/sub:block absolute left-full top-0 w-[420px] bg-white shadow-lg rounded-xl transition-all duration-200 ease-in-out z-10 max-h-[400px] overflow-y-auto p-3">
                          <div className="grid grid-cols-2 gap-3">
                            {sub.children.map((product, index) => <Product productType="category" key={index} product={product} />)}
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