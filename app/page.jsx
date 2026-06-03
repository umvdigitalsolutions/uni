import Image from "next/image";
import Link from "next/link";

const pre = (name) => `/preuni-assets/${name}`;
const home = (name) => `/home-assets/${name}`;

const navGroups = [
  { label: "About us", href: "/about-us/" },
  { label: "Free Resources", href: "/blogs/" },
  { label: "Courses", href: "/courses/" },
  { label: "Location", href: "/locations/" },
  { label: "Book Store", href: "/book-store/" },
  { label: "Own a Pre Uni", href: "/franchise/" },
  { label: "My Account", href: "/my-account/" },
];

const heroSlides = [
  {
    title: "K-12 Learning, Powered by Real Teachers + Smart AI",
    subtitle: "Personalised support, all day, every day.",
    image: pre("hero-img.jpg"),
    primary: "/free-assessment/",
    secondary: "/school-holiday-workshop/",
    position: "center 27%",
  },
  {
    title: "Best-Selling OC & Selective Books for Smart Preparation",
    subtitle: "Created by experts. Trusted by thousands",
    image: pre("ebook-writing-formula-2.png"),
    primary: "/book-store/",
    secondary: "/book-store/",
    position: "right center",
  },
  {
    title: "Boost Writing. Master Public Speaking. Ace the Tests",
    subtitle: "Enrol in our intensive holiday program starting 7th July.",
    image: pre("parent-img.jpg"),
    primary: "/free-assessment/",
    secondary: "/school-holiday-workshop/",
    position: "center center",
  },
];

const workSteps = [
  {
    label: "Step 1 Free Child Assessment",
    image: "image_2023_06_21T06_24_43_173Z.png",
    title: "For unparalleled insights",
    body:
      "Conducted online or on-campus, this obligation assessment provides us with unparalleled insights about your child's:",
    points: [
      "Academic strengths and weaknesses",
      "Best suited learning style",
      "Specific talents and challenges to meet",
      "Self-limiting behaviour and beliefs",
    ],
    closing:
      "Upon completion of the assessment, parents will receive a detailed report with a consultation of value $150.",
  },
  {
    label: "Step 2 Personalised Plan",
    image: "image_2023_06_21T06_24_46_828Z.png",
    title: "Tailored EXCLUSIVELY To Your Child's Learning Needs",
    body:
      "Our program advisor will create a personalised plan for your child with the right course, learning approach and platform based on the assessment.",
    points: ["One-on-one vs. small group", "Online vs. blended", "A clear path for steady growth"],
  },
  {
    label: "Step 3 Teach With Joy",
    image: "image_2023_06_21T06_24_49_961Z.png",
    title: "Because Learning Shouldn't be Boring, Outdated, or a Struggle",
    body:
      "Our dedicated and trained tutors use personal instruction, suitable learning styles and digital tools to make learning exciting, easy to understand and engaging.",
    points: ["Interactive lessons", "Up-to-date resources", "Australian National Curriculum aligned"],
  },
  {
    label: "Step 4 Excellent Support",
    image: "image_2023_06_21T06_24_53_434Z.png",
    title: "We Are Here When Your Child Needs us Most",
    body:
      "We are here for your child at every step of the learning process so they keep learning with confidence.",
    points: ["Free weekly homework help", "Video resources", "Weekly revision classes", "24/7 web tutor support"],
  },
  {
    label: "Step 5 Test and Challenge",
    image: "image_2023_06_21T06_24_56_529Z.png",
    title: "Keep Track of Your Child's Progression",
    body:
      "Regular testing teaches time-management and test-taking skills while progress reports show clear academic improvement.",
    points: ["Skill tracking", "Testing confidence", "Progress reports for parents"],
  },
  {
    label: "Step 6 Goal Setting",
    image: "image_2023_06_21T06_24_59_835Z.png",
    title: "Path to a Bright Future",
    body:
      "We review results, schedule parent and teacher meetings, and set new goals so every child can realise their true potential.",
    points: ["Review results", "Set new academic goals", "Build confidence for bigger challenges"],
  },
];

