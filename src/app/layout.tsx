import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import constants from "./utils/constants";
import TopNav from "./../components/TopNav";
import Footer from "./../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: constants?.brandName,
  description:
    "Shri Ganga Sagar Borewell is an borewell agent in Harda District of Madhya Pradesh",
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
        <Footer></Footer>
      </body>
    </html>
  );
}
