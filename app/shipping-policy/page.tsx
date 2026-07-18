import PolicyLayout from "../components/PolicyLayout";

export default function ShippingPolicyPage() {
  return (
    <PolicyLayout
      title="Shipping Policy"
      description="Here's everything you need to know about how Nutmeg processes and ships your orders."
    >
      <section>
        <h2 className="text-2xl font-semibold mb-3">Processing Time</h2>
        <p>
          Orders are typically processed within 1–3 business days after
          confirmation. During launches or sales, processing may take a little
          longer.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Shipping</h2>
        <p>
          Once your order has been dispatched, you'll receive tracking details
          (where available). Delivery times vary depending on your location and
          the courier service.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Delivery Delays</h2>
        <p>
          While we do our best to ensure timely delivery, delays caused by
          courier partners, weather, holidays or unforeseen circumstances are
          beyond our control.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Incorrect Address</h2>
        <p>
          Please ensure your shipping address is correct before placing your
          order. Nutmeg cannot be responsible for delays or failed deliveries
          caused by incorrect address details.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Questions?</h2>
        <p>
          If you have any questions about shipping, feel free to contact us at{" "}
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