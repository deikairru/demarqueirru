"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";


const CHARS = "QWERTYUIOPASDFGHJKLZXCVBNM";

type ScrambleTextProps = {
  children: string;
  cycle?: number;
  shuffle?: number;
};

const ScrambleText = ({ children, cycle = 5, shuffle = 30 }: ScrambleTextProps) => {
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const CYCLES_PER_LETTER = cycle;
  const SHUFFLE_TIME = shuffle;
  const TARGET_TEXT = children;

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current as NodeJS.Timeout);
    setText(TARGET_TEXT);
  };

  return (
    <motion.div
      onAnimationStart={scramble}
      onAnimationEnd={stopScramble}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      whileInView={{ scale: 1 }}

      className="relative overflow-hidden -z-1"
    >
      <div className="text-4xl font-bold relative z-10 flex items-center gap-2">
        <motion.span
          initial={{ background: 'transparent' }}
          whileHover={{ background: 'white', color: 'black' }}
          className="uppercase px-2 pr-8 rounded-br-xl">{text}
        </motion.span>
      </div>
    </motion.div >
  );
};

export default ScrambleText;