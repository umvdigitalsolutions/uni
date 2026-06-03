import Image from "next/image";
import Link from "next/link";

const pre = (name) => `/preuni-assets/${name}`;
const home = (name) => `/home-assets/${name}`;

const menuItems = [
  "Home",
  "About Us",
  "Courses",
  "OC",
  "Selective",
  "Book Store",
  "Blog",
  "Contact Us",
];

const steps = [
  {
    title: "Step 1-Free Child Assessment",
    image: "image_2023_06_21T06_24_43_173Z.png",
    heading: "For unparalleled insights",
    text:
      "Conducted online or on-campus, this obligation assessment provides us with unparalleled insights about your child's academic strengths, learning style, talents and challenges.",
  },
  {
    title: "Step 2-Personalised Plan",
    image: "image_2023_06_21T06_24_46_828Z.png",
    heading: "Tailored exclusively to your child's learning needs",
    text:
      "Our program advisor creates a personalised plan with the right course, learning approach and platform based on the assessment.",
  },
  {
    title: "Step 3-Teach With Joy",
    image: "image_2023_06_21T06_24_49_961Z.png",
    heading: "Because learning shouldn't be boring",
    text:
      "Our dedicated tutors use personal instruction and digital tools to make learning exciting, easy to understand, interactive and engaging.",
  },
  {
    title: "Step 4-Excellent Support",
    image: "image_2023_06_21T06_24_53_434Z.png",
    heading: "We are here when your child needs us most",
    text:
      "Homework help, video resources, weekly revision classes and web tutor support help students continue with confidence.",
  },
  {
    title: "Step 5-Test and Challenge",
    image: "image_2023_06_21T06_24_56_529Z.png",
    heading: "Keep track of your child's progression",
    text:
      "Regular testing teaches time management and gives parents clear progress reports showing academic growth over time.",
  },
  {
    title: "Step 6-Goal Setting",
    image: "image_2023_06_21T06_24_59_835Z.png",
    heading: "Path to a bright future",
    text:
      "We review results, meet with parents and teachers, and set new goals so every student can realise their true potential.",
  },
];

const courses = [
  "Year 5 Selective Trial Test",
  "Year 3 Opportunity Class Trial Test",
  "Year 7-10 Maths, English & Science",
  "NAPLAN Preparation",
];

const awards = [
  {
    title: "Australian Small Business Championship Awards",
    image: "IMG-20240419-WA0003.jpg",
  },
  { title: "Simba Excellence", image: "unnamed.jpg" },
  { title: "Ausmumpreneur 2023", image: "image_2023_06_30T13_51_08_626Z.png" },
  { title: "Business Excellence Awards", image: "image_2023_06_30T13_51_48_922Z.png" },
];

const socials = ["f", "x", "in", "yt"];

function BlueButton({ children, href = "/free-assessment/" }) {
  return (
    <a
      href={href}
      className="inline-flex h-10 items-center justify-center rounded-[5px] bg-[#42587e] px-6 text-base font-semibold capitalize text-white transition hover:bg-[#324463]"
    >
      {children}
    </a>
  );
}

