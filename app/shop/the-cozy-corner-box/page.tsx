import Link from "next/link";
import Image from "next/image";

export default function LittleNutmegBoxPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#5C4335]">
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          {/* Back Button */}
          <Link
            href="/shop"
            className="inline-flex items-center text-[#8B5E3C] transition hover:opacity-70"
          >
            ← Back to Shop
          </Link>

          <div className="mt-12 grid gap-14 lg:grid-cols-2">

            {/* Product Image */}
            <div className="relative aspect-square overflow-hidden rounded-3xl">
  <Image
    src="/shop/stationery-placeholder/stationery-placeholder.jpg"
    alt="The Cozy Corner Box"
    fill
    className="object-cover"
    priority
  />
</div>

            {/* Product Info */}
            <div className="flex flex-col justify-center">

              <span className="inline-flex w-fit rounded-full bg-[#F7E8EA] px-4 py-2 text-sm font-medium text-[#B96A75]">
                Coming Soon
              </span>

              <h1 className="mt-6 text-5xl font-semibold">
                The Cozy Corner Box
              </h1>

             <p className="mt-4 text-3xl font-medium text-[#8B5E3C]">
  ₹299
</p>

<div className="mt-6 space-y-3 text-[#6B584D]">
  <p>✓ More stationery to love</p>
  <p>✓ Gift-ready packaging</p>
  <p>✓ Perfect for journaling & planning</p>
</div>

              <p className="mt-8 text-lg leading-8 text-[#6B584D]">
               Settle into your favorite corner with an expanded collection of stationery made for journaling, planning, and slow afternoons.
              </p>

              <button
                disabled
                className="mt-10 w-fit cursor-not-allowed rounded-full bg-[#8B5E3C] px-8 py-4 text-white opacity-80"
              >
Join the Waitlist
              </button>

            </div>

          </div>
        </div>
      </section>

      {/* What's Inside */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#EFE7DE] bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-semibold">
            What's Inside
          </h2>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">

  {[
  { icon: "📝", title: "Premium Notepad" },
  { icon: "📒", title: "Memo Pad" },
  { icon: "🖊️", title: "Cute Gel Pen" },
  { icon: "🎀", title: "3 Assorted Washi Tapes" },
  { icon: "✨", title: "3 Sticker Sheets" },
  { icon: "🎁", title: "Surprise Freebie" },
].map((item) => (
    <div
      key={item.title}
      className="rounded-2xl border border-[#EFE7DE] bg-[#FFFCFA] p-5 transition hover:shadow-md"
    >
      <div className="text-3xl">{item.icon}</div>

      <p className="mt-3 font-medium text-lg">
        {item.title}
         </p>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* Perfect For */}
      <section className="px-6 pb-10">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#EFE7DE] bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-semibold">
            Perfect For
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6B584D]">
           Perfect for cozy journaling sessions, students, planners, stationery lovers, and anyone who believes there's always room for one more notebook.
          </p>

        </div>
      </section>

      {/* Packaging */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#EFE7DE] bg-white p-10 shadow-sm">

          <h2 className="text-3xl font-semibold">
            Packaging
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6B584D]">
           Every Nutmeg box is carefully hand-packed with love and finished in our signature cozy style. Whether you're gifting someone special or treating yourself, every unboxing is designed to feel warm, thoughtful, and a little magical.
          </p>

          <p className="mt-10 text-sm leading-7 text-[#8C776A]">
            Contents and designs may vary slightly depending on availability
            while maintaining the same value and cozy experience.
          </p>

        </div>
      </section>
      <section className="px-6 pb-20">
  <div className="mx-auto max-w-6xl rounded-[32px] border border-[#EFE7DE] bg-[#FFF9F5] p-10">

    <h2 className="text-3xl font-semibold">
      Made for...
    </h2>

    <div className="mt-8 flex flex-wrap gap-4">

      {[
        "Journaling",
        "Study Sessions",
        "Cozy Desk Setups",
        "Gift Giving",
        "Stationery Lovers",
      ].map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-white px-5 py-3 shadow-sm"
        >
          {tag}
        </span>
      ))}

    </div>

  </div>
</section>
<section className="px-6 pb-24">

  <div className="mx-auto max-w-6xl">

    <h2 className="text-3xl font-semibold">
      Explore More
    </h2>

    <div className="mt-8 grid gap-6 md:grid-cols-2">

      <Link
        href="/shop/the-cozy-corner-box"
        className="rounded-[28px] border border-[#EFE7DE] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
      >
        ☕ The Cozy Corner Box
      </Link>

      <Link
        href="/shop/the-sunday-desk-box"
        className="rounded-[28px] border border-[#EFE7DE] bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
      >
        ✨ The Sunday Desk Box
      </Link>

    </div>

  </div>

</section>
    </main>
  );
}
