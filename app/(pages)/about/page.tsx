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
      <div className="bg-primary min-h-80 flex justify-center items-center">
        <h1 className="sm:text-6xl text-4xl text-white font-bold">About</h1>
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto">
          <h2 className="text-xl mb-4 font-semibold text-gray-900">
            Driving Quantum Innovations for Human Progress
          </h2>

          <p>
            At the forefront of technological advancement, we are dedicated to
            building Quantum Large Language Models (QLLMs) that redefine the
            boundaries of computational capabilities. Our team comprises
            research scientists and industry experts from top institutions who
            share our vision and mission.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Vision and Mission
          </h2>

          <p>
            We believe in the transformative power of quantum computing to drive
            human progress. Our vision is rooted in the understanding that
            nature is continuous, not binary. As such, we are pioneering the
            development of photonics-based quantum computing using the
            Continuous Variable model. This approach promises to unlock new
            dimensions of computational power and efficiency.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Innovation in Quantum Computing
          </h2>

          <p>
            The future of quantum computing lies in harnessing the unique
            properties of quantum mechanics to build more powerful and efficient
            systems. Our Quantum Large Language Models represent a significant
            leap forward. By replacing traditional Feedforward blocks with
            Quantum Neural Networks within transformers, we are developing QLLMs
            that can process information in ways previously unimaginable.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Pioneering Quantum LLMs
          </h2>

          <p>
            The building blocks of LLMs are transformers. By integrating Quantum
            Neural Networks into these transformers, we are creating models that
            operate within the quantum computational space. This shift from
            classical to quantum computing holds the potential to revolutionize
            various industries and fields of research.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Our Commitment
          </h2>

          <p>
            Based in Palo Alto, California, we are committed to advancing the
            frontiers of quantum computing. Our work is driven by a passion for
            innovation and a commitment to making a positive impact on the
            world. Join us on this exciting journey as we drive quantum
            innovations for human progress.
          </p>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
