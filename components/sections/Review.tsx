import React from "react";
import SectionHeader from "../SectionHeader";
import CardReview from "../CardReview";

const Review = () => {
  return (
    <section id="review" className="py-16 mt-20 pb-20 md:pb-32">
      <SectionHeader
        eyebrow="Happy Client"
        title="What People says about me"
        desc="Don't just take my words. See what my clients have to say about my work."
      />
      <div className="flex flex-row mt-20 max-w-screen-md items-center justify-center gap-10 mx-auto">
        <CardReview />
        <CardReview />
      </div>
    </section>
  );
};

export default Review;
