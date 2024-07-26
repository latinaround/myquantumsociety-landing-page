"use client";
import { Fade } from "react-awesome-reveal";

const LlmComponent = () => {
  return (
    <section className="landing-section llm bg-gray-900 text-white min-h-80 py-12 text-center relative">
      <div className="container mx-auto px-3">
        <div className="flex flex-col justify-center space-y-8">
          <Fade direction="down" delay={30} triggerOnce>
            <h2 className="sm:text-4xl text-2xl font-medium mb-4 leading-relaxed">
              Quantum Large Language Model
            </h2>
          </Fade>

          <Fade direction="up" delay={30} triggerOnce>
            <div className="w-[100%] mx-auto mb-9">
              <p className="text-xl font-light">
                The building blocks of LLMs are transformers. By replacing the
                Feedforward blocks with Quantum Neural Networks in transformers,
                we develop Quantum LLMs.
              </p>
            </div>
          </Fade>

          <Fade direction="up" delay={40} triggerOnce>
            <div className="flex gap-4 sm:flex-row flex-col justify-evenly items-center">
              <div className="card sm:w-full lg:w-96 bg-base-100 shadow-xl overflow-hidden">
                <figure>
                  <img
                    src="./images/q-llm-1.jpg"
                    alt="Continuous Variable Quantum Neural Network"
                  />
                </figure>
                <div className="card-body bg-emerald-600 text-white">
                  <h2 className="card-title justify-center">
                    Continuous Variable Quantum Neural Network
                  </h2>
                </div>
              </div>

              <div className="card sm:w-full lg:w-96 bg-base-100 shadow-xl overflow-hidden">
                <figure>
                  <img src="./images/q-llm-2.jpg" alt="Quantum Transformer" />
                </figure>
                <div className="card-body bg-emerald-600 text-white">
                  <h2 className="card-title justify-center">
                    Quantum Transformer
                  </h2>
                </div>
              </div>

              <div className="card sm:w-full lg:w-96 bg-base-100 shadow-xl overflow-hidden">
                <figure>
                  <img src="./images/q-llm-3.jpg" alt="Quantum LLM" />
                </figure>
                <div className="card-body bg-emerald-600 text-white">
                  <h2 className="card-title justify-center">Quantum LLM</h2>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export { LlmComponent };
