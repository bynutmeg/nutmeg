export default function AboutPage()

{
  return (
    <main className="min-h-screen bg-[#FAF6F0] text-[#5C4335]">

      {/* HERO */}
      <section className="px-6 py-28">
        <div className="mx-auto max-w-4xl text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
            About Nutmeg
          </p>

          <h1 className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Little joys,
            <br />
            thoughtfully curated.
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#6B584D]">
            Nutmeg was created with one simple idea — that beautiful stationery
            can make ordinary days feel a little more special.
          </p>

        </div>
      </section>

      {/* STORY */}
      <section className="bg-[#FFF9F5] px-6 py-24">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-semibold">
            Our Story
          </h2>

          <p className="mt-8 leading-8 text-[#6B584D]">
            We believe that tiny moments deserve beautiful things.
            Whether it's opening a fresh notebook, choosing a favourite pen
            or decorating a journal with washi tape, those little rituals
            make everyday life more enjoyable.
          </p>

          <p className="mt-6 leading-8 text-[#6B584D]">
            Every Nutmeg collection is thoughtfully curated with stationery
            we'd genuinely love to use ourselves. Instead of overwhelming
            choices, we focus on carefully selected pieces that feel useful,
            cozy and inspiring.
          </p>

        </div>
      </section>

      {/* VALUES */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <h2 className="text-center text-4xl font-semibold">
            What Matters To Us
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-10 shadow-sm">
              <div className="text-5xl">🌸</div>
              <h3 className="mt-6 text-2xl">Thoughtful Curation</h3>
              <p className="mt-4 leading-8 text-[#6B584D]">
                Every item is chosen with intention.
              </p>
            </div>

            <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-10 shadow-sm">
              <div className="text-5xl">🤎</div>
              <h3 className="mt-6 text-2xl">Quality First</h3>
              <p className="mt-4 leading-8 text-[#6B584D]">
                Beautiful stationery that you'll actually enjoy using.
              </p>
            </div>

            <div className="rounded-3xl border border-[#EFE7DE] bg-white/80 p-10 shadow-sm">
              <div className="text-5xl">🎁</div>
              <h3 className="mt-6 text-2xl">Made For Gifting</h3>
              <p className="mt-4 leading-8 text-[#6B584D]">
                Every order should feel like opening a present.
              </p>
            </div>

          </div>

        </div>
      </section>

    </main>
  );
}