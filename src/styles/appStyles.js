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
  headerTitle: "text-[13px] font-semibold text-black",
  heading: "text-[24px] font-extrabold text-black",
  h5: "text-[18px] font-medium text-green-600",
  h5Bold: "text-[18px] font-bold text-black",
  h4: "text-[16px] font-bold text-black",
  h4Primary: "text-[16px] text-green-600 font-medium",
  h3primary: "text-[14px] text-green-600 font-semibold",
  h3: "text-[14px] text-black font-normal",
  h2Regular: "text-[13px] text-black font-normal",
  h2Primary: "text-[13px] text-green-600 font-semibold",
  h1: "text-[12px] text-black font-medium",
  label: "text-[12px] text-black mb-[5px]",
  textCenter: "text-center",

  // Borders
  border: "border border-gray-300",
  borderBottom: "border-b border-gray-300",

  // Inputs
  inputField:
    "border border-[#E4E7EC] h-12 rounded-xl px-3 text-[14px] text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500",

  // Images
  imageThumbnail: "w-20 h-[70px] rounded-lg mb-2 object-cover",
  imageGrid: "flex flex-wrap gap-3 mt-5",

  // Empty state
  emptyContainer: "flex justify-center items-center p-5",
  emptyText: "text-[14px] text-gray-500",

  // Errors
  fieldError: "text-red-500 mt-2 text-[12px]",
};

export default appStyles;