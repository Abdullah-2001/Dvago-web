import BannerSlider from "../components/home/Banner";
import ProductSection from "../components/home/productSection";
import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Navbar />
      <BannerSlider />
      <ProductSection />
    </div>
  );
}

export default Home;