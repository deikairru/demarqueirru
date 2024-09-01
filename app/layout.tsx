import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import StarBackground from "@/components/StarBackground";
import Header from "@/components/sections/Header";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demarqueirru",
  description: "De Marque Portfolio Website",
  authors: { name: "Deikairru", url: "https://deika.my.id/" },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <div
          className={`${manrope.className} antialiased bg-[#050719] text-white`}
        >
          <StarBackground />
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
