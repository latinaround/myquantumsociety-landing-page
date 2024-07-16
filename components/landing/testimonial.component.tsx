"use client";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useEffect } from "react";

const TestimonialComponent = () => {
  useEffect(() => {}, []);
  return (
    <section className="landing-section testimonial bg-black text-white min-h-80 py-12 text-center">
      <div className="container mx-auto px-3">
        <div className="flex flex-col justify-center space-y-8">
          <Fade direction="down" delay={100} triggerOnce>
            <h2 className="sm:text-4xl text-2xl font-medium text-white mb-4 leading-relaxed">
              Nature is continuous, not binary.
            </h2>
          </Fade>
          <Fade direction="up" delay={200} triggerOnce>
            <div className=" sm:w-[65%] mx-auto mb-9">
              <p className="text-xl font-light">
                We believe that the future of quantum computing will be
                Photonics-based on the Continuous Variable model of quantum
                computing.
              </p>
            </div>
          </Fade>

          <Fade direction="up" delay={400} triggerOnce>
            <div className="testimonial-card rounded-xl bg-white p-6 sm:w-1/2 lg:1/3 mx-auto">
              <div className="relative mb-6">
                <div className="text-black absolute top-0">
                  <img src="./images/left-quote.svg" alt="quote" width={100} />
                </div>
                <div className="pl-4 pt-14">
                  <p className="font-light text-gray-800 text-2xl text-left ml-4 italic">
                    Nature isn&apos;t classical, dammit, and if you want to make a
                    simulation of nature, you&apos;d better make it quantum
                    mechanical, and by golly it&apos;s a wonderful problem, because
                    it doesn&apos;t look so easy.
                  </p>
                </div>
              </div>

              <div className="flex flex-row space-x-4 justify-start items-center pl-6">
                <div className="avatar flex-shrink-0 bg-slate-500 rounded-full w-14 h-14 overflow-hidden">
                  <Image
                    src="https://cdn.britannica.com/83/21083-050-C53FAB08/Richard-Feynman.jpg"
                    height={56}
                    width={56}
                    alt="Richard Feynman"
                  />
                </div>
                <div className="dtail text-left">
                  <h4 className="font-bold text-black">Richard Feynman</h4>
                  <p className="text-gray-500">Theoretical physicist</p>
                </div>
              </div>
            </div>
          </Fade>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};

export { TestimonialComponent };