const courses = [
  {
    title: "EWMT Core Classes",
    text:
      "Our EWMG Head start program is carefully designed for students studying from year one through to year six focusing on English, Writing, Mathematics and Thinking Skills.",
    image: "image_2023_06_21T06_24_46_828Z.png",
    href: "/courses/ewmg-head-start-program/",
  },
  {
    title: "Selective School Test Preparation",
    text:
      "Our Selective School mock Tests give your child the chance to perfect exam technique, build confidence and overcome exam day nerves before the big day.",
    image: "image_2023_06_21T06_24_56_529Z.png",
    href: "/courses/selective-school-trial-test/",
  },
  {
    title: "OC Trial Test",
    text:
      "Our comprehensive OC Trial Test Course helps children become confident in Maths, English and Thinking Skills while building the skills needed to tackle the exam.",
    image: "image_2023_06_21T06_24_59_835Z.png",
    href: "/courses/oc-trial-test/",
  },
];

const supportCards = [
  {
    title: "Experienced Teachers",
    image: "welcome-points-img.png",
    text:
      "Not university students or graduates. The absolute BEST taking each and every class so that your child can get ahead.",
  },
  {
    title: "Regular Assessments",
    image: "welcome-points-2-img.png",
    text:
      "Your child will be assessed every 5 weeks using the most advanced assessment tool in the country, with detailed reports sent to you.",
  },
  {
    title: "Parent Portal",
    image: "welcome-points-3-img.png",
    text:
      "Your portal keeps you up to date with your child's progress and gives you the support you need to help your child thrive.",
  },
];

const awards = [
  { title: "Australian Small Business Championship Awards", image: "IMG-20240419-WA0003.jpg" },
  { title: "Simba Excellence", image: "unnamed.jpg" },
  { title: "Ausmumpreneur 2023", image: "image_2023_06_30T13_51_08_626Z.png" },
  { title: "Children's Education 2023", image: "image_2023_06_30T13_51_48_922Z.png" },
  { title: "Business Excellence 2023", image: "image_2023_06_30T13_51_08_626Z.png" },
  { title: "Business Pivot 2023", image: "image_2023_06_30T13_51_48_922Z.png" },
];

const testimonials = [
  {
    name: "Lisa and David M",
    text:
      "The program is designed with such care and attention to detail. Our daughter acquired essential skills and developed a strong sense of self-assurance.",
  },
  {
    name: "Sarah and Michael D",
    text:
      "Pre Uni College Digital exceeded our expectations. It gave our child the perfect blend of academic and social skills.",
  },
  {
    name: "John and Emily S",
    text:
      "The interactive activities and personalised approach boosted his confidence and fostered a genuine love for learning.",
  },
];

