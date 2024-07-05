"use client";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";
import { Accordion } from "../common/accordion";

const AdvantageOfModelComponent = () => {
  return (
    <section className="landing-section advantage bg-white text-black min-h-80 py-12">
      <div className="container mx-auto">
        <div className="flex gap-4 sm:flex-row flex-col w-full">
          <div className="w-1/5 overflow-hidden flex-1">
            <Fade direction="up" delay={100} triggerOnce>
              <img
                src="/images/adv-img.png"
                alt=""
                className="m-auto"
                width="100%"
              />
            </Fade>
          </div>

          <div className="w-1/5 flex flex-1 flex-col pt-16">
            <Fade direction="up" delay={200} triggerOnce>
              <Accordion
                isOpen={true}
                title=" Quantum LLMs based on the CV-model of QC have the following advantages:"
                content={`<ul className=" pl-4 font-light text-white text-xl">
                <li>Substantially reduced number of parameters to train.</li>
                <li>Fewer number of epochs to converge.</li>
              </ul>`}
              />
            </Fade>
            <Fade direction="up" delay={300} triggerOnce>
              <Accordion
                title="Photonic quantum computers based on the Continuous Variable model of quantum computing have the following advantage:"
                content={`<ul className=" pl-4  font-light text-white text-xl">
                <li>Operate at room temperature.</li>
                <li>
                  Mountable on personal computers, laptops, smart phones, and
                  sensing devices.
                </li>
                <li>Inexpensive to manufacture.</li>
              </ul>`}
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export { AdvantageOfModelComponent };
