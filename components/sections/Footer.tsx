import React from "react";
import ArrowUpRight from "@/components/assets/icons/arrow-up-right.svg";

const footerLink = [
  {
    title: "Github",
    src: "https://github.com/deikairru",
  },
  {
    title: "Instagram",
    src: "https://www.instagram.com/deikairru/",
  },
  {
    title: "Twitter",
    src: "https://x.com/deikairru",
  },
  {
    title: "Website",
    src: "https://www.deika.my.id/",
  },
];

const Footer = () => {
  return (
    <footer className="relative z-0 overflow-x-clip">
      <div className="absolute bg-violet-400/40 h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10" />
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between items-center border-t border-white/15 py-6 text-sm max-w-5xl mx-auto gap-8">
          <div className="text-white/40">
            &copy; 2024. All Right Reserved. Deikairru
          </div>
          <nav className="flex flex-col md:flex-row items-center gap-8">
            {footerLink.map((item) => (
              <a
                href={item.src}
                key={item.title}
                className="inline-flex items-center gap-1.5"
              >
                <span className="font-semibold">{item.title}</span>
                <ArrowUpRight className="size-4" />
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
