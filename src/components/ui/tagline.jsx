import { colors } from "../../utils/colors";

const Tagline = ({ tagline }) => {
  return (
    <div className="flex gap-4 items-center">
      <div className={`w-10 h-1 bg-[#FBD784] rounded-full`}></div>
      <p className={`text-[${colors.accent}] uppercase tracking-widest text-sm md:text-base`}>{tagline}</p>
    </div>
  )
}

export default Tagline;