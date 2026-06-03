import Image from "next/image";

const asset = (name) => `/preuni-assets/${name}`;

const stats = [
  { icon: "pre-icon-4.png", value: "25,000+", text: "Students Helped" },
  { icon: "pre-icon-3.png", value: "20+ Years", text: "Proven Results" },
  { icon: "pre-icon-2.png", value: "Structured", text: "Learning System" },
  { icon: "pre-icon-1.png", value: "Parent Support", text: "Included" },
];

const familiarItems = [
  { icon: "pre-uni-icon-10.png", title: "Understands but can't apply", text: "Struggles to use knowledge in problem-solving or exams." },
  { icon: "pre-uni-icon-11.png", title: "Writing lacks structure", text: "Finds it hard to adapt across essays, reports and formats." },
  { icon: "pre-uni-icon-12.png", title: "Weak grammar and vocabulary", text: "Ideas are there, but clarity and expression are missing." },
  { icon: "pre-uni-icon-13.png", title: "Poor time and exam skills", text: "Runs out of time or doesn't know how to approach tests." },
  { icon: "pre-uni-icon-14.png", title: "Falling behind in OC and Selective", text: "Needs targeted practice to bridge gaps fast." },
  { icon: "pre-uni-icon-15.png", title: "Capable but underperforming", text: "Knows the content but lacks consistency under pressure." },
];

const successSteps = [
  { icon: "pre-uni-icon-16.png", number: "01", title: "Free Learning\nCheck", text: "Online or in-centre\nassessment" },
  { icon: "pre-uni-icon-17.png", number: "02", title: "Personalised\nLearning Plan", text: "Tailored to your\nchild's needs" },
  { icon: "pre-uni-icon-18.png", number: "03", title: "Guided\nLearning", text: "With Human + AI\nsupport" },
  { icon: "pre-uni-icon-19.png", number: "04", title: "Skill\nBuilding", text: "Strengthen weak\nareas" },
  { icon: "pre-uni-icon-20.png", number: "05", title: "Testing\n& Tracking", text: "Regular tests and\nprogress reports" },
  { icon: "pre-uni-icon-21.png", number: "06", title: "Results &\nConfidence", text: "Better marks,\nstronger future" },
];

const programs = [
  { icon: "pre-uni-icon-22.png", title: "EWMT Core Program" },
  { icon: "pre-uni-icon-23.png", title: "OC Preparation (Year 3-4)" },
  { icon: "pre-uni-icon-24.png", title: "Selective Preparation (Year 5-6)" },
  { icon: "pre-uni-icon-25.png", title: "Years 7-10 (English, Maths, Science)" },
  { icon: "pre-uni-icon-26.png", title: "One-on-One Coaching" },
  { icon: "pre-uni-icon-1.png", title: "Writing Excellence" },
  { icon: "pre-uni-icon-2.png", title: "Small Group Live Classes" },
  { icon: "pre-uni-icon-3.png", title: "Free Homework Help & Support" },
];

const reasons = [
  { icon: "pre-uni-icon-4.png", title: "20+ Years of Proven Results", text: "Helping students succeed for decades." },
  { icon: "pre-uni-icon-5.png", title: "25,000+ Students Trained", text: "Trusted by thousands of families." },
  { icon: "pre-uni-icon-6.png", title: "Structured Learning System", text: "Clear roadmap with real progress." },
  { icon: "pre-uni-icon-7.png", title: "Dedicated Parent Support", text: "Regular updates and guidance." },
  { icon: "pre-uni-icon-8.png", title: "Recorded Class Sessions", text: "Access lessons anytime for revision." },
];

const testimonials = [
  {
    quote: "My daughter improved her writing confidence in just a few weeks. The teachers were supportive, structured, and made learning enjoyable.",
    author: "Sarah M",
  },
  {
    quote: "The personalised feedback and clear learning plan made a huge difference to my son's marks and mindset. We finally saw real progress.",
    author: "James L",
  },
  {
    quote: "Highly recommend Pre Uni College for parents wanting genuine academic results. My child feels more confident and motivated than ever.",
    author: "Priya K",
  },
];

