import React from "react";
import babyVideoLarge from "../assets/babies-large.mp4";
import babyVideoSmall from "../assets/babies-small.mp4";
import About from "./About";
import Features from "./Features";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="video-background h-screen">
        {/* Large screens */}
        <video
          autoPlay
          loop
          muted
          className="video-element hidden sm:block w-full h-full object-cover"
        >
          <source src={babyVideoLarge} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Small screens */}
        <video
          autoPlay
          loop
          muted
          className="video-element block sm:hidden w-full h-full object-cover"
        >
          <source src={babyVideoSmall} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="scrollable-content p-4 sm:p-8 lg:p-12">
        <About />
        <Features />
      </div>
    </div>
  );
};

export default HomePage;
