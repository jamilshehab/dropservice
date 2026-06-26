"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PHONE_NUMBER = "+96181963427";

const courses = [
  {
    title: "Mathematics",
    desc: "Algebra, geometry and problem solving.",
    image: "/courses/4.jpg",
    price: "15$",
    message: "I want help with Mathematics course",
  },
  {
    title: "Physics",
    desc: "Forces, motion and real-world physics concepts.",
    image: "/courses/3.jpg",
    price: "20$",
    message: "I want help with Physics course",
  },
  {
    title: "Programming",
    desc: "Learn coding and build real projects.",
    image: "/courses/2.jpg",
    price: "25$",
    message: "I want help with Programming course",
  },
  {
    title: "English",
    desc: "Grammar, writing and speaking skills.",
    image: "/courses/3.jpg",
    price: "10$",
    message: "I want help with English course",
  },
  {
    title: "Arabic",
    desc: "Reading, writing and language improvement.",
    image: "/courses/1.jpg",
    price: "10$",
    message: "I want help with Arabic course",
  },
];

export default function CourseComponent() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-20 relative overflow-hidden" id="courses">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-sky-50 to-violet-100 -z-10" />

      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl -z-10" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl -z-10" />

      {/* CONTENT WRAPPER (IMPORTANT FIX) */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-1 text-sm font-medium text-neutral-600">
            Learning Courses
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
            Courses designed
            <br />
            for real academic success
          </h2>

          <p className="mt-5 text-lg text-gray-600 leading-7">
            Choose a course and get instant help via WhatsApp.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="mt-10 flex items-center justify-end gap-3">
          <button
            ref={prevRef}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            ref={nextRef}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white hover:bg-neutral-50 transition"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* SLIDER */}
        <div className="mt-8">
          <Swiper
            modules={[Autoplay, Navigation]}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            spaceBetween={28}
            slidesPerView={1.1}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 3 },
            }}
            onBeforeInit={(swiper) => {
              // @ts-ignore
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-ignore
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
          >
            {courses.map((course) => {
              const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                course.message,
              )}`;

              return (
                <SwiperSlide key={course.title}>
                  <a href={whatsappLink} target="_blank">
                    <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                      {/* IMAGE */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={course.image}
                          alt={course.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                          {course.title}
                        </h3>

                        <p className="mt-3 text-sm text-gray-600 leading-6">
                          {course.desc}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm font-medium text-primary">
                            Get help →
                          </span>

                          <span className="text-xs text-gray-400">
                            Instant support
                          </span>
                        </div>
                      </div>
                    </div>
                  </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
