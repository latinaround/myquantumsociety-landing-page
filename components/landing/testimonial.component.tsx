"use client";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { useEffect } from "react";

const TestimonialComponent = () => {
  return (
    <section className="landing-section testimonial relative bg-gray-800 text-white min-h-80 py-8 text-center">
      <div className="container mx-auto px-3 relative z-10">
        <div className="flex flex-col justify-center space-y-6">
          <Fade direction="down" delay={100} triggerOnce>
            <h1 className="sm:text-6xl text-4xl font-bold mb-2 leading-relaxed">
              Why Analog?
            </h1>
          </Fade>
          <Fade direction="down" delay={100} triggerOnce>
            <h2 className="sm:text-4xl text-2xl font-medium mb-2 leading-relaxed">
              Nature is continuous, not binary.
            </h2>
          </Fade>

          <Fade direction="up" delay={500} triggerOnce>
            <div className="testimonial-card rounded-xl bg-white text-black p-6 sm:w-1/2 lg:w-1/3 mx-auto">
              <div className="relative mb-6">
                <div className="absolute top-0">
                  <Image src="/images/left-quote.svg" alt="quote" width={100} height={100} />
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
                <div className="details text-left">
                  <h4 className="font-bold text-black">Richard Feynman</h4>
                  <p className="text-gray-500">Theoretical physicist</p>
                </div>
              </div>
            </div>
          </Fade>

          <Fade direction="up" delay={500} triggerOnce>
            <div className="w-[95%] mx-auto mt-12">
              <p className="text-xl font-light">
                We are using the binary system in digital computing because of the ON and OFF switches of transistors. It is a hardware constraint that need not be dragged into the quantum world.
              </p>
              <p className="text-xl font-light mt-4">
                Quantum systems are continuous. In quantum devices for computing, we are free to use the continuous variable logic implemented in Analog Quantum Computing.
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export { TestimonialComponent };
