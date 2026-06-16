import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        {/* TOP SECTION */}
        <div className="grid gap-12 md:grid-cols-4">
          {/* BRAND */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold tracking-tight">
              Your Platform Name
            </h3>

            <p className="mt-4 text-sm text-neutral-500 leading-6 max-w-md">
              A modern platform combining premium courses and done-for-you
              services. Learn new skills, or get expert help — all in one place.
            </p>

            <p className="mt-6 text-sm text-neutral-400">
              Built for creators, entrepreneurs, and ambitious learners.
            </p>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Explore</h4>

            <div className="mt-4 space-y-3 text-sm">
              <Link
                href="/courses"
                className="block text-neutral-500 hover:text-neutral-900"
              >
                Courses
              </Link>

              <Link
                href="/services"
                className="block text-neutral-500 hover:text-neutral-900"
              >
                Services
              </Link>

              <Link
                href="/about"
                className="block text-neutral-500 hover:text-neutral-900"
              >
                About
              </Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h4 className="text-sm font-semibold text-neutral-900">Contact</h4>

            <div className="mt-4 space-y-3 text-sm text-neutral-500">
              <p>WhatsApp Support Available</p>
              <p>Fast Response Team</p>
              <p>24/7 Inquiry Handling</p>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 border-t border-neutral-200" />

        {/* BOTTOM BAR */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Your Platform Name. All rights
            reserved.
          </p>

          {/* CTA */}
          <a
            href="mailto:shehabjamil20@gmail.com"
            className="text-sm text-slate-600"
          >
            Developed By Jamil Shehab
          </a>
        </div>
      </div>
    </footer>
  );
}
