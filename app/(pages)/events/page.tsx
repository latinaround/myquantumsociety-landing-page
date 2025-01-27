import { Metadata, NextPage } from "next";
import Image from "next/image";
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
      <div className="min-h-screen p-6 bg-gray-800">
        <div className="container mx-auto">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quantum Gen AI Lecture Series</h2>
            <p className="text-xl font-light text-white mb-4">
              Join us for our Gen AI Lecture Series where we explore the latest advancements in generative AI and its applications.
            </p>
            <h2 className="text-3xl font-bold text-white mb-4">Upcoming Lectures</h2>
            <div className="flex justify-center mb-6">
              <Image
                src="/images/Banner 3.png"
                alt="Upcoming Lecture: History of Quantum Computing"
                width={800}
                height={300}
                className="rounded-lg"
              />
            </div>
            <div className="mb-6 relative" style={{ left: "50%", transform: "translateX(-400px)" }}>
              <p className="text-xl font-bold text-white mb-1">
                Date and Time:
              </p>
              <p className="text-xl font-light text-white mb-4">
                Tuesday, August 27 · 5 - 7 PM PDT
              </p>

              <p className="text-xl font-bold text-white mb-1">
                Location:
              </p>
              <p className="text-xl font-light text-white">
                Sheppard Mullin
                <br />
                1540 El Camino Real #Suite 120
                <br />
                Menlo Park, CA 94025, United States
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://www.eventbrite.com/e/quantum-gen-ai-lecture-series-tickets-967614941337?aff=oddtdtcreator"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#066FBF] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5CB6F9] transition duration-300"
              >
                Register for the Lecture
              </a>
            </div>
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
