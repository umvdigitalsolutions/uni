import { testimonials } from "../data/homePage";

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f7f9fc] px-4 py-16">
      <div className="mx-auto max-w-[1140px]">
        <div className="grid gap-7 md:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.name} className="rounded-[4px] bg-white p-8 shadow-[0_4px_18px_rgba(0,0,0,0.08)]">
              <h3 className="text-[22px] font-bold text-[#42587e]">{item.name}</h3>
              <p className="mt-4 text-[16px] leading-8 text-[#333]">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