function Button({ children, href = "/free-assessment/", variant = "blue" }) {
  const styles =
    variant === "outline"
      ? "border border-black bg-white/20 text-black hover:bg-white"
      : variant === "dark"
        ? "bg-black text-white hover:bg-[#25334d]"
        : "bg-[#42587e] text-white hover:bg-[#31435f]";

  return (
    <a
      href={href}
      className={`inline-flex min-h-10 items-center justify-center rounded-[5px] px-6 py-2 text-sm font-bold transition ${styles}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ title, eyebrow, children, light = false }) {
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
        src={home("college-midater.png")}
        alt=""
        width={193}
        height={14}
        className={`mx-auto mt-4 ${light ? "brightness-0 invert" : ""}`}
      />
      {children && <div className={`mt-5 text-[17px] leading-8 ${light ? "text-white" : "text-[#333]"}`}>{children}</div>}
    </div>
  );
}

function AnnouncementBar() {
  return (
    <div className="bg-[#5f7397] py-3 text-sm text-white">
      <div className="mx-auto flex max-w-[1140px] flex-col items-center justify-between gap-2 px-4 md:flex-row">
        <p className="text-center font-semibold md:text-left">Term 2 Enrolment are now open! Book your obligation-free assessment today!</p>
        <div className="flex items-center gap-5">
          <a href="tel:0283110885" className="font-semibold">Call (02) 8311 0885</a>
          <a href="/my-account/" className="font-semibold">Login</a>
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white shadow-[0_2px_18px_rgba(0,0,0,0.08)]">
      <div className="mx-auto flex h-[88px] w-full max-w-[1140px] items-center justify-between gap-2 px-4 sm:gap-5">
        <Link href="/" className="block w-[224px] max-w-[58vw] shrink-0">
          <Image src={pre("pre_logo.jpg")} alt="Pre Uni College Digital" width={224} height={37} priority className="h-auto w-full" />
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
        <button className="flex h-10 w-10 shrink-0 flex-col items-center justify-center gap-1.5 rounded-[3px] border border-[#d5d5d5] sm:hidden" aria-label="Menu">
          <span className="h-0.5 w-5 bg-[#222]" />
          <span className="h-0.5 w-5 bg-[#222]" />
          <span className="h-0.5 w-5 bg-[#222]" />
        </button>
      </div>
    </header>
  );
}

function Hero() {
  const slide = heroSlides[0];

  return (
    <section
      className="relative min-h-[640px] overflow-hidden bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${slide.image})`, backgroundPosition: slide.position }}
    >
      <div className="absolute inset-0 bg-white/50" />
      <div className="relative mx-auto flex min-h-[640px] w-full max-w-[1440px] items-center px-6 md:px-[150px]">
        <div className="w-full min-w-0" style={{ maxWidth: "min(700px, calc(100vw - 48px))" }}>
          <h1 className="max-w-full break-words text-[34px] font-extrabold leading-[1.12] text-black sm:text-[48px] md:text-[60px]" style={{ overflowWrap: "anywhere" }}>
            {slide.title}
          </h1>
          <p className="mt-4 text-[20px] font-light leading-8 text-black md:text-[25px]">{slide.subtitle}</p>
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

function WorkSystem({ duplicate = false }) {
  const active = workSteps[0];

  return (
    <section className={`${duplicate ? "pt-12" : "pt-16"} bg-white px-4 pb-16`}>
      <div className="mx-auto max-w-[1140px]">
        <SectionTitle title="Six Steps to Academic Success!" eyebrow="How We Work">
          <p>Our PRIME CONCERN and GOAL is YOUR CHILD&apos;S SUCCESS.</p>
          <p>Your child&apos;s commitment to learning and our passion for teaching make success INEVITABLE.</p>
        </SectionTitle>
        <div className="overflow-hidden rounded-[10px] border border-[#d7d7d7] bg-white">
          <div className="grid md:grid-cols-6">
            {workSteps.map((step, index) => (
              <a
                key={step.label}
                href="#"
                className={`flex min-h-[84px] items-center justify-center border-b border-r border-[#d7d7d7] px-3 text-center text-[13px] font-bold uppercase leading-5 md:border-b-0 ${
                  index === 0 ? "bg-[#42587e] text-white" : "bg-white text-[#222]"
                }`}
              >
                {step.label}
              </a>
            ))}
          </div>
          <div className="grid items-center bg-[#42587e] p-6 md:grid-cols-[540px_1fr] md:p-10">
            <Image src={home(active.image)} alt="" width={540} height={475} className="mx-auto h-auto max-w-full" />
            <div className="mt-8 text-white md:mt-0 md:pl-10">
              <h3 className="text-[24px] font-bold">{active.title}</h3>
              <p className="mt-5 text-[17px] leading-8">{active.body}</p>
              <ul className="mt-5 list-disc space-y-2 pl-5 text-[16px] leading-7">
                {active.points.map((point) => <li key={point}>{point}</li>)}
              </ul>
              <p className="mt-5 text-[16px] leading-7">{active.closing}</p>
              <Button href="/free-assessment/" variant="dark">Book a Free Assessment</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CoursesSection() {
  return (
    <section className="bg-[#f7f9fc] px-4 py-16">
      <div className="mx-auto max-w-[1140px]">
        <SectionTitle title="Checkout The Latest Courses">
          <p>It is a long established fact that a reader will be distracted by the readable content</p>
        </SectionTitle>
        <div className="grid gap-7 md:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="overflow-hidden rounded-[4px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              <Image src={home(course.image)} alt="" width={540} height={475} className="h-[245px] w-full object-cover" />
              <div className="p-7">
                <h3 className="text-[21px] font-bold text-[#1d1d1d]">{course.title}</h3>
                <p className="mt-4 min-h-[126px] text-[15px] leading-7 text-[#4f4f4f]">{course.text}</p>
                <a href={course.href} className="mt-5 inline-flex font-bold text-[#42587e]">Read More...</a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button href="/courses/">Browse All Courses</Button>
        </div>
      </div>
    </section>
  );
}

function SupportPanel() {
  return (
    <section className="bg-[#eef4ff] px-4 py-16">
      <div className="mx-auto grid max-w-[1140px] gap-7 md:grid-cols-3">
        {supportCards.map((card) => (
          <article key={card.title} className="rounded-[4px] bg-white p-8 text-center shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
            <Image src={home(card.image)} alt="" width={76} height={73} className="mx-auto h-[76px] w-[76px] object-contain" />
            <h3 className="mt-6 text-[24px] font-bold text-[#42587e]">{card.title}</h3>
            <p className="mt-4 text-[16px] leading-8 text-[#333]">{card.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function FutureCta() {
  return (
    <section className="bg-[#42587e] px-4 py-16 text-white">
      <div className="mx-auto grid max-w-[1140px] items-center gap-10 md:grid-cols-[577px_1fr]">
        <Image src={home("child-academic-img.jpg")} alt="" width={577} height={442} className="rounded-[4px]" />
        <div>
          <h2 className="text-[34px] font-extrabold leading-tight md:text-[42px]">
            Are You Ready To Give Your Child The Future They Deserve?
          </h2>
          <Image src={home("college-midater.png")} alt="" width={193} height={14} className="mt-5 brightness-0 invert" />
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

function AwardsSection() {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-[1140px]">
        <SectionTitle title="Our Awards">
          <p>The leading environment for peak pre & primary school academic performance.</p>
        </SectionTitle>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {awards.map((award) => (
            <article key={award.title} className="rounded-[4px] bg-white p-5 text-center shadow-[0_3px_18px_rgba(0,0,0,0.12)]">
              <Image src={home(award.image)} alt="" width={244} height={371} className="mx-auto h-[250px] w-full object-contain" />
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

function TestimonialsSection() {
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

function Footer() {
  return (
    <footer className="bg-[#5f7397] px-4 pt-16 text-white">
      <div className="mx-auto grid max-w-[1140px] gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Image src={pre("pre_logo.jpg")} alt="Pre Uni College Digital" width={224} height={37} className="h-auto w-[224px]" />
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
        <FooterList title="Company" items={["My account", "About", "Contact", "Franchise", "Faqs", "Book Store", "Own a Pre Uni", "Careers"]} />
        <FooterList title="Links" items={["Blogs", "Privacy Policy", "Terms & Conditions", "Cookie Policy"]} />
        <FooterList title="Locations" items={["Pre Uni College Bellavista", "Pre Uni College Box Hill", "Pre Uni College Kogarah", "Pre Uni College Mardsen Park", "Pre Uni College Minto"]} />
      </div>
      <div className="mx-auto mt-12 flex max-w-[1140px] flex-col items-center justify-between gap-4 border-t border-white/25 py-6 text-sm md:flex-row">
        <p>© 2025 Pre Uni College. All Rights Reserved.</p>
        <div className="flex items-center gap-2">
          <span>Website Designed & Developed by:</span>
          <Image src={home("dslogo-footer.png")} alt="Digital Solutions" width={112} height={17} />
        </div>
      </div>
    </footer>
  );
}

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

function WhatsAppWidget() {
  return (
    <a href="https://wa.me/61415937649" className="fixed bottom-7 right-7 z-50 flex items-center gap-3" aria-label="Chat on WhatsApp">
      <span className="hidden w-[166px] rounded bg-white px-4 py-3 text-sm font-black leading-5 text-[#1d2939] shadow-[0_4px_18px_rgba(0,0,0,0.08)] sm:block">
        Contact us for program options and current deals.
      </span>
      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2db742] text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)]">
        <svg viewBox="0 0 32 32" className="h-9 w-9 fill-current" aria-hidden="true">
          <path d="M16.01 3.2A12.73 12.73 0 0 0 5.2 22.65L3.9 28.8l6.28-1.24A12.73 12.73 0 1 0 16.01 3.2Zm0 22.98c-1.95 0-3.86-.55-5.5-1.6l-.4-.25-3.74.74.78-3.63-.27-.42a10.31 10.31 0 1 1 9.13 5.16Zm5.7-7.72c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.35-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z" />
        </svg>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main className="w-full max-w-full overflow-x-hidden bg-white text-[#1b1b1b]">
      <AnnouncementBar />
      <Header />
      <Hero />
      <WorkSystem />
      <CoursesSection />
      <WorkSystem duplicate />
      <SupportPanel />
      <FutureCta />
      <AwardsSection />
      <TestimonialsSection />
      <Footer />
      <WhatsAppWidget />
    </main>
  );
}
