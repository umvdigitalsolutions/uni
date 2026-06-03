const familiarItems = [
  {
    title: "Understands but can’t apply",
    subtitle: "Struggles to use knowledge in problem-solving or exams.",
  },
  {
    title: "Writing lacks structure",
    subtitle: "Finds it hard to adapt across essays, reports and formats.",
  },
  {
    title: "Weak grammar and vocabulary",
    subtitle: "Ideas are there, but clarity and expression are missing.",
  },
  {
    title: "Poor time and exam skills",
    subtitle: "Runs out of time or doesn’t know how to approach tests.",
  },
  {
    title: "Falling behind in OC and NAPLAN",
    subtitle: "Needs targeted practice to bridge gaps fast.",
  },
  {
    title: "Capable but not confident",
    subtitle: "Knows the content but lacks consistency under pressure.",
  },
];

const stepItems = [
  { number: "01", title: "Free Learning Check", subtitle: "Online or in-centre assessment" },
  { number: "02", title: "Personalised Learning Plan", subtitle: "Tailored to your child’s needs" },
  { number: "03", title: "Guided Learning", subtitle: "With human + AI support" },
  { number: "04", title: "Skill Building", subtitle: "Strengthen weak areas" },
  { number: "05", title: "Testing & Tracking", subtitle: "Regular tests and progress reports" },
  { number: "06", title: "Results & Confidence", subtitle: "Better marks, stronger future" },
];

const programItems = [
  { title: "EWMT Core Program", subtitle: "Tailored to your child’s needs" },
  { title: "OC Preparation (Year 3-4)", subtitle: "Tailored to your child’s needs" },
  { title: "Selective Preparation (Year 5-6)", subtitle: "Tailored to your child’s needs" },
  { title: "Years 7–10 (English, Maths, Science)", subtitle: "Tailored to your child’s needs" },
  { title: "One-on-One Coaching", subtitle: "Tailored to your child’s needs" },
  { title: "Writing Excellence", subtitle: "Tailored to your child’s needs" },
];

