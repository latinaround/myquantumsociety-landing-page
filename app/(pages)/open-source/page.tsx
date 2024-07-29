import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Open Source",
};

interface Props {
  params: {};
}

const OpenSourcePage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center">
        <h1 className="sm:text-6xl text-4xl text-white font-bold">Open Source</h1>
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto">
          <section className="my-8">
            <h2 className="text-3xl font-bold">Our Initiative</h2>
            <p className="mt-4 text-lg">
              At qAIntum.ai, we are committed to advancing the field of quantum computing through open source contributions. Our initiative aims to foster collaboration and innovation by making our research and development accessible to the global community. By sharing our quantum algorithms, tools, and libraries, we hope to accelerate the development of quantum technologies and their applications in solving real-world problems.
            </p>
          </section>
          <section className="my-8">
            <h2 className="text-3xl font-bold">Repository</h2>
            <p className="mt-4 text-lg">
              You can explore our open source project on GitHub, where we share our latest developments and welcome contributions from the community. Check out the repository below:
            </p>
            <div className="mt-4">
              <iframe
                src="https://github.com/qaintumai/quantum"
                title="qAIntum.ai Quantum Repository"
                width="100%"
                height="400px"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
            <div className="mt-8">
              <a
                href="https://github.com/qaintumai/quantum"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy text-white px-6 py-3 rounded-md text-lg font-bold"
                style={{ backgroundColor: "#000080" }} // Navy blue background color
              >
                Visit Page
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default OpenSourcePage;