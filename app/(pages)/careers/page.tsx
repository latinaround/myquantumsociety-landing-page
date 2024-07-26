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
      <div className="min-h-screen p-6">
        <div className="container mx-auto">
          <p>
            If you are interested in contributing to the project, click Open-Source above!
          </p>

        </div>
      </div>
    </main>
  );
};

export default CareersPage;
