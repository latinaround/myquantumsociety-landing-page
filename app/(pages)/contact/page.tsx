import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

interface Props {
  params: {};
}

const ContactPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="min-h-80 flex justify-center items-center relative" >
        <div className="absolute inset-0 bg-cover bg-center opacity-50" style={{ backgroundImage: "url('/images/design4.png')" }}></div>
        <h1 className="sm:text-6xl text-4xl text-white font-bold relative">Contact</h1>
      </div>
      <div className="min-h-screen p-6 bg-gray-800">
        <div className="container mx-auto text-white">
          <p>
            We would love to hear from you! Whether you have questions,
            feedback, or are interested in collaborating with us, please feel
            free to reach out through any of the following channels:{" "}
          </p>

          <div className="my-4">
            <h3 className="text-xl font-bold">Location</h3>
            <h4 className="font-semibold"> Palo Alto, California</h4>
          </div>

          <div className="my-4">
            <h3 className="text-xl font-bold">Phone</h3>
            <h4 className="font-semibold"> (360) 878-5492</h4>
          </div>

          <div className="my-4">
            <h3 className="text-xl font-bold">Email</h3>
            <h4 className="font-semibold">contact@qaintum.ai</h4>
          </div>

          <p>
            Our team is dedicated to providing timely and helpful responses to
            all inquiries. We look forward to connecting with you and exploring
            the exciting possibilities of quantum computing together.
          </p>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
