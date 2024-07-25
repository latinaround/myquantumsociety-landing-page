"use client";
import { useEffect, useState } from "react";

const HeroComponent = () => {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 4) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      className={`hero hero-parallax min-h-screen relative`}
      style={{ backgroundImage: "url('./images/light-web.png')" }}
    >
      <div className="hero-overlay"></div>
      <div
        className={`hero-content text-center text-neutral-content fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out ${
          isBlurred ? "blurred" : ""
        }`}
      >
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text">
            Quantum Innovations with Light:
          </h1>
          <p className="mb-5 text-white">
            Building Quantum Large Language Models using Photonic Analog Quantum Computing
          </p>
          <button className="btn btn-primary">
            Join Open Source Community
          </button>
        </div>
      </div>
    </section>
  );
};

export { HeroComponent };
