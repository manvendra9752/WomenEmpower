import React from "react";
import HeroImage from "../images/Hero Image.gif";
import HeroWave from "../images/wave (10).svg";

const HeroSection = () => {
  return (
    <section id="hero-section" className="min-w-screen">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center justify-around">
          <div className="hero-intro">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Empowering women across communities to get started in tech
              <span className="text-pink-600">.</span>
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              We see you, we hear you and we empower you!
            </p>
            <a href="#go-here">
              <button className="btn btn-lg bg-pink-600 text-white px-6 py-2 rounded-lg hover:bg-pink-700 transition duration-200">
                Learn More
              </button>
            </a>
          </div>
          <div className="hero-image">
            <img
              className="hidden lg:block max-w-full"
              src={HeroImage}
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
      <img
        className="hero-wave w-full"
        src={HeroWave}
        alt="techify-hero-wave"
      />
    </section>
  );
};

export default HeroSection;
