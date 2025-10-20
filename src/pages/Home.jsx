import BannerSlider from "../components/home/Banner";
import ProductSection from "../components/home/productSection";
import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <div>
      <Navbar />
      <BannerSlider />
      <ProductSection />
    </div>
  );
}

export default Home;