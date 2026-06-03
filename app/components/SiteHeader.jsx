import Image from "next/image";
import Link from "next/link";
import { assets, navGroups } from "../data/homePage";

export default function SiteHeader() {
  return (
    <header className="relative sticky top-0 z-40 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[88px] w-full max-w-[1140px] items-center justify-between gap-2 overflow-hidden px-4 sm:gap-5">
        <Link href="/" className="block w-[224px] max-w-[58vw] shrink-0">
          <Image
            src={assets.pre("pre_logo.jpg")}
            alt="Pre Uni College Digital"
            width={224}
            height={37}
            priority
            className="h-auto w-full"
          />
        </Link>
        <nav className="hidden flex-1 items-center justify-end gap-4 lg:flex">
          {navGroups.map((item) => (
            <a key={item.label} href={item.href} className="text-[14px] font-bold text-[#111] hover:text-[#42587e]">
              {item.label}
            </a>
          ))}
        </nav>
        <a
          href="/free-assessment/"
          className="hidden min-h-10 shrink-0 items-center justify-center rounded-[5px] bg-[#42587e] px-6 py-2 text-sm font-bold text-white transition hover:bg-[#31435f] sm:inline-flex"
        >
          Free Assessment
        </a>
        <button className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 shrink-0 flex-col items-center justify-center gap-1.5 rounded-[3px] border border-[#d5d5d5] bg-white sm:hidden" aria-label="Menu">
          <span className="h-0.5 w-5 bg-[#222]" />
          <span className="h-0.5 w-5 bg-[#222]" />
          <span className="h-0.5 w-5 bg-[#222]" />
        </button>
      </div>
    </header>
  );
}
