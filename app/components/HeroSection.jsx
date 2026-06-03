import Button from "./Button";
import { heroSlides } from "../data/homePage";

export default function HeroSection() {
  const slide = heroSlides[0];

  return (
    <section
      className="relative min-h-[560px] overflow-hidden bg-cover bg-no-repeat md:min-h-[640px]"
      style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: slide.position }}
    >
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative mx-auto flex min-h-[560px] w-full max-w-[1440px] items-center px-6 md:min-h-[640px] md:px-[150px]">
        <div className="w-full min-w-0" style={{ maxWidth: "min(700px, calc(100vw - 48px))" }}>
          <h1
            className="max-w-full break-words text-[28px] font-extrabold leading-[1.14] text-black sm:text-[48px] md:text-[60px]"
            style={{ overflowWrap: "anywhere" }}
          >
            {slide.title}
          </h1>
          <p className="mt-4 text-[18px] font-light leading-7 text-black md:text-[25px] md:leading-8">{slide.subtitle}</p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={slide.primary} variant="dark">Book your Free Assessment</Button>
            <Button href={slide.secondary} variant="outline">Learn more</Button>
          </div>
        </div>
      </div>
      <button className="absolute left-5 top-1/2 hidden -translate-y-1/2 text-[48px] font-light text-black/60 md:block" aria-label="Previous slide">
        ‹
      </button>
      <button className="absolute right-5 top-1/2 hidden -translate-y-1/2 text-[48px] font-light text-black/60 md:block" aria-label="Next slide">
        ›
      </button>
      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-2">
        {heroSlides.map((item, index) => (
          <span key={item.title} className={`h-3 w-3 rounded-full border border-white ${index === 0 ? "bg-white" : "bg-transparent"}`} />
        ))}
      </div>
    </section>
  );
}
