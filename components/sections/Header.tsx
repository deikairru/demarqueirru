import React from "react";

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
  return (
    <header className="hidden sm:flex justify-center items-center sticky top-4 z-10">
      <div className="container">
        <nav className="flex justify-center items-center w-max mx-auto gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur-lg">
          {navLinks.map((link) => (
            <a
              href={link.src}
              key={link.title}
              className="px-6 py-2 rounded-full text-white/70 text-sm font-semibold hover:bg-white/10 hover:text-white"
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
