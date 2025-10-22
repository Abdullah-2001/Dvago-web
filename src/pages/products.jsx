import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumbs from "../components/ui/breadcrumb";
import { categories } from "../mock/mockData";
import Product from "../components/home/product";
import Button from "../components/ui/button";

const Products = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const pathParts = location.pathname.split("/").filter(Boolean);
  const currentCategory = pathParts[1] ? decodeURIComponent(pathParts[1]) : null;
  const currentSub = pathParts[2] ? decodeURIComponent(pathParts[2]) : null;

  const breadcrumbItems = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    const isLast = index === pathParts.length - 1;
    return {
      label: decodeURIComponent(part),
      href: href,
      current: isLast,
    };
  });

  const fullBreadcrumbs = [{ label: "Home", href: "/" }, ...breadcrumbItems];

  useEffect(() => {
    const foundCategory = categories.find((cat) => cat.name.toLowerCase() === currentCategory?.toLowerCase());
    if (foundCategory) {
      setSelectedCategory(foundCategory);
      if (currentSub === null && foundCategory.subcategories?.length > 0) {
        const firstSub = foundCategory.subcategories[0];
        setSelectedSubCategory(firstSub);
        navigate(`/categories/${foundCategory.name}/${firstSub.name}`);
      } else {
        const foundSub = foundCategory.subcategories.find((s) => s.name.toLowerCase() === currentSub?.toLowerCase());
        setSelectedSubCategory(foundSub);
      }
    }
  }, [currentCategory, currentSub, navigate]);

  return (
    <div className="my-5 mx-5">
      <Breadcrumbs items={fullBreadcrumbs} />
      {selectedCategory ? (
        <div className="mt-6">
          <div className="flex flex-wrap gap-3 mb-6">
            {selectedCategory.subcategories.map((sub, i) => (
              <Button
                variant=""
                key={i}
                onClick={() => {
                  setSelectedSubCategory(sub);
                  navigate(`/categories/${selectedCategory.name}/${sub.name}`);
                }}
                className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 ${selectedSubCategory?.name === sub.name
                  ? "bg-green-600 text-white border-green-600"
                  : "bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  }`}
              >
                {sub.name}
              </Button>
            ))}
          </div>
          {selectedSubCategory?.children?.length ? (
            <div className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2 rounded-lg border border-gray-100">
              {selectedSubCategory.children.map((product) => <Product key={product.id} product={product} />)}
            </div>
          ) : (
            <p className="text-gray-500">No products available in this category.</p>
          )}
        </div>
      ) : (
        <p className="text-gray-500 mt-6">Category not found.</p>
      )}
    </div>
  );
};

export default Products;