function Heading({ children, kicker }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <h2 className="text-[34px] font-bold leading-tight text-[#1b1b1b] md:text-[42px]">
        {children}
      </h2>
      {kicker && <p className="mt-3 text-[17px] leading-8 text-[#555]">{kicker}</p>}
      <Image
        src={home("college-midater.png")}
        alt=""
        width={193}
        height={14}
        className="mx-auto mt-4"
      />
    </div>
  );
}

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white text-[#1b1b1b]">
      <div className="bg-[#42587e] py-2 text-sm text-white">
        <div className="mx-auto flex max-w-[1180px] flex-col items-center justify-between gap-2 px-4 md:flex-row">
          <p>Term 3 starts Monday 21 July 2025.</p>
          <p>Call Now: 02 8311 0885</p>
        </div>
      </div>

      <header className="bg-[#5f7397] py-5">
        <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-6 px-4">
          <Link href="/" className="block w-[210px] shrink-0">
            <Image src={pre("pre_logo.jpg")} alt="Pre Uni College Digital" width={210} height={35} className="h-auto w-full" priority />
          </Link>
          <nav className="hidden flex-1 items-center justify-end gap-5 lg:flex">
            {menuItems.map((item) => (
              <a key={item} href="#" className="text-sm font-semibold text-white hover:text-[#dbe7ff]">
                {item}
              </a>
            ))}
          </nav>
          <BlueButton>Free Assessment</BlueButton>
        </div>
      </header>

      <section className="relative min-h-[640px] bg-[url('/preuni-assets/hero-img.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-white/55" />
        <div className="relative mx-auto flex min-h-[640px] max-w-[1180px] items-center px-4">
          <div className="max-w-[610px]">
            <h1 className="text-[42px] font-extrabold leading-tight text-black md:text-[58px]">
              K-12 Learning, Powered by Real Teachers + Smart AI
            </h1>
            <p className="mt-6 text-[24px] leading-9 text-black">
              Personalised support, all day, every day.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="/free-assessment/" className="rounded-[5px] bg-black px-7 py-3 text-base font-semibold text-white">
                Book your Free Assessment
              </a>
              <a href="/school-holiday-workshop/" className="rounded-[5px] border border-black px-7 py-3 text-base font-semibold text-black">
                Learn more
              </a>
            </div>
          </div>
        </div>
        <button className="absolute left-4 top-1/2 hidden -translate-y-1/2 bg-black/40 px-3 py-4 text-3xl text-white md:block">‹</button>
        <button className="absolute right-4 top-1/2 hidden -translate-y-1/2 bg-black/40 px-3 py-4 text-3xl text-white md:block">›</button>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-16">
        <Heading kicker="Our PRIME CONCERN and GOAL is YOUR CHILD'S SUCCESS.">
          Six Steps to <span className="text-[#42587e]">Academic Success!</span>
        </Heading>
        <div className="overflow-hidden rounded-xl border border-[#d0d0d0]">
          <div className="grid bg-[#f7f7f7] md:grid-cols-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`border-b border-r border-[#d0d0d0] px-4 py-5 text-center text-xs font-bold uppercase leading-5 md:border-b-0 ${
                  index === 0 ? "bg-[#42587e] text-white" : "text-[#333]"
                }`}
              >
                {step.title}
              </div>
            ))}
          </div>
          <div className="grid items-center bg-[#42587e] p-6 md:grid-cols-2 md:p-10">
            <Image
              src={home(steps[0].image)}
              alt=""
              width={540}
              height={475}
              className="mx-auto h-auto max-w-full"
            />
            <div className="mt-8 text-white md:mt-0 md:pl-10">
              <h3 className="text-2xl font-bold">{steps[0].heading}</h3>
              <p className="mt-5 text-[17px] leading-8">{steps[0].text}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[16px]">
                <li>Academic strengths and weaknesses</li>
                <li>Best suited learning style</li>
                <li>Specific talents and challenges to meet</li>
              </ul>
              <a href="/free-assessment/" className="mt-7 inline-flex rounded bg-white px-5 py-3 font-bold text-[#42587e]">
                Book a Free Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f9fc] px-4 py-16">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-center gap-10 md:grid-cols-[421px_1fr]">
            <Image src={home("welcome-img-1.jpg")} alt="" width={421} height={285} className="rounded-lg" />
            <div>
              <h2 className="text-[34px] font-bold leading-tight">
                Welcome to <span className="text-[#42587e]">Pre Uni College Digital</span>
              </h2>
              <Image src={home("college-midater.png")} alt="" width={193} height={14} className="mt-4" />
              <p className="mt-6 text-[17px] leading-8 text-[#444]">
                Pre Uni College Digital helps students build confidence and academic strength through structured learning, experienced teachers and modern online support.
              </p>
              <div className="mt-7 grid gap-5 sm:grid-cols-3">
                {["Experienced Teachers", "Regular Assessments", "Parent Portal"].map((item) => (
                  <div key={item} className="rounded-lg bg-white p-5 text-center shadow">
                    <h3 className="font-bold text-[#42587e]">{item}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#555]">Focused support that helps every child move ahead.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-16">
        <Heading kicker="It is a long established fact that a reader will be distracted by the readable content">
          Checkout The Latest Courses
        </Heading>
        <div className="grid gap-6 md:grid-cols-4">
          {courses.map((course, index) => (
            <article key={course} className="overflow-hidden rounded-lg bg-white shadow-[0_3px_18px_rgba(0,0,0,0.14)]">
              <Image
                src={home(steps[index + 1]?.image || steps[0].image)}
                alt=""
                width={540}
                height={475}
                className="h-44 w-full object-cover"
              />
              <div className="p-5">
                <h3 className="min-h-[56px] text-lg font-bold text-[#42587e]">{course}</h3>
                <p className="mt-3 text-sm leading-6 text-[#555]">Expert-led programs designed for stronger academic results.</p>
                <a className="mt-5 inline-flex text-sm font-bold text-[#42587e]" href="/courses">
                  Read More
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <BlueButton href="/courses">Browse All Courses</BlueButton>
        </div>
      </section>

      <section className="bg-[#42587e] px-4 py-16 text-white">
        <div className="mx-auto grid max-w-[1180px] items-center gap-10 md:grid-cols-2">
          <Image src={home("child-academic-img.jpg")} alt="" width={577} height={442} className="rounded-lg" />
          <div>
            <h2 className="text-[36px] font-bold leading-tight">
              Are You Ready To Give Your Child The Future They Deserve?
            </h2>
            <Image src={home("college-midater.png")} alt="" width={193} height={14} className="mt-5 brightness-0 invert" />
            <p className="mt-6 text-[18px] leading-8">
              We have a proven track record. Our students continue to achieve high scores in OC Test, Selective School Test and NAPLAN.
            </p>
            <p className="mt-4 text-[18px]">Do You Want Your Child to Join the League?</p>
            <a href="/free-assessment/" className="mt-7 inline-flex h-11 items-center rounded bg-white px-7 font-bold text-[#42587e]">
              Book Assessment
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1180px] px-4 py-16">
        <Heading kicker="The leading environment for peak pre & primary school academic performance.">
          Our Awards
        </Heading>
        <div className="grid gap-6 md:grid-cols-4">
          {awards.map((award) => (
            <article key={award.title} className="rounded-lg bg-white p-4 text-center shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
              <Image src={home(award.image)} alt="" width={260} height={220} className="mx-auto h-56 w-full rounded object-cover" />
              <h3 className="mt-5 min-h-[54px] font-bold text-[#42587e]">{award.title}</h3>
            </article>
          ))}
        </div>
        <div className="mt-9 text-center">
          <BlueButton href="/award">View All Awards</BlueButton>
        </div>
      </section>

      <footer className="bg-[#5f7397] px-4 py-14 text-white">
        <div className="mx-auto grid max-w-[1180px] gap-10 md:grid-cols-[1.2fr_1fr_1fr_1fr]">
          <div>
            <Image src={pre("pre_logo.jpg")} alt="Pre Uni College Digital" width={210} height={35} className="h-auto w-[210px]" />
            <p className="mt-5 text-sm leading-7">
              Pre Uni College Digital provides structured online and campus learning support for students across Australia.
            </p>
            <div className="mt-5 flex gap-3">
              {socials.map((item) => (
                <span key={item} className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold">
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-bold">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {menuItems.slice(0, 6).map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Programs</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>OC Preparation</li>
              <li>Selective Preparation</li>
              <li>NAPLAN</li>
              <li>Writing</li>
              <li>Maths</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Contact</h3>
            <p className="mt-4 text-sm leading-7">Phone: 02 8311 0885<br />Email: info@preunicollegedigital.com.au</p>
          </div>
        </div>
        <div className="mx-auto mt-10 max-w-[1180px] border-t border-white/20 pt-6 text-center text-sm">
          ©2026 Pre Uni College Digital. All rights reserved.
        </div>
      </footer>

      <a
        href="https://wa.me/61415937649"
        className="fixed bottom-9 right-7 z-50 flex items-center gap-3"
        aria-label="Chat on WhatsApp"
      >
        <span className="hidden w-[156px] rounded bg-white px-4 py-3 text-sm font-black leading-5 text-[#1d2939] shadow-[0_4px_18px_rgba(0,0,0,0.08)] sm:block">
          Need Help? <strong>Chat with us</strong>
        </span>
        <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2db742] text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)]">
          <svg viewBox="0 0 32 32" className="h-9 w-9 fill-current" aria-hidden="true">
            <path d="M16.01 3.2A12.73 12.73 0 0 0 5.2 22.65L3.9 28.8l6.28-1.24A12.73 12.73 0 1 0 16.01 3.2Zm0 22.98c-1.95 0-3.86-.55-5.5-1.6l-.4-.25-3.74.74.78-3.63-.27-.42a10.31 10.31 0 1 1 9.13 5.16Zm5.7-7.72c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.35-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z" />
          </svg>
        </span>
      </a>
    </main>
  );
}
