import Meg from "./components/Meg";
export default function Home() {
  return (
   <main className="bg-[#FAF6F0] text-[#5C4335]">
      {/* NAVBAR */}

<header className="sticky top-0 z-40 backdrop-blur-md bg-[#FAF6F0]/80 border-b border-[#F2E5DA]">

  <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-6">

    <div className="flex items-center gap-3">

      <img
        src="/logo.png"
        alt="Nutmeg"
        className="h-12 w-12 rounded-full"
      />

      <div>

        <h2 className="text-xl tracking-wide">
          Nutmeg
        </h2>

        <p className="text-xs text-[#B08A74]">
          Little joys for your desk.
        </p>

      </div>

    </div>

    <nav className="hidden gap-8 text-sm md:flex">

      <a href="#story" className="hover:text-[#C6868F] transition">
        Our Story
      </a>

      <a href="#products" className="hover:text-[#C6868F] transition">
        Coming Soon
      </a>

      <a href="#instagram" className="hover:text-[#C6868F] transition">
        Instagram
      </a>

    </nav>

  </div>

</header>

    {/* HERO */}

<section className="relative min-h-[85vh] overflow-hidden">

  {/* Soft background glows */}

  <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl animate-pulse"></div>

  <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-emerald-100/40 blur-3xl animate-pulse"></div>

  <div className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center px-6 py-20 text-center">

    <img
      src="/logo.png"
      alt="Nutmeg"
      className="mb-8 h-40 w-40 animate-bounce rounded-full shadow-2xl sm:h-52 sm:w-52 md:h-64 md:w-64"
      style={{
        animationDuration: "3s",
      }}
    />

    <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Curated for cozy minds ✨
    </p>

    <h1 className="mt-6 text-5xl leading-none sm:text-6xl md:text-8xl">
      Little joys
      <br />
      for your desk.
    </h1>

    <p className="mt-8 max-w-xl text-base leading-8 text-[#6B584D] sm:text-lg">
      Beautiful stationery boxes, thoughtful gifts and tiny paper treasures
      designed to brighten everyday moments.
    </p>

    <div className="mt-10 flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center">

      <a
  href="#products"
  className="rounded-full bg-[#8B5E3C] px-8 py-4 text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
  Explore What's Brewing ☕
</a>

     <a
  href="https://instagram.com/nutmeg.online"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full border border-[#8B5E3C] px-8 py-4 transition duration-300 hover:bg-[#F8D8E5]"
>
  Follow our Journey →
</a>

    </div>

    <p className="mt-16 animate-bounce text-[#B59B8C]">
      ↓ Scroll for a little joy
    </p>

  </div>

</section>

      {/* STORY */}

      <section
  id="story"
  className="bg-[#FFF9F5] px-6 py-24"
>

        <div className="mx-auto max-w-3xl text-center">

          <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
            Our Little Story
          </p>

          <h2 className="mt-6 text-4xl leading-tight sm:text-5xl">
            Little things
            <br />
            bring big joy.
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6B584D]">
            Nutmeg was created for people who believe beautiful stationery
            can make everyday moments feel a little more special.
            Every box is designed to feel like opening a thoughtful gift.
          </p>

        </div>

      </section>

      {/* WHAT'S BREWING */}

      <section
  id="products"
  className="px-6 py-24"
>

        <div className="mx-auto max-w-6xl">

          <h2 className="mb-16 text-center text-4xl sm:text-5xl">
            What's Brewing ☕
          </h2>

          <div className="grid gap-8 md:grid-cols-3">

            {[
              "Cozy Starter Box",
              "Party Favours",
              "Journal Collection",
            ].map((item) => (

              <div
                key={item}
                className="rounded-3xl bg-white p-10 shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <p className="uppercase tracking-[0.3em] text-sm text-[#C6868F]">
                  Coming Soon
                </p>

                <h3 className="mt-5 text-3xl">
                  {item}
                </h3>

                <p className="mt-5 leading-7 text-[#6B584D]">
                  Carefully curated with love by Nutmeg.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* INSTAGRAM */}

<section
  id="instagram"
  className="bg-[#FFF9F5] px-6 py-24"
>
  <div className="mx-auto max-w-3xl text-center">

    <p className="uppercase tracking-[0.35em] text-sm text-[#C6868F]">
      Follow Our Journey
    </p>

    <h2 className="mt-6 text-4xl sm:text-5xl">
      Building Nutmeg,
      <br />
      one little joy
      <br />
      at a time.
    </h2>

    <p className="mt-8 text-lg leading-8 text-[#6B584D]">
      Follow along as we sketch ideas, source beautiful stationery,
      pack our first orders and bring Nutmeg to life from the very beginning.
    </p>

    <p className="mt-6 text-xl font-semibold text-[#8B5E3C]">
      Follow @nutmeg.online
    </p>

    <a
      href="https://instagram.com/nutmeg.online"
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 inline-block rounded-full bg-[#F7D9E0] px-8 py-4 transition duration-300 hover:scale-105"
    >
      Follow on Instagram →
    </a>

  </div>
</section>
  

  <footer className="border-t border-[#F2E5DA] bg-[#FAF6F0] px-6 py-16 text-center">

  <p className="text-5xl">
    ☕
  </p>

  <h3 className="mt-5 text-3xl">
    Brewed with love.
  </h3>

  <p className="mt-5 text-[#8B6B5A]">
    Little joys for your desk.
  </p>

  <p className="mt-2 text-sm text-[#B59B8C]">
    © 2026 Nutmeg
  </p>

</footer>

   <Meg /> </main>
  );
}