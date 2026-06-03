import Image from "next/image";
import Button from "./Button";
import { assets } from "../data/homePage";

export default function FutureCta() {
  return (
    <section className="bg-[#42587e] px-4 py-16 text-white">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 md:grid-cols-[577px_1fr]">
        <Image src={assets.home("child-academic-img.jpg")} alt="" width={577} height={442} className="rounded-[4px]" />
        <div>
          <h2 className="text-[34px] font-extrabold leading-tight md:text-[42px]">
            Are You Ready To Give Your Child The Future They Deserve?
          </h2>
          <Image src={assets.home("college-midater.png")} alt="" width={193} height={14} className="mt-5 brightness-0 invert" />
          <p className="mt-6 text-[18px] leading-8">
            We have a proven track record. Our students continue to achieve High SCORES in OC Test, Selective School Test and NAPLAN.
          </p>
          <p className="mt-4 text-[18px] font-semibold">Do You Want Your Child to Join the League?</p>
          <div className="mt-7">
            <Button href="/free-assessment/" variant="dark">Book Assessment</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
