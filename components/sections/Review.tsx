import React from "react";
import SectionHeader from "../SectionHeader";
import CardReview from "../CardReview";

const testimonials = [
  {
    name: "Alex Turner",
    position: "Project Manager @ TechGear",
    text: "Deika is instrumental when transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results.",
  },
  {
    name: "Maria L",
    position: "Chief Technology Officer @ DataFlow",
    text: "Dieka's full stack development skills were crucial in revamping our outdated web application. He expertly refactored our legacy code while implementing modern frameworks and best practices. His work not only improved the app's performance but also made it much easier for our team to maintain and scale.",
  },
  {
    name: "Thomas W",
    position: "Marketing Director @ GRE",
    text: "The full stack development services provided by Deika transformed our digital presence. He not only redesigned our website with a modern, responsive interface but also implemented a custom CMS that perfectly fits our workflow. His full stack approach ensured seamless integration between all components, resulting in a faster, more secure, and easily manageable web ecosystem.",
  },
];

const Review = () => {
  return (
    <section id="review" className="padding-section">
      <div className="container">
        <SectionHeader
          eyebrow="Happy Client"
          title="What People says about me"
          desc="Don't just take my words. See what my clients have to say about my work."
        />
      </div>
      <div className="flex margin-header overflow-x-clip max-w-5xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] gap-8 md:gap-20 lg:gap-28">
        <div className="flex flex-none gap-8 items-center justify-center mx-auto ">
          {testimonials.map((review) => (
            <CardReview
              name={review.name}
              position={review.position}
              text={review.text}
              key={review.name}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Review;
