import { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions",
};

interface Props {
  params: {};
}

const TermsAndConditionPage: NextPage<Props> = ({ params }) => {
  return (
    <main className="w-full">
      <div className="bg-primary min-h-80 flex justify-center items-center">
        <h1 className="sm:text-6xl text-4xl text-white font-bold">
          Terms and Conditions
        </h1>
      </div>
      <div className="min-h-screen p-6">
        <div className="container mx-auto text-left text-lg">
          <p>Effective Date: July 29, 2024</p>
          <p>
            By accessing or using qAIntum.ai (the “Website”) and its services,
            you agree to comply with and be bound by these Terms and Conditions
            (“Terms”). If you do not agree with these Terms, please do not use
            the Website or the services.
          </p>

          <h2 className="text-2xl font-bold mt-6">1. Introduction</h2>
          <p>
            Welcome to qAIntum.ai, a platform providing advanced quantum neural
            networks, quantum transformers, and future quantum large language
            models.
          </p>

          <h2 className="text-2xl font-bold mt-6">2. Definitions</h2>
          <p>
            "qAIntum.ai" refers to the website and services provided by
            qAIntum.ai Inc. "User" refers to any individual or entity using the
            services of qAIntum.ai. "Services" includes quantum neural networks,
            quantum transformers, and future quantum large language models
            provided by qAIntum.ai.
          </p>

          <h2 className="text-2xl font-bold mt-6">3. Use of the Website and Services</h2>
          <p>
            <strong>Eligibility:</strong> You must be at least 18 years old to
            use our services. If you are under 18, you may use our services only
            with the involvement of a parent or guardian.
          </p>
          <p>
            <strong>Account Registration:</strong> You may need to create an
            account to access certain services. You are responsible for
            maintaining the confidentiality of your account information and for
            all activities that occur under your account.
          </p>
          <p>
            <strong>User Conduct:</strong> You agree not to use the services for
            any unlawful or prohibited activities, including but not limited to
            spamming, hacking, or uploading harmful content.
          </p>

          <h2 className="text-2xl font-bold mt-6">4. Intellectual Property</h2>
          <p>
            <strong>Ownership:</strong> All content, software, and technology on
            qAIntum.ai are the property of qAIntum.ai Inc. or its licensors.
          </p>
          <p>
            <strong>Use of Content:</strong> You are granted a limited license
            to access and use the content for personal or internal business
            purposes. You may not copy, distribute, or create derivative works
            without our explicit permission.
          </p>

          <h2 className="text-2xl font-bold mt-6">5. User-Generated Content</h2>
          <p>
            <strong>Responsibility:</strong> You are responsible for any content
            you submit or upload to the Website.
          </p>
          <p>
            <strong>Rights Granted:</strong> By submitting content, you grant
            qAIntum.ai a worldwide, royalty-free, and non-exclusive license to
            use, reproduce, and distribute your content.
          </p>
          <p>
            <strong>Prohibited Content:</strong> You may not submit content that
            is illegal, offensive, or infringes on the intellectual property
            rights of others.
          </p>

          <h2 className="text-2xl font-bold mt-6">6. Privacy Policy</h2>
          <p>
            Please refer to our Privacy Policy for information on how we
            collect, use, and protect your personal data.
          </p>

          <h2 className="text-2xl font-bold mt-6">7. Disclaimers and Limitation of Liability</h2>
          <p>
            <strong>Disclaimers:</strong> qAIntum.ai provides services "as is"
            without any warranties, express or implied. We do not guarantee the
            accuracy, reliability, or availability of the services.
          </p>
          <p>
            <strong>Limitation of Liability:</strong> qAIntum.ai Inc. is not
            liable for any indirect, incidental, or consequential damages
            arising from the use of the services.
          </p>

          <h2 className="text-2xl font-bold mt-6">8. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless qAIntum.ai Inc. from any
            claims, damages, losses, liabilities, and expenses arising from your
            use of the services.
          </p>

          <h2 className="text-2xl font-bold mt-6">9. Modifications to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. Significant
            changes will be communicated via email or through a notice on the
            Website.
          </p>

          <h2 className="text-2xl font-bold mt-6">10. Termination</h2>
          <p>
            We may terminate or suspend your access to the services at any time,
            with or without cause, including for breach of these Terms.
          </p>

          <h2 className="text-2xl font-bold mt-6">11. Governing Law</h2>
          <p>
            These Terms are governed by the laws of the US. Any disputes arising
            from these Terms will be resolved in the courts of the US.
          </p>

          <h2 className="text-2xl font-bold mt-6">12. Contact Information</h2>
          <p>
            If you have any questions or concerns about these Terms, please
            contact us at contact@qaintum.ai.
          </p>

          <h2 className="text-2xl font-bold mt-6">13. Miscellaneous</h2>
          <p>
            <strong>Entire Agreement:</strong> These Terms constitute the entire
            agreement between you and qAIntum.ai Inc.
          </p>
          <p>
            <strong>Severability:</strong> If any part of these Terms is found
            to be invalid, the remaining provisions will continue in full force
            and effect.
          </p>
          <p>
            <strong>Waiver:</strong> Failure to enforce any part of these Terms
            does not constitute a waiver of our right to enforce that part
            later.
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditionPage;
