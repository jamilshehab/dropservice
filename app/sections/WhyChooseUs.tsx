import {
  GraduationCap,
  BriefcaseBusiness,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "High-Quality Learning",
    description:
      "Access carefully crafted courses designed to teach practical, real-world skills.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Professional Services",
    description:
      "Connect with trusted experts who can help transform your ideas into reality.",
  },
  {
    icon: Sparkles,
    title: "Premium Experience",
    description:
      "Enjoy a clean, distraction-free platform focused on simplicity and productivity.",
  },
  {
    icon: ShieldCheck,
    title: "Built on Trust",
    description:
      "Every course and service is selected with quality, transparency, and reliability in mind.",
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden py-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-indigo-100 via-sky-50 to-violet-100" />

      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-indigo-400/30 blur-3xl" />

      <div className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-fuchsia-300/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-neutral-200 bg-white px-4 py-1 text-sm font-medium text-neutral-600">
            Built Around Your Journey
          </span>

          <h2 className="mt-6 text-4xl font-semibold tracking-tight md:text-5xl">
            Everything you need to learn,
            <br />
            build, and grow.
          </h2>

          <p className="mt-5 text-lg leading-8 text-neutral-500">
            Whether you're looking to gain new skills or hire professionals to
            get the job done, our platform brings education and execution
            together in one seamless experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-3xl border border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 transition group-hover:scale-105">
                  <Icon className="h-7 w-7 text-indigo-600" />
                </div>

                <h3 className="mt-8 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-sm leading-7 text-neutral-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
