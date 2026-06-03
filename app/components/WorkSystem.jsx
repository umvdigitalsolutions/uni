import Image from "next/image";
import Button from "./Button";
import { assets, workSteps } from "../data/homePage";

export default function WorkSystem() {
  const active = workSteps[0];

  return (
    <section className="bg-white px-4 pb-16 pt-16">
      <div className="mx-auto max-w-[1140px]">
        <div className="mx-auto mb-10 max-w-4xl text-center">
          <h2 className="break-words text-[24px] font-extrabold leading-tight text-[#1b1b1b] sm:text-[34px] md:text-[42px]">
            Six Steps to <span className="block text-[#42587e] sm:inline">Academic Success!</span>
          </h2>
          <h2 className="mt-1 break-words text-[24px] font-extrabold leading-tight text-[#1b1b1b] sm:text-[34px] md:text-[42px]">
            How We <span className="text-[#42587e]">Work</span>
          </h2>
          <p className="mx-auto mt-5 max-w-[320px] break-words text-[16px] leading-8 text-[#333] sm:max-w-none sm:text-[17px]">
            Our PRIME CONCERN and GOAL is YOUR CHILD&apos;S SUCCESS.
          </p>
          <p className="mx-auto max-w-[320px] break-words text-[16px] leading-8 text-[#333] sm:max-w-none sm:text-[17px]">
            Your child&apos;s commitment to learning and our passion for teaching make success INEVITABLE.
          </p>
        </div>
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
            <Image src={assets.home(active.image)} alt="" width={540} height={475} className="mx-auto h-auto max-w-full" />
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
