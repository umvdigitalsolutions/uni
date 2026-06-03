import Image from "next/image";
import Button from "./Button";
import SectionTitle from "./SectionTitle";
import { assets, courses } from "../data/homePage";

export default function CoursesSection() {
  return (
    <section className="bg-[#f7f9fc] px-4 py-16">
      <div className="mx-auto max-w-[1140px]">
        <SectionTitle title="Checkout The Latest Courses">
          <p>It is a long established fact that a reader will be distracted by the readable content</p>
        </SectionTitle>
        <div className="grid gap-7 md:grid-cols-3">
          {courses.map((course) => (
            <article key={course.title} className="overflow-hidden rounded-[4px] bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
              <Image src={assets.home("welcome-img-1.jpg")} alt="" width={421} height={285} className="h-[245px] w-full object-cover" />
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
