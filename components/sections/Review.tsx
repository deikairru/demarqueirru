import React from "react";
import SectionHeader from "../SectionHeader";
import CardReview from "../CardReview";

const Review = () => {
  return (
    <section id="review" className="py-20 lg:py-28 md:pb-32 container">
      <SectionHeader
        eyebrow="Happy Client"
        title="What People says about me"
        desc="Don't just take my words. See what my clients have to say about my work."
      />
      <div className="flex flex-col md:flex-row mt-20 max-w-screen-md items-center justify-center gap-10 mx-auto">
        <CardReview />
        <CardReview />
      </div>
    </section>
  );
};

export default Review;
