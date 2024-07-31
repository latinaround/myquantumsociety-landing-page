import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Careers",
};

interface Props {
  params: {};
}

const CareersPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/design1.png')" }}></div>
        <h1 className="sm:text-6xl text-4xl text-white font-bold relative">Careers</h1>
      </div>
      <div className="min-h-screen p-6" style={{ backgroundColor: "var( oklch(var(--bc) / 1))" }}>
        <div className="container mx-auto text-white">
          <p className="mt-4">
            We are at the forefront of the Quantum Computing and Generative AI revolution. Our work with quantum large language models and Photonic QPUs as AI accelerators requires talented ML/AI research engineers and physicists.
          </p>
          <p className="mt-4">
            Based in Palo Alto, we offer flexible remote or hybrid working conditions. No matter where you are in the world, if you have expertise in any of the following areas, we invite you to send your resume and LinkedIn profile to <a href="mailto:contact@qaintum.ai" className="text-blue-500 underline">contact@qaintum.ai</a>:
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>Mathematics</li>
            <li>Quantum Optics</li>
            <li>Software Engineering</li>
            <li>Distributed Computing</li>
            <li>ML/AI</li>
            <li>Data Science</li>
            <li>High-Performance Computing</li>
          </ul>
        </div>
      </div>
    </main>
  );
};

export default CareersPage;
