import { Language } from "@/app/_lib/language/en";
import Image from "next/image";

const FooterComponent = () => {
  return (
    <footer className="p-10 bg-base-200 text-base-content">
      <div className="container m-auto footer ">
        <aside>
          <a href="/">
            <span className="sr-only">QuantumAi</span>
            <Image
              src="./images/logo.svg"
              alt={Language.app.name}
              width={128}
              height={128}
            />
          </a>
          <p>
            {Language.app.name}
            <br />
            {Language.app.copyright}
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="https://www.linkedin.com/company/qaintum-ai/" target="_blank" rel="noopener noreferrer">
              <Image src="/images/social/linkedin.svg" alt="LinkedIn" width={30} height={30} />
            </a>
            <a href="https://github.com/qaintumai" target="_blank" rel="noopener noreferrer">
              <Image src="/images/social/github.svg" alt="GitHub" width={30} height={30} />
            </a>
            <a href="https://www.youtube.com/@qAIntumai-o1b" target="_blank" rel="noopener noreferrer">
              <Image src="/images/social/youtube.svg" alt="YouTube" width={30} height={30} />
            </a>
            <a href="https://twitter.com/qaintumai" target="_blank" rel="noopener noreferrer">
              <Image src="/images/social/twitter.svg" alt="Twitter" width={30} height={30} />
            </a>
            <a href="https://www.instagram.com/qaintumai" target="_blank" rel="noopener noreferrer">
              <Image src="/images/social/instagram.svg" alt="Instagram" width={30} height={30} />
            </a>
          </div>
        </aside>

        <aside>
          <h6 className="footer-title">Contact</h6>
          <p>
            <span className="font-medium">Location:</span> Palo Alto, California
          </p>
          <p>
            <span className="font-medium">Phone Number:</span> (360) 878-5492
          </p>
          <p>
            <span className="font-medium">Email:</span>contact@qaintum.ai
          </p>
        </aside>
        {/* <nav>
        <h6 className="footer-title">Services</h6>
        <a className="link link-hover">Branding</a>
        <a className="link link-hover">Design</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </nav> */}
        <nav>
          <h6 className="footer-title">Company</h6>
          <a href="/about" className="link link-hover">
            About us
          </a>
          <a href="/team" className="link link-hover">
            Team
          </a>
          <a href="/papers" className="link link-hover">
            Papers
          </a>
          <a href="/contact" className="link link-hover">
            Contact
          </a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a href="/terms-and-condition" className="link link-hover">
            Terms of use
          </a>
          <a href="/privacy-policy" className="link link-hover">
            Privacy policy
          </a>
        </nav>
      </div>
    </footer>
  );
};

export { FooterComponent };
