"use client";
import { Fade } from "react-awesome-reveal";

const HeroOneComponent = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200 bg-primary"
      style={{ backgroundImage: "url('./images/light-web.png')" }}
    >
      <div className="container mx-auto sm:px-3 pt-16">
        <div className="hero-content mx-auto flex-col-reverse justify-between items-center lg:flex-row-reverse text-white">
          <div className="w-1/7 sm:w-full mb-12 text-left absolute bottom-10 left-10">
            <Fade direction="up" delay={100} triggerOnce>
              <h1 className="text-6xl font-bold leading-relax">
                <span className="bg-gray-800 bg-opacity-90 p-4 rounded-md inline-block">
                  Quantum Intelligence with Light:
                </span>
              </h1>
            </Fade>
            <Fade direction="up" delay={200} triggerOnce>
              <p className="py-6 text-2xl font-extralight">
                <span className="bg-gray-800 bg-opacity-90 p-4 rounded-md inline-block">
                  Building Quantum Large Language Models using Photonic Analog Quantum Computing
                </span>
              </p>
            </Fade>
            <Fade direction="up" delay={300} triggerOnce>
              <div className="flex items-center space-x-4">
                {/* <button className="btn btn-success text-white">
                  Join Open Source Community
                </button> */}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroOneComponent };
