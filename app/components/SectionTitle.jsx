import Image from "next/image";
import { assets } from "../data/homePage";

export default function SectionTitle({ title, eyebrow, children, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-4xl text-center">
      {eyebrow && (
        <p className={`mb-2 text-[24px] font-bold ${light ? "text-white" : "text-[#42587e]"}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`text-[28px] font-extrabold leading-tight sm:text-[34px] md:text-[42px] ${light ? "text-white" : "text-[#1b1b1b]"}`}>
        {title}
      </h2>
      <Image
        src={assets.home("college-midater.png")}
        alt=""
        width={193}
        height={14}
        className={`mx-auto mt-4 ${light ? "brightness-0 invert" : ""}`}
      />
      {children && <div className={`mt-5 text-[17px] leading-8 ${light ? "text-white" : "text-[#333]"}`}>{children}</div>}
    </div>
  );
}
