import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/button";

const CategoryDropdown = () => {

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const categories = [
    {
      name: "Medicines",
      subcategories: ["Pain Relief", "Allergy", "Cold & Flu", "Digestive Health"],
    },
    {
      name: "Personal Care",
      subcategories: ["Skin Care", "Hair Care", "Oral Care"],
    },
    {
      name: "Baby Products",
      subcategories: ["Diapers", "Lotions", "Baby Food"],
    },
  ];

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >

      <Button variant="" className="cursor-pointer font-medium flex items-center gap-1 px-3 py-2 bg-gray-100 hover:bg-gray-200 transition rounded-md text-sm md:text-base">
        Shop By Category
        <svg
          className={`w-4 h-4 transform transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </Button>

      {isOpen && (
        <div
          className="cursor-pointer absolute left-0 w-56 bg-white shadow-lg rounded-lg border border-gray-100 transition-all duration-300 ease-in-out animate-fadeIn z-20"
        >
          {categories.map((cat, index) => (
            <div key={index} className="group">
              <div onClick={() => navigate(`/categories/${cat.name}`)} className="px-4 py-2 font-medium text-gray-700 hover:bg-gray-50">
                {cat.name}
              </div>
              <div className="hidden group-hover:block absolute left-full top-0 w-48 bg-white shadow-lg rounded-lg transition-all duration-300 ease-in-out">
                {cat.subcategories.map((sub, i) => (
                  <div
                    onClick={() => navigate(`/categories/${cat.name}/${sub}`)}
                    key={i}
                    className="px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-green-600 cursor-pointer"
                  >
                    {sub}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};

export default CategoryDropdown;