const testimonials = [
  {
    quote: "My daughter improved her writing confidence in just a few weeks. The teachers were supportive, structured, and made learning enjoyable.",
    author: "Sarah M",
  },
  {
    quote: "The personalised feedback and clear learning plan made a huge difference to my son’s marks and mindset. We finally saw real progress.",
    author: "James L",
  },
  {
    quote: "Highly recommend Pre Uni College for parents wanting genuine academic results. My child feels more confident and motivated than ever.",
    author: "Priya K",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_top_right,_rgba(16,185,129,0.16),transparent_26%)] px-6 py-12 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex rounded-full bg-sky-100 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-sky-700 shadow-sm shadow-sky-200/80">
              Pre Uni College
            </span>
            <div className="space-y-5">
              <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                Is Your Child Getting the Right Support to Succeed at School?
              </h1>
              <p className="max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
                Personalised support in Reading, Writing, Maths and Thinking Skills to help your child build confidence, close learning gaps and perform better at school.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#book"
                className="inline-flex items-center justify-center rounded-full bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Book Free Learning Check
              </a>
              <a href="#chat"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/60">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Claim Your Free Learning Check</p>
              <h2 className="mt-6 text-3xl font-semibold text-slate-950">Free assessment and personalised plan</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Fill in your details and we’ll contact you to book a quick learning check for your child.
              </p>
              <form className="mt-8 space-y-4" id="book">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Parent Name <span className="text-rose-500">(Required)</span></span>
                  <input type="text" placeholder="Your name"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Phone Number <span className="text-rose-500">(Required)</span></span>
                  <input type="tel" placeholder="e.g. 0412 345 678"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email <span className="text-rose-500">(Required)</span></span>
                  <input type="email" placeholder="example@mail.com"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Child Year</span>
                  <input type="text" placeholder="Year level"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Program Interest</span>
                  <input type="text" placeholder="e.g. Writing, Maths, OC prep"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
                  />
                </label>
                <button type="submit"
                  className="mt-4 w-full rounded-full bg-amber-400 px-6 py-4 text-base font-semibold text-slate-950 transition hover:bg-amber-300"
                >
                  Claim My Free Check
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "25,000+", subtitle: "Students Helped" },
            { label: "20+ Years", subtitle: "Proven Results" },
            { label: "Structured", subtitle: "Learning System" },
            { label: "Parent Support", subtitle: "Included" },
          ].map((item) => (
            <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm shadow-slate-200/40">
              <p className="text-3xl font-semibold text-sky-700">{item.label}</p>
              <p className="mt-2 text-sm text-slate-600">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] bg-slate-900 px-6 py-10 text-white sm:px-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.22),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.2),transparent_30%)]" />
              <div className="relative z-10">
                <span className="mb-3 inline-flex rounded-full bg-slate-800/80 px-3 py-1 text-sm uppercase tracking-[0.24em] text-sky-200">
                  Does This Sound Familiar?
                </span>
                <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  Many parents feel concerned that their child isn’t reaching their full potential at school, even when they know they’re capable of more.
                </h2>
                <p className="mt-5 max-w-xl text-base leading-8 text-slate-200">
                  If this sounds familiar, you’re not alone. We help students build confidence and stronger results through clear learning routines and expert support.
                </p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {familiarItems.map((item) => (
                <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/40">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Six step success</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Our Six Step Success System</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-600">
              A structured system designed to help your child grow, improve and succeed.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {stepItems.map((item) => (
              <div key={item.number} className="rounded-[28px] border border-slate-200 bg-white p-8 text-center shadow-sm shadow-slate-200/40">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sky-600 text-white">
                  <span className="text-lg font-bold">{item.number}</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-950">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="#book" className="inline-flex rounded-full bg-slate-950 px-8 py-4 text-base font-semibold text-white transition hover:bg-slate-800">
              Book Free Learning Check
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-16 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Programs for every stage</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">Programs for Every Stage</h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">
              A structured system designed to help your child grow, improve and succeed.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {programItems.map((item) => (
              <div key={item.title} className="rounded-[28px] border border-slate-800 bg-slate-900 p-8 shadow-lg shadow-slate-950/20">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-sky-500 text-white">
                  <span className="text-lg font-semibold">✓</span>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{item.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">Parent success stories</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">What Parents Are Saying</h2>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm shadow-slate-200/40">
                <div className="text-4xl text-sky-600">“</div>
                <p className="mt-4 text-sm leading-7 text-slate-700">{item.quote}</p>
                <p className="mt-6 font-semibold text-slate-950">{item.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-6 py-20 text-white sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Limited availability</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Limited Free Learning Checks Available This Week</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-slate-300">Spots fill quickly due to high demand. Don’t miss out!</p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#book" className="inline-flex rounded-full bg-slate-200 px-8 py-4 text-base font-semibold text-slate-950 transition hover:bg-slate-100">
              Book Free Learning Check
            </a>
            <a href="#chat" className="inline-flex rounded-full border border-slate-200 bg-transparent px-8 py-4 text-base font-semibold text-white transition hover:bg-white/10">
              Chat on WhatsApp
            </a>
          </div>
          <p className="mt-8 text-sm text-slate-400">©2026 Pre Uni College. All rights reserved.</p>
        </div>
      </section>

      <div className="fixed bottom-6 right-6 z-50 rounded-full border border-slate-200 bg-white/95 px-4 py-3 shadow-2xl shadow-slate-900/10 backdrop-blur-xl sm:px-5">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-xl text-white shadow-lg shadow-emerald-500/25">
            <span>💬</span>
          </div>
          <div className="hidden sm:block">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Need Help?</p>
            <p className="text-sm font-semibold text-slate-900">Chat with us</p>
          </div>
        </div>
      </div>
    </main>
  );
}