function Button({ children, href = "#book", variant = "navy" }) {
  return (
    <a
      href={href}
      className={`inline-flex min-h-16 items-center justify-center rounded-lg px-8 text-lg font-extrabold transition ${
        variant === "cyan"
          ? "bg-[#00b0df] text-white hover:bg-[#079fca]"
          : "bg-[#022e63] text-white hover:bg-[#063b7c]"
      }`}
    >
      {children}
    </a>
  );
}

function Field({ label, required = false }) {
  return (
    <label className="block">
      <span className="text-base font-extrabold text-[#3f4e6a]">
        {label}
        {required && <em className="ml-1 text-sm font-semibold text-[#b46d46]">(Required)</em>}
      </span>
      <input
        aria-label={label}
        className="mt-3 h-14 w-full rounded-lg border border-[#d9dce1] bg-white px-4 text-base outline-none transition focus:border-[#00b0df] focus:ring-2 focus:ring-[#00b0df]/15"
      />
    </label>
  );
}

function SectionHeading({ title, text, light = false }) {
  return (
    <div className="mx-auto max-w-5xl text-center">
      <h2 className={`text-4xl font-black leading-tight tracking-tight md:text-5xl ${light ? "text-white" : "text-[#022e63]"}`}>
        {title}
      </h2>
      {text && <p className={`mt-6 text-xl leading-8 ${light ? "text-white" : "text-black"}`}>{text}</p>}
    </div>
  );
}

function BookingForm() {
  return (
    <aside id="book" className="overflow-hidden rounded-[20px] bg-white shadow-[0_0_14px_rgba(0,0,0,0.12)]">
      <div className="bg-[#022e63] px-10 py-12 text-center">
        <h2 className="text-4xl font-black leading-tight text-white md:text-5xl">
          Claim Your<br />Free Learning Check
        </h2>
      </div>
      <form className="space-y-6 px-10 py-12">
        <Field label="Parent Name" required />
        <Field label="Phone Number" required />
        <Field label="Email" required />
        <Field label="Child Year" />
        <Field label="Program Interest" />
        <button className="mt-2 h-16 w-full rounded-lg bg-[#f4b400] text-lg font-black text-black transition hover:bg-[#e9aa00]">
          Claim My Free Check
        </button>
      </form>
    </aside>
  );
}

function WhatsAppWidget() {
  return (
    <a href="https://wa.me/61415937649" className="fixed bottom-9 right-7 z-50 flex items-center gap-3" aria-label="Chat on WhatsApp">
      <span className="hidden w-[156px] rounded bg-white px-4 py-3 text-sm font-black leading-5 text-[#1d2939] shadow-[0_4px_18px_rgba(0,0,0,0.08)] sm:block">
        Need Help? <strong>Chat with us</strong>
      </span>
      <span className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#2db742] text-white shadow-[0_5px_14px_rgba(0,0,0,0.28)]">
        <svg viewBox="0 0 32 32" className="h-9 w-9 fill-current" aria-hidden="true">
          <path d="M16.01 3.2A12.73 12.73 0 0 0 5.2 22.65L3.9 28.8l6.28-1.24A12.73 12.73 0 1 0 16.01 3.2Zm0 22.98c-1.95 0-3.86-.55-5.5-1.6l-.4-.25-3.74.74.78-3.63-.27-.42a10.31 10.31 0 1 1 9.13 5.16Zm5.7-7.72c-.31-.16-1.84-.9-2.12-1-.29-.11-.5-.16-.71.16-.21.31-.82 1-.99 1.21-.18.21-.36.24-.67.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.55-1.85-1.73-2.16-.18-.31-.02-.48.14-.64.14-.14.31-.36.47-.54.16-.18.21-.31.31-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.35-.25-.61-.51-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.39 4.77.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.84-.75 2.1-1.47.26-.72.26-1.34.18-1.47-.08-.13-.29-.21-.6-.37Z" />
        </svg>
      </span>
    </a>
  );
}

