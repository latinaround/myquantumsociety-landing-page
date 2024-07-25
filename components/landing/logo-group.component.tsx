"use client";
import { Fade } from "react-awesome-reveal";

const LogoGroupComponent = () => {
  return (
    <section className="landing-section bg-white p-14 ">
      <div className="container mx-auto px-3 text-center">
        <Fade direction="up" delay={100} triggerOnce>
          <h2 className="sm:text-4xl text-2xl font-medium text-gray-900 mb-16 leading-relaxed">
            Research Scientists and industry experts from <br />
            top institutions believe in our vision and mission
          </h2>
        </Fade>
        <Fade direction="up" delay={200} triggerOnce>
          <div className="mx-auto mt-16 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="./images/google.png"
              alt="Google"
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="./images/nasa.png"
              alt="NASA"
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="./images/jpmorgan.png"
              alt="JPMorgan"
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="./images/baesystems.png"
              alt="BAEsystems"
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="./images/samsung-venture.png"
              alt="Samsung Venture"
              height={48}
            />
            <img
              className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="./images/viviQ.png"
              alt="viviQ"
              height={48}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export { LogoGroupComponent };
