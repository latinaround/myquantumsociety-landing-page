import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

interface Props {
  params: {};
}

const PrivacyPolicyPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="min-h-40 flex justify-center items-center">
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto text-left text-lg">
          <p>Effective Date: July 29, 2024</p>
          <p>
            qAIntum.ai Inc. (“we,” “our,” “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. If you do not agree with the terms of this Privacy Policy, please do not access the website or use the services.
          </p>

          <h2 className="text-2xl font-bold mt-6">1. Introduction</h2>
          <p>
            This Privacy Policy aims to give you information on how qAIntum.ai collects and processes your personal data.
          </p>

          <h2 className="text-2xl font-bold mt-6">2. Information We Collect</h2>
          <p><strong>Personal Information:</strong> We may collect the following personal information:</p>
          <ul className="list-disc ml-6">
            <li>Name</li>
            <li>Email address</li>
            <li>Payment information</li>
            <li>Any other information you provide directly to us</li>
          </ul>
          <p><strong>Non-Personal Information:</strong> We may collect non-personal information such as:</p>
          <ul className="list-disc ml-6">
            <li>Browser type</li>
            <li>IP address</li>
            <li>Cookies and similar technologies</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">3. How We Collect Information</h2>
          <p><strong>Directly from Users:</strong> We collect information you provide directly to us, such as when you create an account, fill out a form, or contact us.</p>
          <p><strong>Automatically:</strong> We collect information automatically as you navigate through the site. This may include usage details, IP addresses, and information collected through cookies and other tracking technologies.</p>
          <p><strong>Third-Party Sources:</strong> We may receive information about you from other sources, such as analytics providers.</p>

          <h2 className="text-2xl font-bold mt-6">4. Use of Information</h2>
          <p>We use the information we collect for various purposes, including to:</p>
          <ul className="list-disc ml-6">
            <li>Provide and maintain our services</li>
            <li>Improve our website and services</li>
            <li>Communicate with you, including sending newsletters and responding to inquiries</li>
            <li>Process transactions</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold mt-6">5. Sharing of Information</h2>
          <p><strong>With Service Providers:</strong> We may share your information with third-party service providers that perform services on our behalf.</p>
          <p><strong>For Legal Reasons:</strong> We may disclose your information to comply with legal obligations or to protect our rights.</p>
          <p><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred.</p>

          <h2 className="text-2xl font-bold mt-6">6. Cookies and Tracking Technologies</h2>
          <p><strong>Types of Cookies:</strong> We use session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device until you delete them).</p>
          <p><strong>Purpose of Cookies:</strong> Cookies help us enhance your user experience by remembering your preferences and visits.</p>
          <p><strong>Managing Cookies:</strong> You can control cookies through your browser settings.</p>

          <h2 className="text-2xl font-bold mt-6">7. Data Security</h2>
          <p>We use administrative, technical, and physical security measures to help protect your personal information. However, no method of transmission over the Internet, or method of electronic storage, is 100% secure.</p>

          <h2 className="text-2xl font-bold mt-6">8. Data Retention</h2>
          <p>We retain your personal information only as long as necessary to fulfill the purposes for which we collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.</p>

          <h2 className="text-2xl font-bold mt-6">9. User Rights</h2>
          <p><strong>Access and Correction:</strong> You have the right to request access to and correct your personal information.</p>
          <p><strong>Deletion:</strong> You have the right to request the deletion of your personal information.</p>
          <p><strong>Objection and Restriction:</strong> You have the right to object to or request the restriction of the processing of your personal information.</p>
          <p><strong>Data Portability:</strong> You have the right to request a copy of your personal information in a portable format.</p>

          <h2 className="text-2xl font-bold mt-6">10. Children’s Privacy</h2>
          <p>Our services are not directed to children under the age of 18. If we learn that we have collected personal information from a child under age 18 without parental consent, we will delete that information as quickly as possible.</p>

          <h2 className="text-2xl font-bold mt-6">11. Changes to this Privacy Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

          <h2 className="text-2xl font-bold mt-6">12. Contact Information</h2>
          <p>If you have any questions or concerns about this Privacy Policy, please contact us at:</p>
          <p>Email: <a href="mailto:contact@qaintum.ai" className="text-blue-500">contact@qaintum.ai</a></p>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
