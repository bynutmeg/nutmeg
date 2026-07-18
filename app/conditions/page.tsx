import PolicyLayout from "../components/PolicyLayout";

export default function ConditionsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      description="By using the Nutmeg website or placing an order with us, you agree to the following terms and conditions."
    >
      <section>
        <h2 className="text-2xl font-semibold mb-3">Products</h2>
        <p>
          We strive to display our products and descriptions as accurately as
          possible. Minor variations in colour, packaging, or design may occur.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Pricing</h2>
        <p>
          All prices are listed in Indian Rupees (₹) and may change without
          prior notice.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Orders</h2>
        <p>
          We reserve the right to cancel or refuse orders due to pricing
          errors, stock availability, or suspected fraudulent activity.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">
          Intellectual Property
        </h2>
        <p>
          All content on this website, including our logo, branding, text,
          graphics, and images, belongs to Nutmeg and may not be copied or
          reproduced without written permission.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Liability</h2>
        <p>
          Nutmeg is not responsible for indirect or consequential damages
          arising from the use of this website or our products.
        </p>
      </section>
    </PolicyLayout>
  );
}