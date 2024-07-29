import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import constants from "./utils/constants";
import TopNav from "./../components/TopNav";
import Footer from "./../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: constants?.brandName,
    template: `%s - ${constants?.brandName}`,
  },
  description: "Get in touch for borewell related work",
  twitter: {
    card: "summary_large_image"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TopNav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
