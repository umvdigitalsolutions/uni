import Image from "next/image";
import { assets } from "../data/homePage";

const companyLinks = ["My account", "About", "Contact", "Franchise", "Faqs", "Book Store", "Own a Pre Uni", "Careers"];
const policyLinks = ["Blogs", "Privacy Policy", "Terms & Conditions", "Cookie Policy"];
const locationLinks = [
  "Pre Uni College Bellavista",
  "Pre Uni College Box Hill",
  "Pre Uni College Kogarah",
  "Pre Uni College Mardsen Park",
  "Pre Uni College Minto",
];

function FooterList({ title, items }) {
  return (
    <div>
      <h3 className="font-bold">{title}</h3>
      <ul className="mt-4 space-y-2 text-sm leading-6">
        {items.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#5f7397] px-4 pt-16 text-white">
      <div className="mx-auto grid max-w-[1140px] gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image src={assets.pre("pre_logo.jpg")} alt="Pre Uni College Digital" width={224} height={37} className="h-auto w-[224px]" />
          <p className="mt-6 text-[17px] font-bold">(02) 8311 0885</p>
          <p className="mt-3 text-sm leading-7">HEAD OFFICE: 207/5 Celebration Dr, Bella Vista NSW 2153</p>
          <div className="mt-6">
            <h3 className="font-bold">Subscribe Now</h3>
            <div className="mt-3 flex max-w-[320px] overflow-hidden rounded-[4px] bg-white">
              <input aria-label="Email address" className="min-w-0 flex-1 px-4 py-3 text-sm text-black outline-none" placeholder="Email address:" />
              <button className="bg-[#42587e] px-4 text-sm font-bold text-white">Go</button>
            </div>
          </div>
        </div>
        <FooterList title="Company" items={companyLinks} />
        <FooterList title="Links" items={policyLinks} />
        <FooterList title="Locations" items={locationLinks} />
      </div>
      <div className="mx-auto mt-12 flex max-w-[1140px] flex-col items-center justify-between gap-4 border-t border-white/25 py-6 text-sm md:flex-row">
        <p>© 2025 Pre Uni College. All Rights Reserved.</p>
        <div className="flex items-center gap-2">
          <span>Website Designed & Developed by:</span>
          <Image src={assets.home("dslogo-footer.png")} alt="Digital Solutions" width={112} height={17} />
        </div>
      </div>
    </footer>
  );
}
