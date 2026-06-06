import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Modern Sommelier | Fine Dining Experience",
    template: "%s | The Modern Sommelier",
  },
  description:
    "A sanctuary for the senses. Crafting moments through the art of fine curation. Experience architectural gastronomy at The Modern Sommelier.",
  keywords: [
    "fine dining",
    "restaurant",
    "sommelier",
    "wine",
    "gastronomy",
    "reservations",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Toaster position="bottom-center" />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
