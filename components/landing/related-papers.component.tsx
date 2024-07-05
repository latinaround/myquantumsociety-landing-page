"use client";
import { getPartialWordsText } from "@/app/_lib/utilities/text";
import { Fade } from "react-awesome-reveal";

const RelatedPapersComponent = () => {
  return (
    <section className="landing-section papers bg-black min-h-80 py-12 text-center">
      <div className="container mx-auto px-3">
        <div className="flex flex-col justify-center space-y-8">
          <Fade direction="down" delay={30} triggerOnce>
            <h2 className="sm:text-4xl text-2xl font-medium text-white mb-4 leading-relaxed">
              Related Papers
            </h2>
          </Fade>

          <Fade direction="up" delay={40} triggerOnce>
            <div className="grid sm:grid-rows-3 sm:grid-flow-col gap-4 text-left">
              <div className="bg-slate-500 text-white rounded-lg shadow-md p-6 flex flex-col items-start row-span-3">
                <div className="book-image rounded-lg bg-slate-400 w-full overflow-hidden mb-4 h-[300px]">
                  <img src="./images/wagner/wagner.png" alt="" />
                </div>
                <h2 className="text-2xl font-semibold mb-4">
                  Quantum computing overview: discrete vs. continuous variable
                  models
                </h2>
                <p className="mb-4 text-white text-xl font-extralight">
                  {getPartialWordsText(
                    `In this Near Intermediate-Scale Quantum era, there are two types
                of near-term quantum devices available on cloud: superconducting
                quantum processing units (QPUs) based on the discrete variable
                model and linear optics (photonics) QPUs based on the continuous
                variable (CV) model. Quantum computation in the discrete
                variable model is performed in a finite dimensional quantum
                state space and the CV model in an infinite dimensional space.
                In implementing quantum algorithms, the CV model offers more
                quantum gates that are not available in the discrete variable
                model. CV-based photonic quantum computers provide additional
                flexibility of controlling the length of the output vectors of
                quantum circuits, using different methods of measurement and the
                notion of cutoff dimension.`,
                    100
                  )}
                </p>
                <a
                  className="btn btn-solid btn-default"
                  href="https://arxiv.org/abs/2206.07246"
                  target="_blank"
                  rel="external nofollow noopener noreferrer"
                >
                  Read More <span aria-hidden="true">&rarr;</span>
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex sm:flex-row flex-col items-start">
                <div className="flex flex-col sm:flex-row w-full gap-4">
                  <div className="sm:w-[200px] w-full bg-slate-800 rounded-lg overflow-hidden flex-none">
                    <img
                      src="./images/paper/paper1.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="content flex flex-1 flex-col">
                    <h2 className="text-xl font-semibold mb-4">
                      Quantum circuits with many photons on a programmable
                      nanophotonic chip
                    </h2>

                    <p className="mb-4 text-gray-900 text-md font-light">
                      {getPartialWordsText(
                        `Growing interest in quantum computing for practical applications
                has led to a surge in the availability of programmable machines
                for executing quantum algorithms. Present day photonic quantum
                computers have been limited either to non-deterministic
                operation, low photon numbers and rates, or fixed random gate
                sequences. Here we introduce a full-stack hardware-software
                system for executing many-photon quantum circuits using
                integrated nanophotonics: a programmable chip, operating at room
                temperature and interfaced with a fully automated control
                system. It enables remote users to execute quantum algorithms
                requiring up to eight modes of strongly squeezed vacuum
                initialized as two-mode squeezed states in single temporal
                modes, a fully general and programmable four-mode
                interferometer, and genuine photon number-resolving readout on
                all outputs. Multi-photon detection events with photon numbers
                and rates exceeding any previous quantum optical demonstration
                on a programmable device are made possible by strong squeezing
                and high sampling rates. We verify the non-classicality of the
                device output, and use the platform to carry out
                proof-of-principle demonstrations of three quantum algorithms:
                Gaussian boson sampling, molecular vibronic spectra, and graph
                similarity.`,
                        30
                      )}
                    </p>
                    <a
                      className="btn btn-outline btn-default"
                      href="https://arxiv.org/abs/2103.02109"
                      target="_blank"
                      rel="external nofollow noopener noreferrer"
                    >
                      Read More <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex sm:flex-row flex-col items-start">
                <div className="flex flex-col sm:flex-row w-full gap-4">
                  <div className="sm:w-[200px] w-full bg-slate-800 rounded-lg overflow-hidden flex-none">
                    <img
                      src="./images/paper/paper2.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="content flex flex-1 flex-col">
                    <h2 className="text-xl font-semibold mb-4">
                      Continuous-variable quantum neural networks
                    </h2>

                    <p className="mb-4 text-gray-900 text-md font-light">
                      {getPartialWordsText(
                        `We introduce a general method for building neural networks on
                quantum computers. The quantum neural network is a variational
                quantum circuit built in the continuous-variable (CV)
                architecture, which encodes quantum information in continuous
                degrees of freedom such as the amplitudes of the electromagnetic
                field. This circuit contains a layered structure of continuously
                parameterized gates which is universal for CV quantum
                computation. Affine transformations and nonlinear activation
                functions, two key elements in neural networks, are enacted in
                the quantum network using Gaussian and non-Gaussian gates,
                respectively. The non-Gaussian gates provide both the
                nonlinearity and the universality of the model. Due to the
                structure of the CV model, the CV quantum neural network can
                encode highly nonlinear transformations while remaining
                completely unitary. We show how a classical network can be
                embedded into the quantum formalism and propose quantum versions
                of various specialized model such as convolutional, recurrent,
                and residual networks. Finally, we present numerous modeling
                experiments built with the Strawberry Fields software library.
                These experiments, including a classifier for fraud detection, a
                network which generates Tetris images, and a hybrid
                classical-quantum autoencoder, demonstrate the capability and
                adaptability of CV quantum neural networks.`,
                        30
                      )}
                    </p>
                    <a
                      className="btn btn-outline btn-default"
                      href="https://arxiv.org/abs/1806.06871"
                      target="_blank"
                      rel="external nofollow noopener noreferrer"
                    >
                      Read More <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 flex sm:flex-row flex-col items-start">
                <div className="flex flex-col sm:flex-row w-full gap-4">
                  <div className="sm:w-[200px] w-full bg-slate-800 rounded-lg overflow-hidden flex-none">
                    <img
                      src="./images/paper/paper3.png"
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="content flex flex-1 flex-col">
                    <h2 className="text-xl font-semibold mb-4">
                      Continuous Variable Quantum MNIST Classifiers
                      —Classical-Quantum Hybrid Quantum Neural Networks
                    </h2>
                    <p className="mb-4 text-gray-900 text-md font-light">
                      {getPartialWordsText(
                        `In this paper, classical and continuous variable (CV) quantum
                    neural network hybrid multi-classifiers are presented using the
                    MNIST dataset. Currently available classifiers can classify only
                    up to two classes. The proposed architecture allows networks to
                    classify classes up to nm classes, where n represents cutoff
                    dimension and m the number of qumodes on photonic quantum
                    computers. The combination of cutoff dimension and probability
                    measurement method in the CV model allows a quantum circuit to
                    produce output vectors of size nm. They are then interpreted as
                    one-hot encoded labels, padded with nm - 10 zeros. The total of
                    seven different classifiers is built using 2, 3, …, 6, and
                    8-qumodes on photonic quantum computing simulators, based on the
                    binary classifier architecture proposed in “Continuous variable
                    quantum neural networks” [1]. They are composed of a classical
                    feed-forward neural network, a quantum data encoding circuit,
                    and a CV quantum neural network circuit. On a truncated MNIST
                    dataset of 600 samples, a 4-qumode hybrid classifier achieves
                    100% training accuracy.`,
                        30
                      )}
                    </p>
                    <a
                      className="btn btn-outline btn-default"
                      href="https://arxiv.org/abs/1806.06871"
                      target="_blank"
                      rel="external nofollow noopener noreferrer"
                    >
                      Read More <span aria-hidden="true">&rarr;</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export { RelatedPapersComponent };
