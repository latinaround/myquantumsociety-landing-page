import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Event",
};

interface Props {
  params: {};
}

const EventPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/design4.png')" }}></div>
        <h1 className="sm:text-6xl text-4xl text-white font-bold relative">Events</h1>
      </div>
      <div className="min-h-screen p-6" style={{ backgroundColor: "var( oklch(var(--bc) / 1))" }}>
        <div className="container mx-auto">
          <section className="mb-12">
            <div className="bg-yellow-300 text-black p-4 rounded-lg mb-6 text-center">
              <p className="text-lg font-medium">
                Check here for regular updates about upcoming events!
              </p>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Gen AI Lecture Series</h2>
            <p className="text-xl font-light text-white mb-4">
              Join us for our Gen AI Lecture Series where we explore the latest advancements in generative AI and its applications.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Lectures</h2>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="w-full sm:w-1/2 lg:w-5/12">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/WNF87wMfCSg?si=vzTSKdD9S6u-8CJO"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="max-w-full"
                ></iframe>
                <a 
                  href="/images/Quantum_Internet_7_23.pptx" 
                  download 
                  className="text-blue-500 underline mt-2 inline-block"
                >
                  Download Lecture Slides
                </a>
              </div>
              <div className="w-full sm:w-1/2 lg:w-5/12">
                <iframe
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/4soeAaCLpwY?si=GUXndh4y-GqYJle8"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  className="max-w-full"
                ></iframe>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
};

export default EventPage;
