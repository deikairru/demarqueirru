"use client";
import React, { useEffect, useState } from "react";

const navLinks = [
  {
    title: "Project",
    src: "#project",
  },
  {
    title: "Client",
    src: "#review",
  },
  {
    title: "About",
    src: "#about",
  },
  {
    title: "Contact",
    src: "#contact",
  },
  {
    title: "Home",
    src: "#hero",
  },
];
const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const debounce = (func: Function, delay: number) => {
      let timeoutId: NodeJS.Timeout;
      return (...args: any[]) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delay);
      };
    };

    const handleScroll = debounce(() => {
      const scrollPosition = window.scrollY;

      // Change header style when scrolled
      setIsScrolled(scrollPosition > 50);

      // Determine active section
      const sections = navLinks.map((link) =>
        document.getElementById(link.src.replace("#", ""))
      );
      const currentSection = sections.find((section) => {
        if (section) {
          const { offsetTop, offsetHeight } = section;
          return (
            scrollPosition >= offsetTop - 100 &&
            scrollPosition < offsetTop + offsetHeight - 100
          );
        }
        return false;
      });

      if (currentSection) {
        console.log(currentSection.id);
        setActiveSection(currentSection.id);
      }
    }, 100);

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header className="hidden sm:flex justify-center items-center sticky top-3 z-50">
      <div className="container">
        <nav className="flex justify-center items-center w-max mx-auto gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              href={link.src}
              key={link.title}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
                activeSection === link.src.substring(1)
                  ? "bg-violet-sky text-gray-900 hover:bg-white/30"
                  : "text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {link.title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
