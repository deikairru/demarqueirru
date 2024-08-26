import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import "./globals.css";
import StarBackground from "@/components/StarBackground";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Demarqueirru",
  description: "De Marque Neirru",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={`${manrope.className} antialiased bg-[#050719]`}>
          <StarBackground />
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  );
}
