import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "About Us",
};

interface Props {
  params: {};
}

const AboutPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/design1.png')" }}></div>
        <h1 className="sm:text-6xl text-4xl text-white font-bold relative">About</h1>
      </div>
      <div className="min-h-screen p-6 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-xl mb-4 font-semibold text-white">
            About qAIntum.ai
          </h2>
          <p className="text-l mb-4 font-normal text-white">
            At qAIntum.ai, we are at the forefront of the revolution in creativity, 
            problem-solving, and human-machine interaction. The rise of Generative AI,
            powered by Large Language Models (LLMs), is driving transformative 
            advancements in communication, education, healthcare, and automation. 
            However, despite their incredible potential, LLMs are confronted with 
            significant challenges, including high energy consumption, costly 
            hardware, and growing technological inequality.
            </p>
            <p className="text-l mb-4 font-normal text-white">
            qAIntum.ai Inc. was founded to address these challenges by leveraging the
            unique capabilities of quantum computing. By harnessing quantum parallelism, 
            we aim to reduce computational demands and unlock unprecedented insights into 
            language and intelligence.
          </p>

          <h2 className="text-xl my-4 font-semibold text-white">
            The Quantum LLM (QLLM) Project
          </h2>
          <p className="text-l mb-4 font-normal text-white">
            Our flagship innovation is the Quantum Transformer Architecture, a groundbreaking 
            integration of quantum neural networks (QNNs) with traditional transformer models. 
            This architecture significantly enhances language understanding and generation, 
            effectively overcoming the limitations of conventional transformers.
          </p>

          <h2 className="text-xl my-4 font-semibold text-white">
            Quantum Computing: Digital and Analog
          </h2>
          <p>
            Quantum computing can be broadly classified into two types:
          </p>
          <ul className="list-disc ml-5">
            <li className="text-l mb-4 font-normal text-white">
              <strong>Digital Quantum Computing (DQC):</strong> This involves quantizing 
              binary states, where binary 0 and 1 are represented using the superposition 
              state α|0⟩ + β|1⟩. Despite its potential, DQC faces substantial engineering 
              challenges, particularly the requirement for cryogenics to maintain particles
              at temperatures near absolute zero Kelvin.
            </li>
            <li className="text-l mb-4 font-normal text-white">
              <strong>Analog Quantum Computing (AQC):</strong> Unlike DQC, AQC occurs naturally 
              in quantum mechanical systems with more complex basis states. In 2020, Xanadu
              implemented AQC using their X8 photonic quantum processing unit (PQPU), which 
              operates at room temperature. This innovation offers a higher-dimensional
              computational space and access to unique quantum gates unavailable in DQC.
            </li>
          </ul>

          <h2 className="text-xl my-4 font-semibold text-white">
            Our Quantum Neural Network (QNN) Architecture
          </h2>
          <p className="text-l mb-4 font-normal text-white">
            The QNN algorithm, introduced by Killoran et al., faithfully implements classical 
            neural networks using quantum optics. The core components of the QNN architecture include:
          </p>
            <ul className="list-disc ml-5">
              <li className="text-l mb-4 font-normal text-white">
                <strong>Quantum Data Encoding:</strong> Classical data is converted into 
                a quantum state by using the entries as parameters of the available quantum gates.
              </li>
              <li className="text-l mb-4 font-normal text-white">
                <strong>QNN Layer:</strong> The architecture of classical neural networks
                is realized using optical quantum gates.
              </li>
              <li className="text-l mb-4 font-normal text-white">
                <strong>Weight Matrix:</strong> A matrix expressed through singular value
                decomposition using interferometers, squeezers, and interferometers.
              </li>
              <li className="text-l mb-4 font-normal text-white">
                <strong>Bias Addition:</strong> Implemented via displacement gates.
              </li>
              <li className="text-l mb-4 font-normal text-white">
                <strong>Activation Function:</strong> Kerr gates or other nonlinear quantum 
                optical gates.
              </li>
              <li className="text-l mb-4 font-normal text-white">
                <strong>Measurement:</strong> Outputs from the quantum circuit are extracted 
                as single-valued, multi-valued, or sized to the number of basis states used, 
                raised to the power of the number of wires used.
              </li>
            </ul>

          <h2 className="text-xl my-4 font-semibold text-white">
            The Photonic Analog QNN (PA QNN)
          </h2>
          <p className="text-l mb-4 font-normal text-white">
            Our Photonic Analog QNN (PA QNN) architecture provides substantial advantages,
            including a reduced number of parameters to train and faster convergence with 
            fewer epochs. This efficiency positions PA QNN as an ideal candidate for 
            enhancing LLMs.
            qAIntum.ai Inc. has successfully developed a Quantum Transformer (QT) by 
            replacing the feedforward block of the traditional transformer architecture 
            with PA QNNs. This innovation, now open-sourced and available on our  
            <a href="https://github.com/qaintumai" target="_blank"> GitHub repository</a>, 
            is a key step towards building Quantum Large Language Models (QLLMs).
            QLLMs have the potential to overcome the scalability and efficiency limitations
            of classical AI models, enabling the creation of more sophisticated and accurate 
            language models.
          </p>

          <h2 className="text-xl my-4 font-semibold text-white">
            Our Vision
          </h2>
          <p className="text-l mb-4 font-normal text-white">
            The QLLM Project represents a pioneering effort to integrate quantum computing with 
            natural language processing, offering a transformative approach to AI development. 
            By addressing the limitations of classical AI models and exploring quantum 
            computing's potential, qAIntum.ai aligns with the NSF America's Seed Fund mandate
            to support high-risk, high-reward innovations that have the potential to revolutionize 
            multiple industries.
            Join us in unlocking the future of AI with quantum-powered solutions.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
