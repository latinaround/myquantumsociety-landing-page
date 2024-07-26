"use client";
import { Fade } from "react-awesome-reveal";

const PhotonicComponent = () => {
  return (
    <section className="landing-section photonic bg-white text-black min-h-80 py-12 text-center relative">
      <div className="container mx-auto px-3">
        <div className="flex flex-col justify-center space-y-8">
          <Fade direction="down" delay={30} triggerOnce>
            <h1 className="sm:text-6xl text-4xl font-bold text-gray-800 mb-4 leading-relaxed">
              Why Photonic?
            </h1>
          </Fade>

          <Fade direction="up" delay={30} triggerOnce>
            <div className="w-[90%] mx-auto mb-9">
              <p className="text-xl font-light text-gray-800">
                Most of the physical implementations of quantum computing require temperature control close to absolute zero Kelvin. A Quantum Processing Unit using Quantum Optics was developed by Xanadu.
              </p>
              <p className="text-xl font-light mt-4 text-gray-800">
                Advantages:
              </p>
              <ul className="list-disc list-inside text-xl font-light text-gray-800">
                <li>Compatible with the existing communications infrastructure.</li>
                <li>Operates at room-temperature.</li>
                <li>Higher dimensional computational space.</li>
                <li>Easy to network and multiplex.</li>
                <li>Low cost for mass production.</li>
                <li>Mountable on smartphones, laptops, and edge devices.</li>
              </ul>
            </div>
          </Fade>

          <Fade direction="up" delay={40} triggerOnce>
            <div className="w-full">
              <img src="./images/QC.png" alt="Quantum Computing" className="w-full h-auto" />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export { PhotonicComponent };
