"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

const PHONE_NUMBER = "+96181963427";

const actions = [
  {
    title: "Build Projects",
    subtitle: "Turn ideas into real products",
    image: "/desktop.jpg",
    message: "Hi, I want to build a project. Can you help me?",
  },
  {
    title: "Get Expert Help",
    subtitle: "Let professionals do it for you",
    image: "/2.jpg",
    message: "Hi, I need expert help for my project.",
  },
];

export default function Hero() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* BACKGROUND GLOWS */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-indigo-300/30 via-purple-200/10 to-transparent blur-[120px]" />
        <div className="absolute top-0 right-[-200px] w-[600px] h-[400px] bg-purple-300/20 blur-[140px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_60%)]" />
      </div>

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto pt-20 px-6">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            What would you like to do?
          </h1>

          <p className="mt-5 text-gray-500 max-w-xl mx-auto">
            Choose your direction. We’ll help you go from idea to execution.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={40}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            speed={900}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            grabCursor={true}
          >
            {actions.map((item, i) => {
              const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
                item.message,
              )}`;

              return (
                <SwiperSlide key={i} className="py-8">
                  <a href={whatsappLink} target="_blank">
                    <div className="relative rounded-2xl overflow-hidden group">
                      {/* IMAGE */}
                      <div className="relative w-full h-[520px] overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover scale-105 group-hover:scale-110 transition duration-[1200ms]"
                        />

                        {/* overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
                      </div>

                      {/* TEXT */}
                      <div className="absolute bottom-0 p-8 text-white max-w-md">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                          {item.title}
                        </h2>

                        <p className="text-white/70 mt-2">{item.subtitle}</p>

                        <div className="mt-6 text-sm text-primary opacity-0 group-hover:opacity-100 transition">
                          Chat on WhatsApp →
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
