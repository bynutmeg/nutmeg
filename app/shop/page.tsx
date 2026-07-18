import Link from "next/link";
import Image from "next/image";
export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#5C4335]">
      {/* HERO */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
            Coming Soon
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Browse our upcoming
            <br />
            collections.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6B584D]">
            We're carefully curating beautiful stationery, gift boxes and cozy
            desk essentials. Here's a little preview of what's on the way.
          </p>
        </div>
      </section>

         {/* FEATURED BOXES */}
<section className="px-6 pb-24">
  <div className="mx-auto max-w-7xl">

    <div className="grid gap-8 lg:grid-cols-3">

      {[
  {
    name: "🌰 The Little Nutmeg Box",
    price: "₹199",
    image: "/shop/stationery-placeholder/stationery-placeholder.jpg",
    href: "/shop/the-little-nutmeg-box",
    description:
      "A little box of cozy essentials, thoughtfully curated to brighten your desk and bring joy to everyday moments.",
  },
  {
    name: "☕ The Cozy Corner Box",
    price: "₹299",
    image: "/shop/stationery-placeholder/stationery-placeholder.jpg",
    href: "/shop/the-cozy-corner-box",
    description:
      "Settle into your favorite corner with an expanded collection of stationery made for journaling, planning, and slow afternoons.",
  },
  {
    name: "✨ The Sunday Desk Box",
    price: "₹399",
    image: "/shop/stationery-placeholder/stationery-placeholder.jpg",
    href: "/shop/the-sunday-desk-box",
    description:
      "Our most complete stationery experience, filled with premium goodies for journaling, studying, planning, and gifting.",
  },
].map((product) => (
        <article
          key={product.name}
          className="overflow-hidden rounded-[32px] border border-[#EFE7DE] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width:1024px) 100vw, 33vw"
              className="object-cover"
            />
          </div>

          <div className="p-8">

            <span className="inline-flex rounded-full bg-[#F7E8EA] px-4 py-1 text-sm font-medium text-[#B96A75]">
              Coming Soon
            </span>

            <h2 className="mt-5 text-3xl font-semibold">
              {product.name}
            </h2>

            <p className="mt-2 text-2xl font-medium text-[#8B5E3C]">
              {product.price}
            </p>

            <p className="mt-5 leading-7 text-[#6B584D]">
              {product.description}
            </p>

            <Link
              href={product.href}
              className="mt-8 inline-flex rounded-full border border-[#8B5E3C] px-6 py-3 transition hover:bg-[#8B5E3C] hover:text-white"
            >
              View Details
            </Link>

          </div>
        </article>
      ))}

    </div>

    <p className="mx-auto mt-16 max-w-3xl text-center text-sm leading-7 text-[#8C776A]">
      Contents and designs may vary slightly depending on availability while
      maintaining the same value and cozy experience.
    </p>

  </div>
</section>
    </main>
  );
}