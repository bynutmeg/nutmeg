import PolicyLayout from "../components/PolicyLayout";

export default function PrivacyPolicyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="Your privacy matters to us. This page explains how Nutmeg collects, uses and protects your information."
    >
      <section>
        <h2 className="text-2xl font-semibold mb-3">Information We Collect</h2>
        <p>
          We may collect your name, email address, shipping address, phone
          number and order details when you place an order or contact us.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">How We Use Your Information</h2>
        <p>
          Your information is used to process orders, provide customer support,
          improve our services and communicate important updates regarding your
          purchases.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Data Security</h2>
        <p>
          We take reasonable measures to protect your personal information.
          However, no method of online transmission or storage is completely
          secure.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Third-Party Services</h2>
        <p>
          We may use trusted third-party providers for payment processing,
          shipping and website analytics. These providers only receive the
          information necessary to perform their services.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Contact</h2>
        <p>
          If you have any questions about this Privacy Policy, please email us
          at{" "}
          <a
            href="mailto:bynutmeg.online@gmail.com"
            className="underline hover:text-[#7C8A63]"
          >
            bynutmeg.online@gmail.com
          </a>
          .
        </p>
      </section>
    </PolicyLayout>
  );
}