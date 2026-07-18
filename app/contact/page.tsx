import PolicyLayout from "../components/PolicyLayout";

export default function ContactPage() {
  return (
    <PolicyLayout
      title="Contact Us"
      description="We'd love to hear from you! Whether you have a question about an order, our products, or just want to say hello, we're here to help."
    >
      <section>
        <h2 className="text-2xl font-semibold mb-3">Email</h2>
        <p>
          Reach us anytime at{" "}
          <a
            href="mailto:bynutmeg.online@gmail.com"
            className="underline hover:text-[#7C8A63]"
          >
            bynutmeg.online@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Instagram</h2>
        <p>Follow our journey and send us a message on Instagram.</p>

        <p className="mt-2">
          <a
            href="https://instagram.com/nutmeg.online"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#7C8A63]"
          >
            @nutmeg.online
          </a>
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Response Time</h2>
        <p>We aim to reply within 1–2 business days.</p>
      </section>
    </PolicyLayout>
  );
}