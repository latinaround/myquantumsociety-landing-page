import { getPartialWordsText } from "@/app/_lib/utilities/text";
import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Papers",
};

interface Props {
  params: {};
}
const PaperPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center relative">
      <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/design3.png')" }}></div>
      <h1 className="sm:text-6xl text-4xl text-white font-bold relative">Papers</h1>
      </div>
      <div className="min-h-screen p-6 bg-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <h2 className="ml-2 text-xl font-semibold">
                  {" "}
                  Quantum computing overview: discrete vs. continuous variable
                  models
                </h2>
              </div>
              <p className="mb-4 text-gray-600">
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
                  30
                )}
              </p>
              <a
                className="link link-info"
                href="https://arxiv.org/abs/2206.07246"
                target="_blank"
                rel="external nofollow noopener noreferrer"
              >
                Read More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <h2 className="ml-2 text-xl font-semibold">
                  Quantum circuits with many photons on a programmable
                  nanophotonic chip
                </h2>
              </div>
              <p className="mb-4 text-gray-600">
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
                className="link link-info"
                href="https://arxiv.org/abs/2103.02109"
                target="_blank"
                rel="external nofollow noopener noreferrer"
              >
                Read More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <h2 className="ml-2 text-xl font-semibold">
                  Continuous-variable quantum neural networks
                </h2>
              </div>
              <p className="mb-4 text-gray-600">
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
                className="link link-info"
                href="https://arxiv.org/abs/1806.06871"
                target="_blank"
                rel="external nofollow noopener noreferrer"
              >
                Read More <span aria-hidden="true">&rarr;</span>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start transform transition duration-500 hover:scale-105 hover:shadow-lg">
              <div className="flex items-center mb-4">
                <h2 className="ml-2 text-xl font-semibold">
                  {" "}
                  Continuous Variable Quantum MNIST Classifiers
                  —Classical-Quantum Hybrid Quantum Neural Networks
                </h2>
              </div>
              <p className="mb-4 text-gray-600">
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
                className="link link-info"
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
    </main>
  );
};

export default PaperPage;
