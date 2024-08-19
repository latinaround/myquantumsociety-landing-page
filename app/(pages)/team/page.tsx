import { NextPage } from "next";
import Image from "next/image"; // Import the Image component

interface Props {
  params: {};
}

const TeamPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full text-justify">
      <div className="bg-primary min-h-80 flex justify-center items-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: "url('/images/design4.png')" }}
        ></div>
        <h1 className="sm:text-6xl text-4xl text-white font-bold relative">
          Team
        </h1>
      </div>
      <div className="min-h-screen p-6 flex flex-col items-center bg-gray-800">
        <div className="container mx-auto text-white">
          <p className="mb-4" style={{ textAlign: 'justify' }}>
            qAIntum.ai was founded on April 2, 2024, in Palo Alto, California,
            with a mission to integrate quantum computing with artificial
            intelligence (AI) and develop cutting-edge natural language
            processing (NLP) solutions. Our team consists of experts with deep
            knowledge and experience in their respective fields, driving the
            innovation and success of our Quantum Large Language Model (QLLM)
            project.
          </p>

          <div className="space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-white my-4 border-b-2 pb-2">
                Engineering
              </h2>
              <div className="space-y-6">
                <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/Sophie.png"
                      alt="Sophie Choe"
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-6 ">
                    <h3 className="text-xl ">Sophie Choe, PhD</h3>
                    <p>CEO/Quantum AI Researcher</p>
                    <p style={{ textAlign: 'justify' }}>
                      Sophie is our lead researcher and CEO, holding a PhD in
                      Electrical and Computer Engineering and an MS in
                      Mathematics from Portland State University. With
                      extensive expertise in Quantum Machine Learning (QML),
                      Sophie spearheads the technical development of our QLLM
                      project, ensuring our innovations remain at the forefront
                      of the industry.
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/Max.png"
                      alt="Max Ivry"
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Max Ivry</h3>
                    <p>Quantum AI Research Engineer</p>
                    <p style={{ textAlign: 'justify' }}>
                      Max is a Quantum AI Research Engineer with a strong
                      background in data structures, software development, and
                      artificial intelligence. His work is instrumental in the
                      development and optimization of our quantum-based AI
                      models. Max holds a BS in Computer Science and Spanish
                      from the University of Vermont. In addition to his
                      technical skills, he is a chess player, a table tennis
                      coach, and a pianist.
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/Nikilesh.png"
                      alt="Nikilesh B R"
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Nikilesh B R</h3>
                    <p>Quantum AI Research Engineer</p>
                    <p style={{ textAlign: 'justify' }}>
                      Nikilesh is a key Quantum AI Research Engineer,
                      contributing to the advancement of our Quantum Neural
                      Networks and their integration into NLP solutions. He has
                      worked on novel hybrid Quantum Classical Generative AI
                      applications, combining Quantum NLP with classical Stable
                      Diffusion models, and developed Quantum Generative
                      Adversarial Networks (QGANs) for image generation.
                      Nikilesh holds a Bachelor of Engineering from Milnad
                      College of Engineering, and his expertise in quantum
                      algorithms is vital to our research efforts.
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/Raghuram.png"
                      alt="Raghuram Nataraja"
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Raghuram Nataraja</h3>
                    <p>Software Engineer</p>
                    <p style={{ textAlign: 'justify' }}>
                      Raghuram is our Software Engineer, responsible for the
                      implementation and deployment of our quantum computing
                      models. His work involves optimizing for computational
                      efficiency and building robust infrastructure. He ensures
                      the seamless integration of our quantum innovations into
                      real-world applications. Raghuram is currently pursuing an
                      MS in Computer Science at Portland State University.
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/Alex.png"
                      alt="Alex Olivas"
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Alex Olivas</h3>
                    <p>Advisor of Software Engineering</p>
                    <p style={{ textAlign: 'justify' }}>
                      Alex brings a wealth of experience as an advisor, having
                      served as VP of software engineering at multiple quantum
                      computing companies. He plays a crucial role in
                      translating theoretical models into practical
                      applications. Alex holds a PhD in Physics from the
                      University of Colorado Boulder and is currently pursuing
                      an MS in Computer Science from the Georgia Institute of
                      Technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-center bg-gray-700 p-4 rounded-lg">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/Vinay.png"
                      alt="Vinay Kumar"
                      width={128}
                      height={128}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold">Vinay Kumar</h3>
                    <p>Transformer and Large Language Model Expert</p>
                    <p style={{ textAlign: 'justify' }}>
                      Vinay is our expert in Transformers and Large Language
                      Models, with a strong background in software engineering
                      and distributed computing. Currently a Machine Learning
                      Data Scientist at TIAA, Vinay's Master’s thesis in
                      Electrical and Electronics from North Carolina State
                      University explored different optimization algorithms for
                      Transformers, contributing significantly to our QLLM
                      project.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Operations Section */}
          <section>
            <h2 className="text-2xl font-bold text-white my-4 border-b-2 pb-2">
              Operations
            </h2>
            <div className="flex items-center bg-gray-700 p-4 rounded-lg">
              <div className="flex-shrink-0">
                <Image
                  src="/images/Briana.png" // Update this path to the correct image path
                  alt="Briana Lee"
                  width={128}
                  height={128}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="ml-6">
                <h3 className="text-xl font-bold">Briana Lee</h3>
                <p>Head of Business Development/Operations</p>
                <p style={{ textAlign: 'justify' }}>
                  Briana leads our business development and operations, focusing
                  on market strategy and commercial partnerships. Her expertise
                  is pivotal in driving qAIntum.ai's growth and establishing
                  strategic alliances that align with our vision.
                </p>
              </div>
            </div>
          </section>

          {/* Curriculum Building Section */}
          <section>
            <h2 className="text-2xl font-bold text-white my-4 border-b-2 pb-2">
              Curriculum Building
            </h2>
            <ul className="list-disc list-inside text-lg">
              <li>Astha Bhandari</li>
              <li>Alexandra Haslund-Gourley</li>
            </ul>
          </section>

          {/* Advisors Section */}
          <section>
            <h2 className="text-2xl font-bold text-white my-4 border-b-2 pb-2">
              Advisors
            </h2>
            <ul className="list-disc list-inside text-lg">
              <li>John Acken</li>
              <li>Glenn Ballard</li>
              <li>Darran Milne</li>
              <li>Arjun Subedi</li>
            </ul>
          </section>

          {/* Commitment to Excellence Section */}
          <h2 className="text-xl my-4 font-normal text-white">
            Commitment to Excellence
          </h2>
          <p style={{ textAlign: 'justify' }}>
            Every member of our team is committed to excellence. From research
            and development to implementation and support, our team works
            diligently to ensure that we remain at the cutting edge of quantum
            computing technology.
          </p>

          {/* Join Us Section */}
          <h2 className="text-xl my-4 font-normal text-white">Join Us</h2>
          <p style={{ textAlign: 'justify' }}>
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
