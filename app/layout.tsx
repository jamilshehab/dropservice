import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Drop Service Platform",
  description: "Learn. Build. Execute.",
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
      </body>
    </html>
  );
}
