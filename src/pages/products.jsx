import { useLocation } from "react-router-dom";
import Breadcrumbs from "../components/ui/breadcrumb";

const Products = () => {

  const location = useLocation();
  const pathParts = location.pathname.split("/").filter(Boolean);

  const breadcrumbItems = pathParts.map((part, index) => {
    const href = "/" + pathParts.slice(0, index + 1).join("/");
    const isLast = index === pathParts.length - 1;
    return {
      label: decodeURIComponent(part),
      href: isLast ? undefined : href,
      current: isLast,
    };
  });

  return (
    <div className="my-5 mx-25">
      <Breadcrumbs items={breadcrumbItems} />
    </div>
  )
}

export default Products;