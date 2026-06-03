import Image from "next/image";
import { assets, supportCards } from "../data/homePage";

export default function SupportPanel() {
  return (
    <section className="bg-[#eef4ff] px-4 py-16">
      <div className="mx-auto grid max-w-[1140px] gap-7 md:grid-cols-3">
        {supportCards.map((card) => (
          <article key={card.title} className="rounded-[4px] bg-white p-8 text-center shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
            <Image src={assets.home(card.image)} alt="" width={76} height={73} className="mx-auto h-[76px] w-[76px] object-contain" />
            <h3 className="mt-6 text-[24px] font-bold text-[#42587e]">{card.title}</h3>
            <p className="mt-4 text-[16px] leading-8 text-[#333]">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
