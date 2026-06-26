import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import FloatingSocials from "./components/common/SocialMedia";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "TU Brain | Business & Professional Services",
  description:
    "TU Brain provides a wide range of business and professional services to help individuals and companies grow. All Services. One Partner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} antialiased`}>
      <body className="">
        <Header />
        {children}
        <Footer />
        <FloatingSocials />
      </body>
    </html>
  );
}
