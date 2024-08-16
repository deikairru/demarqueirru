"use client"

import React from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import ScrambleText from "./ScrambleText";

const links = [
  { name: "Home", src: "#", id: 1 },
  { name: "About", src: "#", id: 2 },
  { name: "Blog", src: "#", id: 3 },
  { name: "Contact", src: "#", id: 4 }
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1
  }
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1
    }
  },
  open: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: 1
    }
  }
};

export default function Sidebar() {
  const [open, cycleOpen] = useCycle(false, true);

  const handleClick = () => {
    cycleOpen();
  }

  return (
    <div>
      <AnimatePresence>
        {open && (
          <motion.aside
            initial={{ width: 0 }}
            animate={{
              width: 300
            }}
            exit={{
              width: 0,
              transition: { delay: 0.7, duration: 0.3 }
            }}
            className="w-[400px] h-screen bg-slate-900 text-white justify-center items-center"
          >
            <motion.div
              className="flex flex-col gap-4 p-10"
              initial="closed"
              animate="open"
              exit="closed"
              variants={sideVariants}
            >
              <div className="btn-container">
                <button onClick={handleClick}>{open ? "Close" : "Open"}</button>
              </div>
              {links.map(({ name, src, id }) => (
                <motion.a
                  key={id}
                  href={src}
                  // whileInView={{ scale: 1 }}
                  variants={itemVariants}
                >
                  <ScrambleText>{name}</ScrambleText>
                </motion.a>
              ))}
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
      <div className="btn-container">
        <button hidden={open} onClick={handleClick}>{open ? "Close" : "Open"}</button>
      </div>
    </div>
  );
}
