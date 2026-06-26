"use client";

import Link from "next/link";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp */}
      <Link
        href="https://wa.me/96181963427"
        target="_blank"
        aria-label="WhatsApp"
        className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <FaWhatsapp size={22} />
      </Link>

      {/* Facebook */}
      <Link
        href="https://www.facebook.com/TuBrainCenter"
        target="_blank"
        aria-label="Facebook"
        className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <FaFacebookF size={18} />
      </Link>

      {/* Instagram */}
      <Link
        href="https://instagram.com/tu.brain"
        target="_blank"
        aria-label="Instagram"
        className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-pink-500 to-purple-600 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <FaInstagram size={20} />
      </Link>

      {/* LinkedIn */}
      <Link
        href="https://www.linkedin.com/company/tubrain/"
        target="_blank"
        aria-label="LinkedIn"
        className="w-12 h-12 rounded-full bg-[#0A66C2] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <FaLinkedinIn size={20} />
      </Link>
    </div>
  );
}
