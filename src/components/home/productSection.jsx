import { products } from "../../mock/mockData"
import ProductSlider from "./productSlider"

const ProductSection = () => {
    return (
        <div className="bg-[linear-gradient(143deg,rgba(254,250,227,1)_1%,rgba(242,242,242,1)_100%)] pt-20">
            <ProductSlider products={products} />
        </div>
    )
}

export default ProductSection;