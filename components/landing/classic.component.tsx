"use client";
import { Fade } from "react-awesome-reveal";
import Image from "next/image";

const ClassicComponent = () => {
  return (
    <section className="landing-section cscq bg-black text-white min-h-80 py-12 text-center">
      <div className="container mx-auto px-3">
        <div className="flex flex-col justify-center space-y-8">
          <Fade direction="up" delay={100} triggerOnce>
            <h2 className="sm:text-4xl text-2xl font-medium text-white mb-16 leading-relaxed">
              Computational Space: Classical to Quantum
            </h2>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <div className="sm:w-[65%] mx-auto mb-9">
              <p className="text-xl font-light">
                Moving from the computational space consisting of 0 and 1 to the space of infinitely many points gives a huge advantage of encoding and processing information.
              </p>
              <p className="text-xl font-light mt-4">
                The superposition property of quantum states gives inherent parallelism in quantum computing. With the higher dimensional computational space in Analog Quantum Computing, a higher level of parallelism is achieved.
              </p>
            </div>
          </Fade>

          <Fade direction="up" delay={200} triggerOnce>
            <div className="flex sm:flex-row flex-col gap-8 justify-center items-center w-full max-w-4xl mx-auto">
              <div className="flex-1 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-xl">Classical</h4>
                <svg width="100" height="50" xmlns="http://www.w3.org/2000/svg">
                  <text
                    x="50"
                    y="35"
                    fontFamily="serif"
                    fontSize="30"
                    fill="#FFFFFF"
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    (0, 1)
                  </text>
                </svg>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-xl">Qubit-based</h4>
                <svg width="200" height="50" xmlns="http://www.w3.org/2000/svg">
                  <text
                    x="100"
                    y="35"
                    font-family="serif"
                    font-size="30"
                    fill="#FFFFFF"
                    dominant-baseline="middle"
                    text-anchor="middle"
                  >
                    α|0⟩ + β|1⟩
                  </text>
                </svg>
              </div>
              <div className="flex-1 flex flex-col justify-center items-center">
                <h4 className="font-semibold text-xl">Continuous Variable</h4>
                <svg width="500" height="50" xmlns="http://www.w3.org/2000/svg">
                  <text
                    x="250"
                    y="35"
                    fontFamily="serif"
                    fontSize="30"
                    fill="#FFFFFF"
                    dominantBaseline="middle"
                    textAnchor="middle"
                  >
                    a₀|0⟩ + a₁|1⟩ + ⋯ + aₙ₋₁|n - 1⟩
                  </text>
                </svg>
              </div>
            </div>
          </Fade>

          <div className="flex gap-6 sm:flex-row flex-col w-full max-w-4xl mx-auto">
            <div className="flex-1 flex-col flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg mb-4">
                <Image
                  src="/images/wagner/wagner.png"
                  alt="Wigner 0"
                  width={256}
                  height={150}
                />
              </div>

              <p>Wagner function of |0⟩</p>
            </div>
            <div className="flex-1 flex-col flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg mb-4">
                <Image
                  src="/images/wagner/wagner1.png"
                  alt="Wigner 1"
                  width={256}
                  height={150}
                />
              </div>
              <p>Wagner function of |1⟩</p>
            </div>

            <div className="flex-1 flex-col flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg mb-4">
                <Image
                  src="/images/wagner/wagner2.png"
                  alt="Wigner 2"
                  width={256}
                  height={150}
                />
              </div>
              <p>Wagner function of |2⟩</p>
            </div>

            <div className="flex-1 flex-col flex justify-center items-center">
              <div className="bg-white p-8 rounded-lg mb-4">
                <Image
                  src="/images/wagner/wagner3.png"
                  alt="Wigner 3"
                  width={256}
                  height={150}
                />
              </div>
              <p>Wagner function of |3⟩</p>
            </div>
          </div>

          {/* Timeline */}
          {/* <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical text-left">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-4">
                <time className="font-mono italic">Wagner 0</time>
                <Fade direction="up" delay={30} triggerOnce>
                  <div className="bg-white p-8 rounded-lg">
                    <Image
                      src="/images/wigner/wigner.png"
                      alt="Wigner 0"
                      width={256}
                      height={150}
                    />
                  </div>
                </Fade>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-4">
                <time className="font-mono italic">Wagner 1</time>
                <Fade direction="up" delay={40} triggerOnce>
                  <div className="bg-white p-8 rounded-lg">
                    <Image
                      src="/images/wigner/wigner1.png"
                      alt="Wigner 1"
                      width={256}
                      height={150}
                    />
                  </div>
                </Fade>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start md:text-end mb-4">
                <time className="font-mono italic">Wagner 2</time>
                <Fade direction="up" delay={50} triggerOnce>
                  <div className="bg-white p-8 rounded-lg">
                    <Image
                      src="/images/wigner/wigner2.png"
                      alt="Wigner 2"
                      width={256}
                      height={150}
                    />
                  </div>
                </Fade>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end mb-4">
                <time className="font-mono italic">Wagner 3</time>
                <Fade direction="up" delay={60} triggerOnce>
                  <div className="bg-white p-8 rounded-lg">
                    <Image
                      src="/images/wigner/wigner3.png"
                      alt="Wigner 3"
                      width={256}
                      height={150}
                    />
                  </div>
                </Fade>
              </div>
              <hr />
            </li>
          </ul> */}
        </div>
      </div>
    </section>
  );
};

export { ClassicComponent };
