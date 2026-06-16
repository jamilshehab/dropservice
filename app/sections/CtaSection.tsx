export default function CTA() {
  const PHONE_NUMBER = "+96181963427";

  const whatsappLink = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(
    "Hi! I want to talk to you about your services.",
  )}`;

  return (
    <section className="relative py-28 overflow-hidden" id="contact">
      {/* background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-500/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* badge */}
        <div className="inline-flex px-4 py-1 rounded-full border bg-white text-sm text-gray-600 mb-6">
          Ready when you are
        </div>

        {/* headline */}
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Let’s build something together
        </h2>

        {/* subtitle */}
        <p className="mt-5 text-gray-500 max-w-2xl mx-auto leading-7">
          Talk to us instantly on WhatsApp and we’ll help you choose the right
          service or solution.
        </p>

        {/* CTA */}
        <div className="mt-10 flex items-center justify-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[var(--color-primary)] text-white px-6 py-3 rounded-xl hover:opacity-90 transition"
          >
            Talk to us
          </a>
        </div>
      </div>
    </section>
  );
}
