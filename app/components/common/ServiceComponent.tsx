"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PHONE_NUMBER = "+96181963427";

const services = [
  {
    title: "Social Media Promotion",
    desc: "Grow your reach and build a strong online presence across platforms.",
    image: "/social-service.jpg",
    message: "I want Social Media Promotion service",
  },
  {
    title: "Mental Wellness Support",
    desc: "Guidance to improve focus, confidence, and emotional balance.",
    image: "/service-physic.jpg",
    message: "I want Mental Wellness Support service",
  },
  {
    title: "Web Development",
    desc: "Modern, fast and scalable websites built for real impact.",
    image: "/web-service.jpg",
    message: "I want a Web Development service",
  },
  {
    title: "Content Creation",
    desc: "Engaging content that helps you grow audience and engagement.",
    image: "/content-creation.jpg",
    message: "I want Content Creation service",
  },
  {
    title: "Logo Design",
    desc: "Simple, powerful logos that define your brand identity.",
    image: "/logo-design.jpg",
    message: "I want Logo Design service",
  },
  {
    title: "Video Editing",
    desc: "High-quality editing for reels, ads, and short-form content.",
    image: "/video-editing.jpg",
    message: "I want Video Editing service",
  },
];

export default function ServiceComponent() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="py-28 bg-white" id="services">
      <div className="mx-auto max-w-7xl px-6">
        {/* HEADER */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-1 text-sm font-medium text-neutral-600">
            Premium Services
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-tight">
            Done-for-you services
            <br />
            built for real growth
          </h2>

          <p className="mt-5 text-lg text-gray-500 leading-7">
            Choose a service and connect instantly with our team on WhatsApp.
          </p>
        </div>

        {/* NAVIGATION BUTTONS */}
        <div className="mt-10 flex items-center  justify-end gap-3">
          <button
            ref={prevRef}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
          >
            <ChevronLeft size={18} />
          </button>

          <button
            ref={nextRef}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 hover:bg-neutral-50 transition"
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
              // connect custom buttons
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
            {services.map((service) => {
              const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                service.message,
              )}`;

              return (
                <SwiperSlide key={service.title}>
                  <a href={whatsappLink} target="_blank">
                    <div className="group overflow-hidden rounded-3xl border border-neutral-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
                      {/* IMAGE */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                      </div>

                      {/* CONTENT */}
                      <div className="p-6">
                        <h3 className="text-xl font-semibold tracking-tight">
                          {service.title}
                        </h3>

                        <p className="mt-3 text-sm text-gray-500 leading-6">
                          {service.desc}
                        </p>

                        <div className="mt-6 flex items-center justify-between">
                          <span className="text-sm font-medium text-green-600">
                            Chat on WhatsApp →
                          </span>

                          <span className="text-xs text-gray-400">
                            Instant response
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
