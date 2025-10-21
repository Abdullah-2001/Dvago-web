const appStyles = {
  
  // Layout
  body: "bg-white",
  container: "w-full bg-white",
  flex: "flex",
  halfFlex: "flex-[0.5]",

  // Flexbox utilities
  rowCenter: "flex flex-row justify-center items-center",
  justifyBottom: "flex justify-end",
  rowBetween: "flex flex-row justify-between items-center",
  row: "flex flex-row items-center",
  flexBetween: "flex justify-between flex-1",
  center: "flex items-center",
  alignJustifyCenter: "flex justify-center items-center",
  alignJustifyBetween: "flex justify-between items-center",

  // Width & height
  fullWidth: "w-full",
  halfWidth: "w-1/2",
  fullHeight: "h-full",
  fullHeightWidth: "w-full h-full",
  screenWidthHeight: "w-screen h-full",

  // Typography
  // Headings
  headerTitle: "text-[13px] font-semibold text-black",
  heading: "text-[24px] md:text-[28px] font-extrabold text-black",

  h5: "text-[18px] md:text-[20px] font-medium text-green-600",
  h5Bold: "text-[18px] md:text-[20px] font-bold text-black",

  h4: "text-[16px] md:text-[18px] font-bold text-black",
  h4Primary: "text-[16px] md:text-[18px] text-green-600 font-medium",

  h3primary: "text-[14px] md:text-[16px] text-green-600 font-semibold",
  h3: "text-[14px] md:text-[16px] text-black font-normal",

  h2Regular: "text-[13px] md:text-[15px] text-black font-normal",
  h2Primary: "text-[13px] md:text-[15px] text-green-600 font-semibold",

  h1: "text-[12px] md:text-[14px] text-black font-medium",

  // Paragraphs (responsive standard text sizes)
  p1: "text-[14px] font-medium md:text-[16px] text-gray-700 leading-relaxed cursor-pointer",
  p2: "text-[16px] md:text-[18px] text-gray-800 leading-relaxed",
  p3: "text-[12px] md:text-[14px] text-gray-600 leading-snug",
  pMuted: "text-[13px] md:text-[15px] text-gray-500 italic",

  // Inputs
  inputField:
    "border border-[#E4E7EC] h-12 rounded-xl px-3 text-[14px] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500",

  // Images
  imageThumbnail: "w-20 h-[70px] rounded-lg mb-2 object-cover",
  imageGrid: "flex flex-wrap gap-3 mt-5",

};

export default appStyles;