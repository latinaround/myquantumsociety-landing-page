import { NextPage } from "next";

interface Props {
  params: {};
}
const TeamPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center">
        <h1 className="sm:text-6xl text-4xl text-white font-bold">Team</h1>
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto">
          <p className="mb-4">
            Our team is composed of dedicated research scientists, industry
            experts, and innovators from some of the world&apos;s leading
            institutions. United by a shared passion for quantum computing and a
            commitment to pushing the boundaries of technology, we are
            pioneering new frontiers in computational science.
          </p>

          <h2 className="text-xl mb-4 font-semibold text-gray-900">
            Leadership
          </h2>
          <h4 className="font-medium mb-2">[Name], CEO and Co-Founder</h4>

          <p>
            With a background in [field], [Name] leads our company with a vision
            for leveraging quantum computing to solve some of the world's most
            complex problems. [His/Her] leadership is characterized by a blend
            of scientific expertise and a strategic approach to innovation.
          </p>

          <h4 className="font-medium mt-4 mb-2">[Name], CTO and Co-Founder</h4>
          <p>
            An expert in quantum physics and photonics, [Name] oversees the
            technical development of our Quantum Large Language Models.
            [His/Her] work has been instrumental in advancing our
            photonics-based continuous variable quantum computing model.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Research Scientists
          </h2>
          <p>
            Our research team includes distinguished scientists from top-tier
            institutions such as MIT, Stanford, and Caltech. Their expertise
            spans quantum mechanics, neural networks, and photonics, driving the
            innovative solutions that are at the core of our QLLMs.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Industry Experts
          </h2>
          <p>
            Our industry experts bring a wealth of experience from leading
            technology companies and research labs. Their practical insights
            ensure that our quantum computing solutions are not only
            groundbreaking but also applicable to real-world challenges.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Collaborative Spirit
          </h2>
          <p>
            At the heart of our team is a collaborative spirit. We foster an
            environment where interdisciplinary collaboration is encouraged, and
            innovative ideas are celebrated. This synergy enables us to tackle
            the complexities of quantum computing and develop solutions that are
            both visionary and practical.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">
            Commitment to Excellence
          </h2>
          <p>
            Every member of our team is committed to excellence. From research
            and development to implementation and support, our team works
            diligently to ensure that we remain at the cutting edge of quantum
            computing technology.
          </p>

          <h2 className="text-xl my-4 font-semibold text-gray-900">Join Us</h2>
          <p>
            We are always on the lookout for talented individuals who share our
            passion for innovation and our commitment to making a positive
            impact. If you are driven by curiosity and excited about the future
            of quantum computing, we invite you to join our team and be a part
            of this exciting journey.
          </p>
          <p>
            Together, we are driving quantum innovations for human progress.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TeamPage;
