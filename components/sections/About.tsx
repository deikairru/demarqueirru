import React from "react";
import SectionHeader from "../SectionHeader";
import CardHeader from "../CardHeader";
import JavascriptIcon from "@/components/assets/icons/square-js.svg";
import HTMLIcon from "@/components/assets/icons/html5.svg";
import CSSIcon from "@/components/assets/icons/css3.svg";
import GithubIcon from "@/components/assets/icons/github.svg";
import ReactIcon from "@/components/assets/icons/react.svg";
import Image from "next/image";
import bookImage from "@/components/assets/images/book-cover.png";
import ToolboxItem from "../ToolboxItem";
import Card from "../Card";

const techItems = [
  {
    title: "Javascript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CSSIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
];

const hobbies = [
  {
    title: "Photography",
    emoji: "📸",
    top: "5%",
    left: "50%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    top: "35%",
    left: "45%",
  },
  {
    title: "Music",
    emoji: "🎵",
    top: "45%",
    left: "75%",
  },
  {
    title: "Fitness",
    emoji: "🏋️‍♂️",
    top: "65%",
    left: "0%",
  },
  {
    title: "Design",
    emoji: "🎨",
    top: "5%",
    left: "5%",
  },
  {
    title: "Reading",
    emoji: "📖",
    top: "35%",
    left: "15%",
  },
  {
    title: "Writing",
    emoji: "🖋️",
    top: "70%",
    left: "45%",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A glimpse Into My World"
          desc="Learn more who i am, what i do, and what inspires me"
        />
        <div className="mt-20 flex flex-col gap-8 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-y-8 md:gap-x-8 md:grid-cols-5">
            <Card className="h-[320px] md:p-0 col-span-2">
              <CardHeader
                title="Current Reads"
                desc="Explore the books that shaping my perspective"
              />
              <div className="w-40 mx-auto mt-6 md:mt-0">
                <Image src={bookImage} alt="book" />
              </div>
            </Card>

            <Card className="h-[320px] p-0 col-span-3">
              <CardHeader
                title="Tech Stack"
                desc="Explore the technologies and tools I experienced to craft exceptional project"
                className="px-6 py-6"
              />
              <ToolboxItem items={techItems} />
              <ToolboxItem
                items={techItems}
                className="my-6"
                itemsWrapperClass="-translate-x-1/2"
              />
            </Card>
          </div>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond the Code"
              desc="Explore my interest and hobbies beyond the digital realm"
              className="px-6 py-6"
            />
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center bg-violet-sky gap-2 px-5 py-1.5 md:px-6 md:py-2 xl:px-8 xl:py-3 rounded-full border-none absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="text-white md:text-medium font-bold">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
