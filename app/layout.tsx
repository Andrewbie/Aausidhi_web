import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://aausidhihealthcare.vercel.app"),
  title: "Aausidhi Healthcare | Quality Medicines, Trusted Care",
  description:
    "Aausidhi Healthcare is a trusted pharmaceutical company providing quality medicines across India. PCD Pharma Franchise, Third-Party Manufacturing and more.",
  keywords:
    "Aausidhi Healthcare, pharma company, PCD franchise, medicines, healthcare India",
  verification: {
    google: "FTqetvVfIwa2mD9-SlMSTJJ2eDxwi50YGj8Oqo4ulgQ",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
