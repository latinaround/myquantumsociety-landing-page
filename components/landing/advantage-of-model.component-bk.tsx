"use client";
import { Fade } from "react-awesome-reveal";

const AdvantageOfModelComponent = () => {
  return (
    <section className="landing-section advantage bg-white text-black min-h-80 py-12">
      <div className="sm:w-[75%] w-full mx-auto px-3">
        <Fade direction="up" delay={100} triggerOnce>
          <div className="w-full">
            <div className="mb-4 bg-teal-500 p-10 rounded-2xl sm:w-3/5 w-full sm:float-left">
              <h2 className="font-light text-white text-4xl left-24 mb-6">
                Quantum LLMs based on the CV-model of QC have the following
                advantages:
              </h2>
              <ul className=" pl-4 font-light text-white text-xl">
                <li>Substantially reduced number of parameters to train.</li>
                <li>Fewer number of epochs to converge.</li>
              </ul>
            </div>

            <div className="bg-gray-900 p-10 rounded-2xl  sm:w-3/5 w-full sm:float-right">
              <h2 className="font-light text-white text-4xl left-24 mb-6">
                Photonic quantum computers based on the Continuous Variable
                model of quantum computing have the following advantage:
              </h2>
              <ul className=" pl-4  font-light text-white text-xl">
                <li>Operate at room temperature.</li>
                <li>
                  Mountable on personal computers, laptops, smart phones, and
                  sensing devices.
                </li>
                <li>Inexpensive to manufacture.</li>
              </ul>
            </div>
            <div className="clear-both" />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export { AdvantageOfModelComponent };
