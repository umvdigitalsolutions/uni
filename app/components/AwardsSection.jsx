import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import { assets, awards } from "../data/homePage";

export default function AwardsSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-[1140px]">
        <SectionTitle title="Our Awards">
          <p>The leading environment for peak pre & primary school academic performance.</p>
        </SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <article key={award.title} className="rounded-[4px] bg-white p-5 text-center shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
              <Image src={assets.home(award.image)} alt="" width={244} height={371} className="mx-auto h-[250px] w-full object-contain" />
              <h3 className="mt-5 text-[18px] font-bold text-[#222]">{award.title}</h3>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/award/">View All Awards</Button>
        </div>
      </div>
    </section>
  );
}
