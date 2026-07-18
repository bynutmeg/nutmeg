import PolicyLayout from "../components/PolicyLayout";

export default function FAQPage() {
  return (
    <PolicyLayout
      title="Frequently Asked Questions"
      description="Find answers to some of the most common questions about ordering from Nutmeg."
    >
      <section>
        <h2 className="text-2xl font-semibold mb-3">
          When will my order be shipped?
        </h2>
        <p>
          Orders are usually packed and dispatched within 1–3 business days.
          You'll receive tracking details once your order has been shipped.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Do you ship across India?
        </h2>
        <p>
          Yes! We currently ship across India. Delivery times vary depending on
          your location.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Can I return my order?
        </h2>
        <p>
          Returns are accepted only for damaged, defective, or incorrect items.
          Please contact us within 48 hours of delivery with photos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          How can I contact Nutmeg?
        </h2>
        <p>
          You can email us anytime at{" "}
          <a
            href="mailto:bynutmeg.online@gmail.com"
            className="underline hover:text-[#7C8A63]"
          >
            bynutmeg.online@gmail.com
          </a>{" "}
          or send us a message on Instagram at{" "}
          <a
            href="https://instagram.com/nutmeg.online"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-[#7C8A63]"
          >
            @nutmeg.online
          </a>
          .
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Will you be adding more stationery?
        </h2>
        <p>
          Absolutely! We're always looking for new, cozy and creative stationery
          to add to our collection, so keep an eye on our Instagram for updates.
        </p>
      </section>
    </PolicyLayout>
  );
}