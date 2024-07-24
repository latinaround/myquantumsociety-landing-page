"use client";
import { Fade } from "react-awesome-reveal";
const HeroOneComponent = () => {
  return (
    <div className="hero min-h-screen bg-base-200 bg-primary">
      <div className="container mx-auto sm:px-3 pt-16">
        <div className="hero-content mx-auto flex-col-reverse justify-between items-center lg:flex-row-reverse text-white">
          <Fade direction="right" delay={10} triggerOnce>
            <div className="w-[400px] sm:w-[700px] mb-12">
              <img src="./images/light-web.png" className="" />
            </div>
          </Fade>

          <div className="w-1/7 sm:w-full mb-12">
            <Fade direction="up" delay={100} triggerOnce>
              <h1 className=" text-6xl font-normal leading-relax">
                Quantum Innovations with Light
              </h1>
            </Fade>
            <Fade direction="up" delay={200} triggerOnce>
              <p className="py-6 text-2xl font-extralight">
                We are building Quantum Large Language Models using Photonic Analog Quantum Computing
              </p>
            </Fade>

            <Fade direction="up" delay={300} triggerOnce>
              <div className="flex items-center space-x-4">
                <button className="btn btn-success text-white">
                  Join Open Source Community
                </button>

                {/* <div className="lg:flex lg:justify-end">
                  <a href="#" className="text-sm font-semibold leading-6">
                    Find here <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export { HeroOneComponent };
