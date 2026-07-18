import PolicyLayout from "../components/PolicyLayout";

export default function ReturnsPage() {
  return (
    <PolicyLayout
      title="Returns & Refunds"
      description="We want you to love every Nutmeg order. If something isn't right, here's how we'll help."
    >
      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Return Eligibility
        </h2>
        <p>
          Returns are accepted only for items that arrive damaged, defective,
          or incorrect. Please contact us within 48 hours of receiving your
          order with photos of the item and packaging.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Non-Returnable Items</h2>
        <p>
          Due to the nature of stationery and curated gift boxes, we are
          unable to accept returns for change of mind or personal preference.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Refunds</h2>
        <p>
          Once your request has been reviewed and approved, refunds will be
          processed to the original payment method within 5–7 business days.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Replacement Orders</h2>
        <p>
          If an item arrives damaged or incorrect, we'll gladly send a
          replacement whenever possible. If a replacement isn't available, a
          refund will be issued.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Need Help?</h2>
        <p>
          Email us at{" "}
          <a
            href="mailto:bynutmeg.online@gmail.com"
            className="underline hover:text-[#7C8A63]"
          >
            bynutmeg.online@gmail.com
          </a>{" "}
          and we'll be happy to assist you.
        </p>
      </section>
    </PolicyLayout>
  );
}