export default function LandingPage() {
  return (
    <main className="overflow-x-hidden bg-[#fbfdfe] text-black">
      <section className="relative flex min-h-[760px] items-center bg-[url('/preuni-assets/hero-img.jpg')] bg-cover bg-top bg-no-repeat">
        <div className="absolute inset-0 bg-white/50" />
        <div className="relative mx-auto w-full max-w-[1280px] px-6 py-20 md:px-10">
          <div className="max-w-[650px]">
            <Image src={asset("pre_logo.jpg")} alt="Pre Uni College" width={315} height={52} className="mb-8 h-auto w-[315px] object-contain" priority />
            <h1 className="text-[40px] font-black leading-[1.08] tracking-tight text-[#022e63] sm:text-5xl md:text-[64px]">
              Is Your Child Getting the Right Support to Succeed at School?
            </h1>
            <p className="mt-8 text-xl leading-9 text-black sm:text-2xl sm:leading-10">
              Personalised support in Reading, Writing, Maths and Thinking Skills to help your child build confidence, close learning gaps and perform better at school.
            </p>
            <div className="mt-8 flex flex-col gap-5 sm:flex-row">
              <Button>Book Free Learning Check</Button>
              <Button href="https://wa.me/61415937649" variant="cyan">Chat on WhatsApp</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#fbfdfe] px-6 py-5 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[590px_625px] lg:items-start lg:justify-between">
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((item) => (
              <article key={item.value} className="flex min-h-[248px] flex-col items-center justify-center rounded-xl bg-white p-8 text-center shadow-[0_0_14px_rgba(0,0,0,0.18)]">
                <Image src={asset(item.icon)} alt="" width={42} height={42} className="h-11 w-11 object-contain" />
                <h3 className="mt-6 text-2xl font-black text-[#3f4e6a]">{item.value}</h3>
                <p className="mt-4 text-lg leading-7">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="lg:-mt-[360px]">
            <BookingForm />
          </div>
        </div>
      </section>

      <section className="bg-[#fbfdfe] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-12 lg:grid-cols-[613px_1fr] lg:items-center">
          <Image src={asset("parent-img.jpg")} alt="Concerned parent" width={613} height={816} className="h-[816px] w-full rounded-[20px] object-cover object-center max-lg:h-[520px]" />
          <div>
            <h2 className="text-4xl font-black leading-tight text-[#022e63] md:text-5xl">Does This Sound Familiar?</h2>
            <p className="mt-7 text-xl leading-9">
              Many parents feel concerned that their child isn&apos;t reaching their full potential at school, even when they know they&apos;re capable of more. If this sounds familiar, you&apos;re not alone.
            </p>
            <div className="mt-9 grid gap-5 sm:grid-cols-2">
              {familiarItems.map((item) => (
                <article key={item.title} className="min-h-[205px] rounded-xl bg-white p-7 shadow-[0_0_14px_rgba(0,0,0,0.16)]">
                  <Image src={asset(item.icon)} alt="" width={32} height={32} className="h-8 w-8 object-contain" />
                  <h3 className="mt-4 text-2xl font-black leading-tight text-[#3f4e6a]">{item.title}</h3>
                  <p className="mt-4 text-lg leading-8">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-white px-6 py-24 md:px-10">
        <SectionHeading title="Our Six Step Success System" text="A structured system designed to help your child grow, improve and succeed." />
        <div className="mx-auto mt-24 grid max-w-[1280px] grid-cols-2 gap-y-14 md:grid-cols-3 xl:grid-cols-6">
          {successSteps.map((step) => (
            <article key={step.number} className="text-center">
              <p className="text-2xl font-black text-[#002d38]">{step.number}</p>
              <Image src={asset(step.icon)} alt="" width={116} height={116} className="mx-auto mt-6 h-[105px] w-[105px] object-contain md:h-[116px] md:w-[116px]" />
              <h3 className="mt-6 whitespace-pre-line text-2xl font-black leading-tight text-[#3f4e6a]">{step.title}</h3>
              <p className="mt-7 whitespace-pre-line text-lg leading-8">{step.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Button>Book Free Learning Check</Button>
        </div>
      </section>

      <section className="bg-[#0a356a] px-6 py-24 md:px-10">
        <SectionHeading title="Programs for Every Stage" text="A structured system designed to help your child grow, improve and succeed." light />
        <div className="mx-auto mt-12 grid max-w-[1280px] gap-6 md:grid-cols-2">
          {programs.map((program) => (
            <article key={program.title} className="flex min-h-[194px] items-center gap-8 rounded-xl bg-white px-11 py-8">
              <Image src={asset(program.icon)} alt="" width={100} height={100} className="h-[100px] w-[100px] shrink-0 object-contain" />
              <div>
                <h3 className="text-2xl font-black leading-tight text-[#3f4e6a]">{program.title}</h3>
                <p className="mt-2 text-xl">Tailored to your child&apos;s needs</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fbfdfe] px-6 py-20 md:px-10">
        <div className="mx-auto grid max-w-[1280px] gap-14 lg:grid-cols-[560px_1fr] lg:items-center">
          <Image src={asset("ebook-writing-formula-2.png")} alt="The Ultimate Writing Formula for High Marks" width={560} height={644} className="mx-auto max-h-[720px] w-full max-w-[560px] object-contain" />
          <div>
            <h2 className="text-4xl font-black leading-tight text-[#022e63] md:text-5xl">The Ultimate Writing Formula for High Marks</h2>
            <p className="mt-8 text-xl leading-8">Learn the simple framework top students use to write high-scoring responses</p>
            <form className="mt-8 space-y-6">
              <Field label="Name" required />
              <Field label="Email" required />
              <Field label="Phone" required />
              <button className="h-16 w-full rounded-lg bg-[#f4b400] text-lg font-black text-black transition hover:bg-[#e9aa00]">
                Send Me The Free Guide
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24 md:px-10">
        <SectionHeading title="Why Thousands of Families Choose Pre Uni College" text="Trusted by families for over 20 years, we combine proven teaching systems, expert educators, and personalised support to help students achieve stronger academic results with confidence." />
        <div className="mx-auto mt-20 grid max-w-[1280px] gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((reason) => (
            <article key={reason.title} className="grid grid-cols-[64px_1fr] gap-5">
              <Image src={asset(reason.icon)} alt="" width={64} height={64} className="mt-2 h-16 w-16 object-contain" />
              <div>
                <h3 className="text-2xl font-black leading-tight text-[#3f4e6a]">{reason.title}</h3>
                <p className="mt-5 text-lg leading-8">{reason.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#fbfdfe] px-6 pb-24 pt-4 md:px-10">
        <SectionHeading title="What Parents Are Saying" />
        <div className="mx-auto mt-14 grid max-w-[1140px] gap-7 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article key={item.author} className="flex min-h-[410px] flex-col items-center justify-center rounded-xl bg-white p-10 text-center">
              <Image src={asset("pre-uni-icon-9.png")} alt="" width={58} height={71} className="h-[71px] w-[58px] object-contain" />
              <p className="mt-9 text-xl leading-9">&ldquo;{item.quote}&rdquo;</p>
              <h3 className="mt-7 text-2xl font-black text-[#002d38]">{item.author}</h3>
            </article>
          ))}
        </div>
      </section>

      <footer className="bg-[#0a356a] px-6 py-24 text-center md:px-10">
        <h2 className="mx-auto max-w-[1120px] text-4xl font-black leading-tight text-white md:text-5xl">
          Limited Free Learning Checks Available This Week
        </h2>
        <p className="mt-7 text-xl text-white">Spots fill quickly due to high demand. Don&apos;t miss out!</p>
        <div className="mt-8 flex flex-col justify-center gap-5 sm:flex-row">
          <Button>Book Free Learning Check</Button>
          <Button href="https://wa.me/61415937649" variant="cyan">Chat on WhatsApp</Button>
        </div>
        <p className="mt-24 text-lg text-white">©2026 Pre Uni College. All rights reserved.</p>
      </footer>

      <WhatsAppWidget />
    </main>
  );
}
