import image1 from '../assets/images/medicine.png'
import image2 from '../assets/images/medicine2.png'
import image3 from '../assets/images/medicine3.png'
import image4 from '../assets/images/medicine4.png'

export const mainCategories = [
  "OTC And Health Need",
  "Personal Care",
  "Baby & Mother",
  "Devices",
  "Vitamins & Supplements",
];

export const products = [
  {
    id: 1,
    image: image1,
    name: "Panadol Extra",
    description: "Pain relief tablets (24 Pack)",
    discountedPrice: 350,
    originalPrice: 400,
    discount: "12% OFF",
    variantCount: 2,
    variantText: "Panadol Extra 500mg",
  },
  {
    id: 2,
    image: image2,
    name: "Disprin Tablets",
    description: "Fast pain relief (10 Tablets)",
    discountedPrice: 120,
    originalPrice: 150,
    discount: "20% OFF",
    variantCount: 1,
    variantText: "Disprin 300mg",
  },
  {
    id: 3,
    image: image3,
    name: "Dettol Antiseptic",
    description: "Liquid disinfectant (250ml)",
    discountedPrice: 520,
    originalPrice: 600,
    discount: "13% OFF",
    variantCount: 2,
    variantText: "Dettol Original",
  },
  {
    id: 4,
    image: image4,
    name: "Sensodyne Toothpaste",
    description: "For sensitive teeth (100g)",
    discountedPrice: 430,
    originalPrice: 500,
    discount: "14% OFF",
    variantCount: 3,
    variantText: "Sensodyne Rapid Relief",
  },
  {
    id: 5,
    image: image1,
    name: "Panadol Cold & Flu",
    description: "Day/Night tablets (24 Pack)",
    discountedPrice: 650,
    originalPrice: 800,
    discount: "19% OFF",
    variantCount: 2,
    variantText: "Cold & Flu Relief",
  },
  {
    id: 6,
    image: image2,
    name: "Volini Spray",
    description: "Pain relief spray (60ml)",
    discountedPrice: 470,
    originalPrice: 550,
    discount: "15% OFF",
    variantCount: 1,
    variantText: "Volini Active",
  },
];
